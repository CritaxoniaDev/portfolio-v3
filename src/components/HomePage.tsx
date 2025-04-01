"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomCard } from "@/components/ui/custom-card";
import { Badge } from "@/components/ui/badge";
import { CornerIcon } from "@/components/ui/custom-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Cover } from "@/components/ui/cover";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import styles from "@/styles/__homepage-5c24b325-f738-4821-8364-8e00db729481.module.css";
import { motion } from "motion/react";

export default function HomePage() {
    // Colors array for the static pointers
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
        <FollowerPointerCard
            title="Welcome to my portfolio"
            className={styles.background_wrapper}
        >
            <div className={styles.container_wrapper}>
                {/* Square line border with corner decorations */}
                <div className={styles.square_border}>
                    {/* Top-left corner decoration */}
                    <div className={styles.corner_decoration_top_left}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="14" height="14" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Top-right corner decoration */}
                    <div className={styles.corner_decoration_top_right}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="19" y="3" width="14" height="14" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Bottom-left corner decoration */}
                    <div className={styles.corner_decoration_bottom_left}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="19" width="14" height="14" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Bottom-right corner decoration */}
                    <div className={styles.corner_decoration_bottom_right}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="19" y="19" width="14" height="14" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>

                {/* Static pointers */}
                <motion.div
                    className={styles.static_pointer}
                    style={{
                        top: "15%",
                        left: "10%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="1"
                        viewBox="0 0 16 16"
                        className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
                    </svg>
                    <motion.div
                        style={{
                            backgroundColor: colors[0],
                        }}
                        initial={{
                            scale: 0.5,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        className="min-w-max rounded-full bg-neutral-200 px-2 py-2 text-xs whitespace-nowrap text-white"
                    >
                        Welcome!
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.static_pointer}
                    style={{
                        top: "70%",
                        right: "15%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="1"
                        viewBox="0 0 16 16"
                        className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
                    </svg>
                    <motion.div
                        style={{
                            backgroundColor: colors[2],
                        }}
                        initial={{
                            scale: 0.5,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        className="min-w-max rounded-full bg-neutral-200 px-2 py-2 text-xs whitespace-nowrap text-white"
                    >
                        Check out my skills!
                    </motion.div>
                </motion.div>

                <main className={styles.main_content}>
                    <div className={styles.hero_section}>
                        <div className={styles.profile_image_wrapper}>
                            <div className={styles.profile_image_container}>
                                <div className={styles.profile_image_border}>
                                    <Image
                                        src="/images/pic.jpg"
                                        alt="Gian Raphael Alcantara"
                                        width={256}
                                        height={256}
                                        className={styles.profile_image}
                                        priority
                                    />

                                    {/* Corner Icons */}
                                    <CornerIcon className={styles.corner_icon_top_left} />
                                    <CornerIcon className={styles.corner_icon_bottom_left} />
                                    <CornerIcon className={styles.corner_icon_top_right} />
                                    <CornerIcon className={styles.corner_icon_bottom_right} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.hero_text_container}>
                            <h1 className={styles.hero_title}>
                                <div className={styles.hero_name_top}>
                                    <Cover className={styles.hero_title_text}>
                                        Gian{" "}
                                        <LineShadowText
                                            className={styles.hero_title_text}
                                            shadowColor="#8A2BE2" // Using the violet color from your palette
                                        >
                                            Raphael
                                        </LineShadowText>
                                    </Cover>
                                </div>
                                <div className={styles.hero_name_bottom}>
                                    <AuroraText
                                        colors={[
                                            "#3D3D3D", // Dark grey
                                            "#4A4A4A", // Medium grey
                                            "#8A2BE2", // Violet
                                            "#9370DB", // Medium purple
                                            "#C71585", // Medium violet red
                                            "#DC143C"  // Crimson red
                                        ]}
                                        speed={1.2}
                                        className={`${styles.hero_title_text} ${styles.geist_mono_text}`}
                                    >
                                        Alcantara
                                    </AuroraText>
                                </div>
                            </h1>
                            <p className={styles.hero_description}>
                                BSIT - Software Engineering Student at First City Providential College and an aspiring Full-Stack Web Developer based in Bulacan, Philippines.
                            </p>
                            <div className={styles.button_container}>
                                <CustomButton>
                                    Contact Me
                                </CustomButton>
                                <CustomButton variant="outline">
                                    Download Resume
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cards_grid}>
                        <motion.div
                            className={styles.card_wrapper}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CustomCard
                                title="Full-Stack Developer"
                                description="Specialized in modern web technologies"
                                className={styles.card_content}
                            >
                                <div className={styles.card_icon_container}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={styles.card_icon}
                                    >
                                        <path d="M18 10h-4v4h4v-4z" />
                                        <path d="M10 10H6v4h4v-4z" />
                                        <path d="M2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z" />
                                        <path d="M12 6v12" />
                                        <path d="M6 14v4" />
                                        <path d="M18 14v4" />
                                    </svg>
                                </div>
                                <p className={styles.card_paragraph}>I build responsive, user-friendly applications with React, Next.js, and TypeScript. Passionate about clean code and intuitive UIs.</p>
                                <motion.div
                                    className={styles.card_shine}
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeatDelay: 5
                                    }}
                                />
                            </CustomCard>
                        </motion.div>

                        <motion.div
                            className={styles.card_wrapper}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <CustomCard
                                title="Problem Solver"
                                description="Turning complex challenges into elegant solutions"
                                className={styles.card_content}
                            >
                                <div className={styles.card_icon_container}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={styles.card_icon}
                                    >
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <p className={styles.card_paragraph}>With strong analytical skills and attention to detail, I approach each project as an opportunity to create efficient, scalable solutions.</p>
                                <motion.div
                                    className={styles.card_shine}
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeatDelay: 7
                                    }}
                                />
                            </CustomCard>
                        </motion.div>

                        <motion.div
                            className={styles.card_wrapper}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <CustomCard
                                title="Continuous Learner"
                                description="Always expanding my technical knowledge"
                                className={styles.card_content}
                            >
                                <div className={styles.card_icon_container}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={styles.card_icon}
                                    >
                                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z" />
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                    </svg>
                                </div>
                                <p className={styles.card_paragraph}>I stay current with emerging technologies and best practices, constantly refining my skills to deliver cutting-edge applications.</p>
                                <motion.div
                                    className={styles.card_shine}
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeatDelay: 9
                                    }}
                                />
                            </CustomCard>
                        </motion.div>
                    </div>
                </main>
            </div>
        </FollowerPointerCard>
    );
}
