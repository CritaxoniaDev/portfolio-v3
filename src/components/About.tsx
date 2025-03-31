"use client"

import React, { useEffect, useState, useRef } from "react"
import { CustomCard } from "@/components/ui/custom-card"
import { Code, User, Lightbulb } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

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
      icon: <User className="w-6 h-6 text-blue-500" />,
      color: "blue",
      ref: card1Ref
    },
    {
      title: "My Passion",
      content: "Fueled by a relentless passion for technology and innovation, I aspire to become a proficient software engineer capable of tackling complex problems and contributing to groundbreaking projects.",
      icon: <Code className="w-6 h-6 text-green-500" />,
      color: "green",
      ref: card2Ref
    },
    {
      title: "My Vision",
      content: "My vision extends beyond mere academic excellence; I aim to leverage my skills to create impactful solutions that address real-world challenges, whether it's enhancing user experiences, optimizing system performance, or revolutionizing industries through cutting-edge software solutions.",
      icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
      color: "purple",
      ref: card3Ref
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <AuroraText className="text-gray-600 max-w-2xl mx-auto">
            Passionate software engineering student with a vision for innovation
          </AuroraText>
        </div>

        <div className="max-w-6xl mx-auto relative" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                ref={section.ref}
                className="h-full flex"
              >
                <CustomCard
                  title={section.title}
                  className={`w-full h-full flex flex-col transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-${section.color}-500/50`}
                >
                  <div className="flex items-start gap-4 flex-grow">
                    <div className={`p-2 bg-${section.color}-500/10 rounded-lg mt-1 flex-shrink-0`}>
                      {section.icon}
                    </div>
                    <div className="flex-grow">
                      <p className={`text-gray-600 border-l-2 border-${section.color}-500/20 pl-4`}>
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
