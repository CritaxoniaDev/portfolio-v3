"use client"

import React, { useEffect, useState, useRef } from "react"
import { CustomCard } from "@/components/ui/custom-card"
import { AuroraText } from "@/components/magicui/aurora-text"
import Image from "next/image"
import styles from "@/styles/__about-7e6d5c4b-a9b8-4c7d-b6e5-8e00db729481.module.css"
import { motion } from "motion/react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { Code, Database, Globe, Server, Cpu } from "lucide-react"

const About = () => {
  const [timeAlive, setTimeAlive] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const meRef = useRef<HTMLDivElement>(null)
  const frontendRef = useRef<HTMLDivElement>(null)
  const backendRef = useRef<HTMLDivElement>(null)
  const databaseRef = useRef<HTMLDivElement>(null)
  const devopsRef = useRef<HTMLDivElement>(null)

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

  const beamConfigurations = [
    {
      fromRef: meRef,
      toRef: frontendRef,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#3b82f6",
      gradientStopColor: "#10b981",
      duration: 4,
      curvature: 50,
      reverse: false
    },
    {
      fromRef: meRef,
      toRef: backendRef,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#8b5cf6",
      gradientStopColor: "#3b82f6",
      duration: 4,
      curvature: -50,
      reverse: false
    },
    {
      fromRef: meRef,
      toRef: databaseRef,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#10b981",
      gradientStopColor: "#8b5cf6",
      duration: 4,
      curvature: 70,
      reverse: false
    },
    {
      fromRef: meRef,
      toRef: devopsRef,
      pathColor: "#e2e8f0",
      pathWidth: 1.5,
      gradientStartColor: "#ef4444",
      gradientStopColor: "#f59e0b",
      duration: 4,
      curvature: -70,
      reverse: false
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

        <div className={styles.unified_card_content}>
          <motion.div
            className={styles.about_content}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.bio_text}>
              <p>
                My name is Gian Raphael Alcantara, I am {timeAlive} old, a dedicated software engineering student at First City Providential College. My mission revolves around mastering programming languages, algorithms, and software development methodologies. Fueled by a relentless passion for technology and innovation, I aspire to become a proficient software engineer capable of tackling complex problems and contributing to groundbreaking projects. My vision extends beyond mere academic excellence; I aim to leverage my skills to create impactful solutions that address real-world challenges, whether it's enhancing user experiences, optimizing system performance, or revolutionizing industries through cutting-edge software solutions.
              </p>
            </div>
          </motion.div>

          <div className={styles.divider}>
            <div className={styles.divider_line}></div>
            <div className={styles.divider_icon}></div>
            <div className={styles.divider_line}></div>
          </div>

          <div className={styles.skills_container} ref={containerRef}>
            <motion.div
              className={styles.image_container}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className={styles.svg_wrapper} ref={meRef}>
                <Image
                  src="/icons/me.svg"
                  alt="Gian Raphael Alcantara"
                  width={244}
                  height={654}
                  className={styles.me_svg}
                  priority
                />
                <div className={styles.glow_effect}></div>
              </div>
              
              <div className={styles.skills_icons}>
                <motion.div 
                  className={`${styles.skill_icon} ${styles.frontend}`}
                  ref={frontendRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className={styles.skill_icon_inner}>
                    <Globe size={28} />
                    <span>Frontend</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`${styles.skill_icon} ${styles.backend}`}
                  ref={backendRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className={styles.skill_icon_inner}>
                    <Server size={28} />
                    <span>Backend</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`${styles.skill_icon} ${styles.database}`}
                  ref={databaseRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className={styles.skill_icon_inner}>
                    <Database size={28} />
                    <span>Database</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`${styles.skill_icon} ${styles.devops}`}
                  ref={devopsRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className={styles.skill_icon_inner}>
                    <Cpu size={28} />
                    <span>UI/UX Design</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Animated Beams connecting the SVG to skills */}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
