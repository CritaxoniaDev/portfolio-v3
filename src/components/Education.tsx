"use client"

import React from "react"
import { CustomCard } from "@/components/ui/custom-card"
import { AuroraText } from "@/components/magicui/aurora-text"
import { GraduationCap, BookOpen, School } from "lucide-react"
import Image from "next/image"

const Education = () => {
  const educationData = [
    {
      period: "2023 - Present",
      title: "Applied Degree in Software Engineering",
      institution: "Lithan Educlaas",
      description: "Pursuing advanced software engineering concepts and practical applications",
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      color: "blue",
      logo: "/images/lithan.png" // Add your logo path here
    },
    {
      period: "2023 - Present",
      title: "Bachelor of Science in Information Technology",
      institution: "First City Providential College",
      description: "Focusing on software development and engineering principles",
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
      color: "green",
      logo: "/images/fcpc.png" // Add your logo path here
    },
    {
      period: "2021 - 2023",
      title: "General Academic Strand (GAS)",
      institution: "Sapang Palay National High School",
      description: "Completed secondary education with focus on academic excellence",
      icon: <School className="w-6 h-6 text-purple-500" />,
      color: "purple",
      logo: "/images/spnhs.png" // Add your logo path here
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Educational Background</h2>
          <AuroraText className="text-gray-600 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills
          </AuroraText>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-${item.color}-500 z-10`}></div>
                
                {/* Date marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-10 bg-white px-4 py-1 rounded-full border border-gray-200 font-medium text-sm">
                  {item.period}
                </div>
                
                {/* Card - alternating sides but closer to the line */}
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-[48%] ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                    <CustomCard
                      title={item.title}
                      description={item.institution}
                      className={`w-full transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-${item.color}-500/50`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-${item.color}-500/10 rounded-lg`}>
                            {item.icon}
                          </div>
                        </div>
                        
                        {/* Institution Logo */}
                        <div className="relative h-12 w-12 overflow-hidden rounded-md">
                          <Image 
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      <p className={`text-gray-600 pl-3 border-l-2 border-${item.color}-500/20`}>
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
