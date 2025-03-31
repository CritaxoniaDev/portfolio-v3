"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import styles from "@/styles/custom-button-9d8f7e6c-b5a4-4c3e-a2b1-8e00db729481.module.css"

// Create a proper interface that extends the button's props
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  showCornerIcons?: boolean
  asChild?: boolean
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, showCornerIcons = true, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <div className={styles.button_wrapper}>
        <Button
          ref={ref}
          className={cn(styles.custom_button, className)}
          variant={variant}
          size={size}
          asChild={asChild}
          {...props}
        >
          {children}
        </Button>
        
        {showCornerIcons && (
          <>
            <CornerIcon className={styles.corner_icon_top_left} />
            <CornerIcon className={styles.corner_icon_bottom_left} />
            <CornerIcon className={styles.corner_icon_top_right} />
            <CornerIcon className={styles.corner_icon_bottom_right} />
          </>
        )}
      </div>
    )
  }
)

CustomButton.displayName = "CustomButton"

export const CornerIcon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
