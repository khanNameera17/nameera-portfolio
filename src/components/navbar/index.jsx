// components/Navbar.jsx
// import Image from '/image'
import './style.scss'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <Image
          src="/profile.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="avatar"
        /> */}
      </div>
      <ul className="navLinks">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>
          <button className="contactBtn">Contact</button>
        </li>
      </ul>
    </nav>
  )
}
