"use client"

import React, { useEffect, useState, useRef } from "react"
import { CustomCard } from "@/components/ui/custom-card"
import { Code, User, Lightbulb } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import styles from "@/styles/__about-7e6d5c4b-a9b8-4c7d-b6e5-8e00db729481.module.css"

const About = () => {
  const [timeAlive, setTimeAlive] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Calculate age based on birthdate
    const calculateAge = () => {
      const birthDate = new Date('2005-06-15') // Replace with your actual birthdate
      const today = new Date()

      let years = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        years--
      }

      setTimeAlive(`${years} years`)
    }

    calculateAge()
  }, [])

  const aboutSections = [
    {
      title: "Who I Am",
      content: `My name is Gian Raphael Alcantara, I am ${timeAlive} old, a dedicated software engineering student at First City Providential College. My mission revolves around mastering programming languages, algorithms, and software development methodologies.`,
      icon: <User className={styles.icon_blue} />,
      color: "blue",
      ref: card1Ref,
      colorClass: styles.blue_accent
    },
    {
      title: "My Passion",
      content: "Fueled by a relentless passion for technology and innovation, I aspire to become a proficient software engineer capable of tackling complex problems and contributing to groundbreaking projects.",
      icon: <Code className={styles.icon_green} />,
      color: "green",
      ref: card2Ref,
      colorClass: styles.green_accent
    },
    {
      title: "My Vision",
      content: "My vision extends beyond mere academic excellence; I aim to leverage my skills to create impactful solutions that address real-world challenges, whether it's enhancing user experiences, optimizing system performance, or revolutionizing industries through cutting-edge software solutions.",
      icon: <Lightbulb className={styles.icon_purple} />,
      color: "purple",
      ref: card3Ref,
      colorClass: styles.purple_accent
    }
  ]

  const beamConfigurations = [
    {
      fromRef: card1Ref,
      toRef: card2Ref,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#3b82f6",
      gradientStopColor: "#10b981",
      duration: 4,
      curvature: 50,
      reverse: false
    },
    {
      fromRef: card2Ref,
      toRef: card3Ref,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#10b981",
      gradientStopColor: "#8b5cf6",
      duration: 4,
      curvature: 50,
      reverse: false
    },
    {
      fromRef: card3Ref,
      toRef: card1Ref,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#8b5cf6",
      gradientStopColor: "#3b82f6",
      duration: 4,
      curvature: -100,
      reverse: true
    }
  ]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <AuroraText 
            className={styles.subtitle}
            colors={[
              "#4B5563", // Gray
              "#6B7280", // Light gray
              "#3B82F6", // Blue
              "#10B981", // Green
              "#8B5CF6", // Purple
              "#6366F1"  // Indigo
            ]}
            speed={0.8}
          >
            Passionate software engineering student with a vision for innovation
          </AuroraText>
        </div>

        <div className={styles.cards_container} ref={containerRef}>
          <div className={styles.cards_grid}>
            {aboutSections.map((section, index) => (
              <div
                key={index}
                ref={section.ref}
                className={styles.card_wrapper}
              >
                <CustomCard
                  title={section.title}
                  className={`${styles.about_card} ${section.colorClass}`}
                >
                  <div className={styles.card_content}>
                    <div className={styles.icon_container} data-color={section.color}>
                      {section.icon}
                    </div>
                    <div className={styles.text_container}>
                      <p className={`${styles.card_text} ${section.colorClass}`}>
                        {section.content}
                      </p>
                    </div>
                  </div>
                </CustomCard>
              </div>
            ))}
          </div>

          {/* Animated Beams connecting the cards */}
          {beamConfigurations.map((config, index) => (
            config.fromRef.current && config.toRef.current && (
              <AnimatedBeam
                key={index}
                containerRef={containerRef}
                fromRef={config.fromRef}
                toRef={config.toRef}
                pathColor={config.pathColor}
                pathWidth={config.pathWidth}
                gradientStartColor={config.gradientStartColor}
                gradientStopColor={config.gradientStopColor}
                duration={config.duration}
                curvature={config.curvature}
                reverse={config.reverse}
              />
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
