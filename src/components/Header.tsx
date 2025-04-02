"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils"
import styles from "@/styles/__header-5c24b325-f738-4821-8364-8e00db729481.module.css"
import { motion, useMotionValue } from "motion/react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeTooltip, setActiveTooltip] = useState("")
    const navRef = useRef<HTMLElement>(null)
    
    // Mouse tracking for custom pointer
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Handle mouse movement for custom pointer
    const handleMouseMove = (e: React.MouseEvent) => {
        if (navRef.current) {
            const rect = navRef.current.getBoundingClientRect();
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
        }
    };

    // Colors for the tooltip
    const colors = [
        "#0ea5e9",
        "#737373",
        "#14b8a6",
        "#22c55e",
        "#3b82f6",
        "#ef4444",
        "#eab308",
    ];

    return (
        <header
            className={cn(
                styles.header_container,
                scrolled
                    ? styles.header_scrolled
                    : styles.header_transparent
            )}
        >
            <div className={styles.header_inner}>
                {/* Logo with reduced padding */}
                <div className={styles.logo_container}>
                    <Link href="#" className={styles.logo_link}>
                        <div className={styles.logo_svg_container}>
                            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className={styles.logo_svg}>
                                {/* Background gradient */}
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#8B5CF6" />
                                        <stop offset="100%" stopColor="#4338CA" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Base circle */}
                                <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />

                                {/* Decorative elements */}
                                <circle cx="20" cy="20" r="16" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                                <circle cx="20" cy="20" r="12" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />

                                {/* G letter */}
                                <path
                                    d="M26,15.5 C24.5,13 21.5,12 19,12 C14.5,12 11,15.5 11,20 C11,24.5 14.5,28 19,28 C21.5,28 24.5,27 26,24.5 L26,20 L19,20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#glow)"
                                />
                            </svg>
                        </div>
                        <span className={styles.logo_text}>Gian Raphael</span>
                    </Link>
                </div>

                {/* Desktop Navigation - Centered with custom tooltip */}
                <nav 
                    className={`${styles.desktop_nav} ${styles.geist_mono_text}`}
                    ref={navRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Custom tooltip (without the pointer SVG) */}
                    {isHovering && activeTooltip && (
                        <motion.div
                            className="absolute z-50 pointer-events-none"
                            style={{
                                top: y,
                                left: x,
                                transform: 'translate(-50%, -100%)',
                                marginTop: '-10px'
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <motion.div
                                style={{
                                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                                }}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                className="min-w-max rounded-full bg-neutral-200 px-2 py-1 text-xs whitespace-nowrap text-white"
                            >
                                {activeTooltip}
                            </motion.div>
                        </motion.div>
                    )}

                    <Link
                        href="#about"
                        className={styles.nav_link}
                        onMouseEnter={() => setActiveTooltip("About Me")}
                        onMouseLeave={() => setActiveTooltip("")}
                    >
                        About
                    </Link>

                    <Link
                        href="#experience"
                        className={styles.nav_link}
                        onMouseEnter={() => setActiveTooltip("My Experience")}
                        onMouseLeave={() => setActiveTooltip("")}
                    >
                        Experience
                    </Link>

                    <Link
                        href="#education"
                        className={styles.nav_link}
                        onMouseEnter={() => setActiveTooltip("My Education")}
                        onMouseLeave={() => setActiveTooltip("")}
                    >
                        Education
                    </Link>

                    <Link
                        href="#skills"
                        className={styles.nav_link}
                        onMouseEnter={() => setActiveTooltip("My Skills")}
                        onMouseLeave={() => setActiveTooltip("")}
                    >
                        Skills
                    </Link>

                    <Link
                        href="#projects"
                        className={styles.nav_link}
                        onMouseEnter={() => setActiveTooltip("My Projects")}
                        onMouseLeave={() => setActiveTooltip("")}
                    >
                        Projects
                    </Link>

                    <Link
                        href="#contact"
                        className={styles.nav_link}
                        onMouseEnter={() => setActiveTooltip("Contact Me")}
                        onMouseLeave={() => setActiveTooltip("")}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Right side - Resume button with reduced padding */}
                <div className={styles.resume_button_container}>
                    <CustomButton variant="outline" size="sm">
                        Resume
                    </CustomButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobile_menu_button}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={styles.mobile_menu_icon}
                    >
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobile_menu} ${mobileMenuOpen ? styles.mobile_menu_visible : styles.mobile_menu_hidden}`}>
                <div className={styles.mobile_menu_inner}>
                    <Link
                        href="#about"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="#experience"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Experience
                    </Link>
                    <Link
                        href="#education"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Education
                    </Link>
                    <Link
                        href="#skills"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#projects"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <CustomButton variant="outline" size="sm">
                        Resume
                    </CustomButton>
                </div>
            </div>
        </header>
    )
}
