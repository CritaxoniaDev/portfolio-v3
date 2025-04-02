"use client"

import { useEffect, useRef, useState } from "react"
import HomePage from "@/components/HomePage"
import Header from "@/components/Header"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import styles from "@/styles/__page-layout-8f7e6d5c-a9b8-4c7d-b6e5-8e00db729481.module.css"
import { motion, useScroll, useSpring } from "motion/react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [locomotiveScrollRef, setLocomotiveScrollRef] = useState<any>(null)
  
  // Smooth scrolling physics with Framer Motion
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Initialize Locomotive Scroll
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    // Dynamically import locomotive-scroll
    const importLocomotiveScroll = async () => {
      try {
        // Import the CSS
        // Import the module
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        // Initialize locomotive-scroll
        const scroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.1, // Linear interpolation, lower = smoother
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          }
        });
        
        setLocomotiveScrollRef(scroll);
        
        // Handle anchor link clicks for smooth scrolling with offset
        const handleAnchorClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement
          const anchor = target.closest('a[href^="#"]')
          
          if (anchor) {
            e.preventDefault()
            const targetId = anchor.getAttribute('href')
            
            if (targetId && targetId !== '#') {
              const targetElement = document.querySelector(targetId)
              
              if (targetElement && scroll) {
                scroll.scrollTo(targetElement as HTMLElement, {
                  offset: -80, // Adjust for header height
                  duration: 1000,
                  easing: [0.25, 0.0, 0.35, 1.0]
                })
              }
            }
          }
        }
        
        // Add event listener
        document.addEventListener('click', handleAnchorClick)
        
        // Update locomotive scroll when window resizes
        const handleResize = () => {
          if (scroll) {
            scroll.update();
          }
        };
        
        window.addEventListener('resize', handleResize);
        
        // Return cleanup function
        return () => {
          document.removeEventListener('click', handleAnchorClick)
          window.removeEventListener('resize', handleResize);
          
          if (scroll) {
            scroll.destroy();
          }
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
        return () => {}; // Return empty cleanup function in case of error
      }
    };
    
    // Call the async function and store the cleanup function
    const cleanupFunction = importLocomotiveScroll();
    
    // Return a cleanup function that calls the async cleanup
    return () => {
      cleanupFunction.then(cleanup => {
        if (cleanup) cleanup();
      });
    };
  }, []);

  // Update locomotive scroll when content changes
  useEffect(() => {
    if (locomotiveScrollRef) {
      setTimeout(() => {
        locomotiveScrollRef.update();
      }, 500);
    }
  }, [locomotiveScrollRef]);

  return (
    <div className={styles.page_container} data-scroll-container ref={containerRef}>
      <Header />
      <ScrollProgress />
      
      {/* Smooth scroll progress indicator */}
      <motion.div 
        className={styles.progress_bar}
        style={{ scaleX }}
      />
      
      {/* Page sections with reveal animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        data-scroll-section
      >
        <HomePage />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        data-scroll-section
      >
        <About />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        data-scroll-section
      >
        <Experience />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        data-scroll-section
      >
        <Education />
      </motion.div>
    </div>
  )
}
