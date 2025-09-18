import React from "react"
import { motion } from "framer-motion"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaWordpress,
  FaJava,
  FaNodeJs,
  FaPython,
  FaJs,
} from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiCanva } from "react-icons/si"
import "./style.scss"

const icons = [
  { id: "react", component: FaReact, color: "#61dafb", label: "React" },
  { id: "next", component: SiNextdotjs, color: "#000", label: "Next.js" },
  { id: "html", component: FaHtml5, color: "#e34c26", label: "HTML5" },
  { id: "css", component: FaCss3Alt, color: "#264de4", label: "CSS3" },
  { id: "sass", component: FaSass, color: "#cc6699", label: "Sass" },
  { id: "wordpress", component: FaWordpress, color: "#21759b", label: "WordPress" },
  { id: "python", component: FaPython, color: "#3776ab", label: "Python" },
  { id: "java", component: FaJava, color: "#f89820", label: "Java" },
  { id: "mongodb", component: SiMongodb, color: "#4db33d", label: "MongoDB" },
  { id: "node", component: FaNodeJs, color: "#83cd29", label: "Node.js" },
  { id: "javascript", component: FaJs, color: "#f7df1e", label: "JavaScript" },
  { id: "canva", component: SiCanva, color: "#00c4cc", label: "Canva" },
]

const Experience = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">
        {/* Right Side - Popping Tech Icons */}
        <div className="aboutRight">
          <div className="iconGrid">
            {icons.map((icon, i) => {
              const IconComponent = icon.component
              return (
                <motion.div
                  key={icon.id}
                  className="iconCard"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  <div className="icon" style={{ color: icon.color }}>
                    <IconComponent />
                  </div>
                  <p className="iconLabel">{icon.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Left Side */}
        <div className="aboutLeft">
          <h2 className="aboutTitle">ABOUT ME</h2>
          <p className="aboutDesc">
            I’m a Full Stack Developer with expertise in web and mobile
            development, UI/UX design, WordPress, and Canva. I build fast,
            scalable, and user-focused digital solutions tailored to your needs.
          </p>

          <div className="aboutStats">
            <div className="stat">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>8+</h3>
              <p>Completed Projects</p>
            </div>
          </div>

          <div className="aboutContact">
            <p>
              <strong>Call Today :</strong>{" "}
              <a href="tel:+918502007811">+91 8502007811</a>
            </p>
            <p>
              <strong>Email :</strong> nameerakhan54@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
