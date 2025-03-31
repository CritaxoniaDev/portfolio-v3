"use client"

import { useState, useEffect } from "react"
import Link from "next/link";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { CustomButton } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils"
import styles from "@/styles/header-5c24b325-f738-4821-8364-8e00db729481.module.css"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
                    <Link href="/" className={styles.logo_link}>
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

                {/* Desktop Navigation - Centered */}
                <nav className={styles.desktop_nav}>
                    <Link
                        href="/about"
                        className={styles.nav_link}
                    >
                        <FollowerPointerCard title="About Me" className={styles.nav_pointer}>
                            About
                        </FollowerPointerCard>
                    </Link>

                    <Link
                        href="/experience"
                        className={styles.nav_link}
                    >
                        <FollowerPointerCard title="My Experience" className={styles.nav_pointer}>
                            Experience
                        </FollowerPointerCard>
                    </Link>

                    <Link
                        href="/education"
                        className={styles.nav_link}
                    >
                        <FollowerPointerCard title="My Education" className={styles.nav_pointer}>
                            Education
                        </FollowerPointerCard>
                    </Link>

                    <Link
                        href="/skills"
                        className={styles.nav_link}
                    >
                        <FollowerPointerCard title="My Skills" className={styles.nav_pointer}>
                            Skills
                        </FollowerPointerCard>
                    </Link>

                    <Link
                        href="/projects"
                        className={styles.nav_link}
                    >
                        <FollowerPointerCard title="My Projects" className={styles.nav_pointer}>
                            Projects
                        </FollowerPointerCard>
                    </Link>

                    <Link
                        href="/contact"
                        className={styles.nav_link}
                    >
                        <FollowerPointerCard title="Contact Me" className={styles.nav_pointer}>
                            Contact
                        </FollowerPointerCard>
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
                        href="/projects"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className={styles.mobile_menu_link}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
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
