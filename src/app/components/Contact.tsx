"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [method, setMethod] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    if (method === "whatsapp") {
      const whatsappNumber = "923067584773"
      const whatsappMessage = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`
      const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappURL, "_blank")
      setStatus("Message sent via WhatsApp!")
    } else if (method === "email") {
      try {
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: name,
            from_email: email,
            message: message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        )
        console.log("EmailJS result:", result)
        setStatus("Message sent successfully via Gmail!")
      } catch (error) {
        console.error("EmailJS error:", error)
        setStatus("Failed to send message. Please try again later.")
      }
    } else {
      setStatus("Please select a valid contact method.")
    }
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="form-row">
            <select id="method" name="method" required value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="" disabled>
                Select a method
              </option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Gmail</option>
            </select>
            <button type="submit">Send Message</button>
          </div>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  )
}

