import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import styles from "@/styles/__line-shadow-text-4e2d1c0b-a9b8-4c7d-b6e5-8e00db729481.module.css";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  as?: React.ElementType;
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion.create(Component);
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(styles.line_shadow_text, className)}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
