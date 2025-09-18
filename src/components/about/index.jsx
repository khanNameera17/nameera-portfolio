"use client"
import { useState } from "react"
import Image from "next/image"
import Skills from "../../assets/Skills.jpg" // replace with your image
import "./style.scss"
import Experience from "../experience"

const skillsList = [
  { id: 1, title: "Website Development", content: "Building responsive, SEO-friendly, and scalable websites." },
  { id: 2, title: "App Development", content: "Cross-platform mobile apps with smooth UI & robust backend." },
  { id: 3, title: "Web Design", content: "Modern, user-friendly, and aesthetic UI/UX designs." },
  { id: 4, title: "WordPress", content: "Custom themes, plugins, and full WordPress solutions." },
]

export default function About() {
  const [activeId, setActiveId] = useState(null)

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
   <>
    <div className="skills">
      <div className="skillsLeft">
        <h2 className="skillsTitle">WHAT I CAN DO FOR YOU</h2>
        <p className="skillsSubtitle">
          As a Full stack developer, I build complete web and mobile apps. From UI to backend, I handle it all.
        </p>

        <ul className="skillsList">
          {skillsList.map((skill) => (
            <li key={skill.id} className={`skillItem ${activeId === skill.id ? "active" : ""}`}>
              <div className="skillHeader" onClick={() => toggle(skill.id)}>
                <span>{skill.id}. {skill.title}</span>
                <span className="arrow">{activeId === skill.id ? "▲" : "▼"}</span>
              </div>
              {activeId === skill.id && (
                <p className="skillContent">{skill.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="skillsRight">
      <Image
    src={Skills}   // ✅ put your image path here
    alt="Skills"
    width={400}
    height={400}
    className="skillsImage"
  />      </div>
    </div>
    <Experience />
    </>
  )
}
