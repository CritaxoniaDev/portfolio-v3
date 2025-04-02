"use client"

import React from "react"
import { CustomCard } from "@/components/ui/custom-card"
import { AuroraText } from "@/components/magicui/aurora-text"
import { GraduationCap, BookOpen, School } from "lucide-react"
import Image from "next/image"
import styles from "@/styles/__education-3f2e1d0c-a9b8-4c7d-b6e5-8e00db729481.module.css"

const Education = () => {
  const educationData = [
    {
      period: "2023 - Present",
      title: "Applied Degree in Software Engineering",
      institution: "Lithan Educlaas",
      description: "Pursuing advanced software engineering concepts and practical applications",
      icon: <GraduationCap className={styles.icon_blue} />,
      color: "blue",
      logo: "/images/lithan.png",
      colorClass: styles.blue_accent,
      dotClass: styles.dot_blue
    },
    {
      period: "2023 - Present",
      title: "Bachelor of Science in Information Technology",
      institution: "First City Providential College",
      description: "Focusing on software development and engineering principles",
      icon: <BookOpen className={styles.icon_green} />,
      color: "green",
      logo: "/images/fcpc.png",
      colorClass: styles.green_accent,
      dotClass: styles.dot_green
    },
    {
      period: "2021 - 2023",
      title: "General Academic Strand (GAS)",
      institution: "Sapang Palay National High School",
      description: "Completed secondary education with focus on academic excellence",
      icon: <School className={styles.icon_purple} />,
      color: "purple",
      logo: "/images/spnhs.png",
      colorClass: styles.purple_accent,
      dotClass: styles.dot_purple
    }
  ]

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.geist_mono_text}`}>Educational Background</h2>
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
            My academic journey that has shaped my knowledge and skills
          </AuroraText>
        </div>

        <div className={styles.timeline_container}>
          {/* Timeline line */}
          <div className={styles.timeline_line}></div>
          
          <div className={styles.timeline_items}>
            {educationData.map((item, index) => (
              <div key={index} className={styles.timeline_item}>
                {/* Timeline dot */}
                <div className={`${styles.timeline_dot} ${item.dotClass}`}></div>
                
                {/* Date marker */}
                <div className={styles.date_marker}>
                  {item.period}
                </div>
                
                {/* Card - alternating sides */}
                <div className={index % 2 === 0 ? styles.card_right : styles.card_left}>
                  <div className={styles.card_wrapper}>
                    <CustomCard
                      title={item.title}
                      description={item.institution}
                      className={`${styles.education_card} ${item.colorClass}`}
                    >
                      <div className={styles.card_header}>
                        <div className={styles.icon_wrapper}>
                          <div className={`${styles.icon_container} ${styles[`icon_bg_${item.color}`]}`}>
                            {item.icon}
                          </div>
                        </div>
                        
                        {/* Institution Logo */}
                        <div className={styles.logo_container}>
                          <Image 
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            fill
                            className={styles.logo_image}
                          />
                        </div>
                      </div>
                      
                      <p className={`${styles.description} ${styles[`border_${item.color}`]}`}>
                        {item.description}
                      </p>
                    </CustomCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
