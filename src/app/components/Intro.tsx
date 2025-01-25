import Image from "next/image"

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro">
        <div className="neon-circle">
          <Image src="/mypic.jpg" alt="Talha Rusman" width={180} height={180} />
        </div>
        <div className="intro-content">
          <h1>Hello, It&apos;s Me</h1>
          <h2>Talha Rusman</h2>
          <p>
            And I&apos;m a <span className="role">Web Developer</span>
          </p>
          <p>
            Welcome to my portfolio. I am a web developer passionate about crafting beautiful and functional websites.
          </p>
        </div>
      </div>
    </section>
  )
}

