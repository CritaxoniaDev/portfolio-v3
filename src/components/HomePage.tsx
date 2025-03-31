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

export default function HomePage() {
    return (
        <div className={styles.container_wrapper}>
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
                                    className={styles.hero_title_text}
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
                    <FollowerPointerCard title="Gian Raphael Alcantara" className={styles.card_height}>
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
                        </CustomCard>
                    </FollowerPointerCard>

                    <FollowerPointerCard title="Gian Raphael Alcantara" className={styles.card_height}>
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
                        </CustomCard>
                    </FollowerPointerCard>

                    <FollowerPointerCard title="Gian Raphael Alcantara" className={styles.card_height}>
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
                        </CustomCard>
                    </FollowerPointerCard>
                </div>
            </main>
        </div>
    );
}
