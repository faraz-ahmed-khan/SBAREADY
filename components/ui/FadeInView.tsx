"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInViewProps = HTMLMotionProps<"div"> & {
  className?: string;
  children: React.ReactNode;
};

const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

export function FadeInView({ className, children, ...rest }: FadeInViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
