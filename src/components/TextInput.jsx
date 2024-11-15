import React, {useState} from "react";

export default function TextInput({text}) {
  return (
    <div className="text-inputs-container">
      <label htmlFor={text}>{text}</label>
      <input type="text" id={text} placeholder={text} />
    </div>
  )
}