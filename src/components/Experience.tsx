"use client"

import React from "react"
import { CustomCard } from "@/components/ui/custom-card"
import Image from "next/image"
import { FaLaravel, FaPhp } from "react-icons/fa"
import { SiMysql, SiOpenai } from "react-icons/si"
import { Briefcase } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import styles from "@/styles/__experience-9d8f7e6c-b5a4-4c3e-a2b1-8e00db729481.module.css"

const Experience = () => {
  const experienceData = [
    {
      title: "Technology Associate",
      company: "Lithan EduClaaS",
      logo: "/images/educlaas-logo.png",
      period: "Nov 2024 - Present",
      description: [
        "Webhosting and web server management",
        "Hands-on experience in LMS platform technical administration",
        "Any other tasks related to the business unit"
      ],
      skills: [
        { name: "Laravel", icon: FaLaravel },
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: SiMysql },
        { name: "OpenAi API", icon: SiOpenai }
      ]
    }
    // You can add more experience items here
  ]

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <AuroraText
            speed={1.2}
            className={styles.subtitle_aurora}
          >
            My professional journey and the skills I've developed along the way
          </AuroraText>
        </div>

        <div className={styles.timeline_container}>
          {experienceData.map((item, index) => (
            <div key={index} className={styles.timeline_item}>
              <div className={styles.timeline_line}></div>
              
              <div className={styles.card_container}>
                {/* Timeline dot */}
                <div className={styles.timeline_dot}></div>
                
                <CustomCard
                  title={item.title}
                  description={item.company}
                  className={styles.experience_card}
                >
                  <div className={styles.card_header}>
                    <span className={styles.period}>{item.period}</span>
                    
                    {/* Company Logo */}
                    <div className={styles.logo_container}>
                      <Image 
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className={styles.logo_image}
                      />
                    </div>
                  </div>
                  
                  <ul className={styles.description_list}>
                    {item.description.map((desc, i) => (
                      <li key={i} className={styles.description_item}>
                        <span className={styles.bullet}>•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={styles.skills_section}>
                    <p className={styles.skills_title}>Skills & Technologies</p>
                    <div className={styles.skills_container}>
                      {item.skills.map((skill, i) => (
                        <div key={i} className={styles.skill_badge}>
                          <skill.icon className={styles.skill_icon} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CustomCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
