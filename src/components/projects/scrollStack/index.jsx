'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.scss'

gsap.registerPlugin(ScrollTrigger)

const defaultProjects = [
 {
   title: 'HRMS Dashboard',
   description:
     'A comprehensive human resource management tool that provides real-time Attendance data and insights for business metrics.',
   tags: ['React', 'Mongo DB', 'Node.js'],
   image: '/images/HRMS.png',
   link: 'https://hrms-admin-frontend.vercel.app/login'
 },
 {
   title: 'Hotel Booking',
   description:
     'A user-friendly hotel booking web application that allows customers to search, compare, and reserve rooms seamlessly.',
   tags: ['Next', 'Mongo DB', 'Node.js'],
   image: '/images/Hotel-Booking.png',
   link: 'https://your-hotel-booking-link.com'
 },
 {
   title: 'Company Portfolio',
   description:
     'A professional company portfolio website showcasing services, projects, and achievements with a clean design, responsive layout, and easy navigation for clients to explore.',
   tags: ["React","NodeJs","ExpressJs"],
   image:
     '/images/Company-Port.png',
   link: 'https://portfolio-90tib0r3m-khannameera17s-projects.vercel.app/'
 }
]


export default function ScrollStackProjects({ projects = defaultProjects }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.projectCard')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${projects.length * 80}%`, // shorter scroll
          scrub: true,
          pin: true,
        }
      })

      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { y: '120%', opacity: 0 },
          { y: `${-i * 60}px`, opacity: 1, duration: 1 }, // bigger spacing
          i
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [projects])

  return (
   <section
     className="scrollStackContainer"
     style={{ height: `${projects.length * 40}vh` }}
     ref={containerRef}
   >
     {/* Heading */}
     <h2 className="projectsHeading">My Work</h2>
     {/* <p>This is some of my work check this out</p> */}
 
     {projects.map((p, i) => (
       <article key={i} className="projectCard">
         <div className="projectCardImage">
           <img src={p.image} alt={p.title} />
         </div>
         <div className="projectCardContent">
           <h3>{p.title}</h3>
           <p>{p.description}</p>
           <div className="tags">
  {p.tags.map((t, idx) => (
    <span key={idx}>{t}</span>
  ))}
  {/* Project Link */}
  {p.link && (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      View Project →
    </a>
  )}
</div>

         </div>
       </article>
     ))}
   </section>
 )
 
}
