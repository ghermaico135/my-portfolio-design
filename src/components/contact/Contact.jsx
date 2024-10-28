import { useState } from "react"
import "./contact.css"


export default function Contact() {

  const [message , setMessage] = useState(false)

  const handleSubmit = (e) =>{
      e.preventDefault()
      setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <img src="/assets/shake.svg" alt="" />
      </div>
      <div className="contact-right">
        <h2>contact</h2>
        <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder="Enter your email" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
