"use client"

import React from "react"
import { CustomCard } from "@/components/ui/custom-card"
import Image from "next/image"
import { FaLaravel, FaPhp } from "react-icons/fa"
import { SiMysql, SiOpenai } from "react-icons/si"
import { Briefcase } from "lucide-react"

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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the skills I've developed along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="ml-8 relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 rounded-full bg-indigo-500 z-10 border-4 border-white"></div>
                
                <CustomCard
                  title={item.title}
                  description={item.company}
                  className="w-full transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-indigo-500/50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 font-medium">{item.period}</span>
                    
                    {/* Company Logo */}
                    <div className="relative h-10 w-24 overflow-hidden">
                      <Image 
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="mr-2 text-indigo-500 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-medium mb-2 text-gray-700">Skills & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                          <skill.icon className="h-4 w-4 text-indigo-500" />
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
