type SubmitNetworkContactInput = {
  name: string;
  email: string;
  message: string;
};

type ZohoTokenResponse = {
  access_token?: string;
  expires_in?: number;
  api_domain?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
};

type ZohoCreatorErrorResponse = {
  code?: number | string;
  message?: string;
  error?: string;
};

type ZohoCreatorResponse = ZohoCreatorErrorResponse & {
  data?: Array<ZohoCreatorErrorResponse>;
};

function ensureZohoSuccess(response: ZohoCreatorResponse) {
  const topCode = Number(response.code ?? 3000);
  const firstRow = response.data?.[0];
  const rowCode = firstRow?.code === undefined ? 3000 : Number(firstRow.code);

  if (topCode !== 3000 || rowCode !== 3000) {
    throw new Error(
      firstRow?.message ||
        response.message ||
        response.error ||
        "Zoho Creator rejected the contact submission."
    );
  }
}

export async function getAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Zoho OAuth environment variables.");
  }

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });

  const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
    cache: "no-store",
  });

  const data = (await res.json()) as ZohoTokenResponse;

  if (!res.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || "Failed to get Zoho access token.");
  }

  return data.access_token;
}

export async function submitNetworkContactToZoho(input: SubmitNetworkContactInput): Promise<unknown> {
  const owner = process.env.ZOHO_ACCOUNT_NAME;
  const appLinkName = process.env.ZOHO_APP_NAME;
  const formLinkName = process.env.ZOHO_FORM_LINK_NAME;

  if (!owner || !appLinkName || !formLinkName) {
    throw new Error("Missing Zoho Creator app configuration.");
  }

  const accessToken = await getAccessToken();
  const [firstName, ...restName] = input.name.trim().split(/\s+/);
  const lastName = restName.join(" ");

  const payload = {
    data: [
      {
        Name: {
          first_name: firstName,
          last_name: lastName,
        },
        Email: input.email,
        Message: input.message,
      },
    ],
  };

  const res = await fetch(
    `https://www.zohoapis.com/creator/v2.1/data/${owner}/${appLinkName}/form/${formLinkName}`,
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  const data = (await res.json()) as ZohoCreatorResponse;

  if (!res.ok) {
    const errorData = data as ZohoCreatorErrorResponse;
    throw new Error(
      errorData.message || errorData.error || "Zoho Creator rejected the contact submission."
    );
  }

  ensureZohoSuccess(data);
  return data;
}