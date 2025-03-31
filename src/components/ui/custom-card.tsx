"use client"

import React from "react"
import { cn } from "@/lib/utils"
import styles from "@/styles/__custom-card-7a9e2b14-c5d3-4f8e-9b67-8e00db729481.module.css"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  children?: React.ReactNode
}

export const CustomCard = ({
  title,
  description,
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        styles.card_container,
        className
      )}
      {...props}
    >
      <CornerIcon className={styles.corner_icon_top_left} />
      <CornerIcon className={styles.corner_icon_bottom_left} />
      <CornerIcon className={styles.corner_icon_top_right} />
      <CornerIcon className={styles.corner_icon_bottom_right} />

      <div className={styles.card_content}>
        <div>
          <h3 className={styles.card_title}>{title}</h3>
          {description && <p className={styles.card_description}>{description}</p>}
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export const CornerIcon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn(styles.corner_icon, className)}
      {...rest}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M12 6v12m6-6H6" 
        filter="url(#glow)"
      />
    </svg>
  )
}
  