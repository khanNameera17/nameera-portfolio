import Navbar from "../navbar"
import "./style.scss"
import Image from "next/image"
import Home from "../../assets/Home.jpg"

export default function Hero() {
  return (
    <div className="container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <p className="name">NAMEERA KHAN</p>

        <div className="heroContent">
          <h1 className="heroLeft">FULL STACK</h1>

          <div className="heroImageWrapper">
            <Image
              src={Home}
              alt="Nameera"
              width={300}
              height={400}
              className="heroImage"
            />
          </div>

          <h1 className="heroRight">DEVELOPER</h1>
        </div>

        {/* Floating Hi bubble */}
  {/* Floating Hi bubble */}
<div className="hiBubble">👋</div>

      </section>
    </div>
  )
}
