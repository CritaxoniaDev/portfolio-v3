"use client"

import React, { useState } from "react"
import { AuroraText } from "@/components/magicui/aurora-text"
import styles from "@/styles/__skills-9e7f8d6c-b5a4-4c3e-a2b1-8e00db729481.module.css"
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaJsSquare, FaWind,
  FaReact, FaJava, FaLeaf, FaDatabase, FaLifeRing, FaPhp,
  FaLaravel, FaPencilRuler, FaFigma, FaServer, FaCat
} from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si"
import { motion } from "motion/react"
import { CornerIcon } from "@/components/ui/corner-icon"
import cornerStyles from "@/styles/__corner-icon.module.css"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skills = [
    { name: 'HTML', icon: FaHtml5, category: 'frontend', color: 'text-red-500' },
    { name: 'CSS', icon: FaCss3Alt, category: 'frontend', color: 'text-blue-500' },
    { name: 'Bootstrap', icon: FaBootstrap, category: 'frontend', color: 'text-purple-500' },
    { name: 'JavaScript', icon: FaJs, category: 'frontend', color: 'text-yellow-400' },
    { name: 'jQuery', icon: FaJsSquare, category: 'frontend', color: 'text-blue-400' },
    { name: 'Tailwind', icon: FaWind, category: 'frontend', color: 'text-teal-500' },
    { name: 'React', icon: FaReact, category: 'frontend', color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: 'text-gray-800 dark:text-white' },

    { name: 'Java', icon: FaJava, category: 'backend', color: 'text-red-500' },
    { name: 'Spring Boot', icon: FaLeaf, category: 'backend', color: 'text-green-500' },
    { name: 'MySQL', icon: FaDatabase, category: 'backend', color: 'text-blue-600' },
    { name: 'Spring MVC', icon: FaLeaf, category: 'backend', color: 'text-green-600' },
    { name: 'Liferay', icon: FaLifeRing, category: 'backend', color: 'text-blue-500' },
    { name: 'PHP', icon: FaPhp, category: 'backend', color: 'text-purple-600' },
    { name: 'Laravel', icon: FaLaravel, category: 'backend', color: 'text-red-600' },
    { name: 'Apache', icon: FaServer, category: 'backend', color: 'text-red-500' },
    { name: 'Tomcat', icon: FaCat, category: 'backend', color: 'text-yellow-600' },
    { name: 'Firebase', icon: SiFirebase, category: 'backend', color: 'text-yellow-500' },

    { name: 'Axure RP', icon: FaPencilRuler, category: 'uiux', color: 'text-gray-600' },
    { name: 'Figma', icon: FaFigma, category: 'uiux', color: 'text-purple-500' },
  ]

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <FaReact className={styles.category_icon} /> },
    { id: 'backend', name: 'Backend', icon: <FaServer className={styles.category_icon} /> },
    { id: 'uiux', name: 'UI/UX', icon: <FaFigma className={styles.category_icon} /> }
  ]

  const filteredSkills = skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.geist_mono_text}`}>Technical Skills</h2>
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
            Technologies and tools I've worked with
          </AuroraText>
        </div>

        <div className={styles.skills_layout}>
          {/* Category Selection - Simplified */}
          <div className={styles.categories_container}>
            {categories.map(category => (
              <motion.div
                key={category.id}
                className={`${styles.category_card} ${activeCategory === category.id ? styles.active_category : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  borderLeftColor: activeCategory === category.id ?
                    (category.id === 'frontend' ? '#3b82f6' :
                      category.id === 'backend' ? '#10b981' : '#8b5cf6') :
                    'transparent'
                }}
              >
                <div className={styles.category_icon_wrapper}>
                  {React.cloneElement(category.icon, {
                    style: {
                      color: category.id === 'frontend' ? '#3b82f6' :
                        category.id === 'backend' ? '#10b981' : '#8b5cf6'
                    }
                  })}
                </div>
                <span
                  className={styles.category_name}
                  style={{
                    color: activeCategory === category.id ?
                      (category.id === 'frontend' ? '#3b82f6' :
                        category.id === 'backend' ? '#10b981' : '#8b5cf6') :
                      'inherit'
                  }}
                >
                  {category.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Skills Display - Modernized */}
          <motion.div
            className={styles.skills_card}
            key={activeCategory + "-card"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.skills_header}>
              <h3
                className={styles.skills_title}
                style={{
                  color: activeCategory === 'frontend' ? '#3b82f6' :
                    activeCategory === 'backend' ? '#10b981' : '#8b5cf6'
                }}
              >
                {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
              </h3>
              <div
                className={styles.skills_divider}
                style={{
                  backgroundColor: activeCategory === 'frontend' ? '#3b82f6' :
                    activeCategory === 'backend' ? '#10b981' : '#8b5cf6'
                }}
              ></div>
            </div>

            <motion.div
              className={styles.skills_grid}
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'relative' }}
            >
              {/* Dashed Grid Overlay */}
              <div className={styles.dashed_grid_overlay}>
                {/* Horizontal dashed lines - one in the middle */}
                <div
                  className={styles.horizontal_dashed_line}
                  style={{ top: '50%' }}
                ></div>

                {/* Vertical dashed line - one in the middle */}
                <div
                  className={styles.vertical_dashed_line}
                  style={{ left: '50%' }}
                ></div>
              </div>

              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon;
                // Extract color from the Tailwind class
                const colorClass = skill.color;
                const colorHex = colorClass.includes('red') ? '#ef4444' :
                  colorClass.includes('blue') ? '#3b82f6' :
                    colorClass.includes('green') ? '#10b981' :
                      colorClass.includes('purple') ? '#8b5cf6' :
                        colorClass.includes('yellow') ? '#f59e0b' :
                          colorClass.includes('teal') ? '#14b8a6' :
                            colorClass.includes('gray') ? '#6b7280' : '#000000';

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={styles.skill_item}
                    whileHover={{
                      y: -2,
                      boxShadow: `0 4px 14px rgba(0, 0, 0, 0.08)`,
                      borderColor: `${colorHex}40` // 25% opacity version of the color
                    }}
                    style={{ borderColor: 'rgba(0, 0, 0, 0.1)', zIndex: 2 }} // Higher z-index to appear above grid lines
                  >
                    {/* Corner icon */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={cornerStyles.corner_icon_top_left}
                      style={{ color: colorHex }}
                    >
                      <CornerIcon />
                    </motion.div>

                    <div className={styles.skill_icon_container}>
                      <Icon className={styles.skill_icon} style={{ color: colorHex }} />
                    </div>
                    <div className={styles.skill_name_container}>
                      <span className={styles.skill_name}>{skill.name}</span>
                      <div className={styles.skill_bar}>
                        <motion.div
                          className={styles.skill_progress}
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
                          style={{
                            background: `linear-gradient(90deg, ${colorHex}, ${colorHex}99)`
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
