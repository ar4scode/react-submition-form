import React, {useState} from "react";

export default function TextInput() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(0)


  return (
    <>
        <div className="text-inputs-container">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="Enter First Name" />
        </div>
        <div className="text-inputs-container">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Enter Last Name" />
        </div>
        <div className="text-inputs-container">
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" placeholder="Enter Email" />
        </div>
        <div className="text-inputs-container">
          <label htmlFor="contact">Contact</label>
          <input type="text" id="contact" placeholder="Enter Mobile Number" />
        </div>
    </>
  )
}