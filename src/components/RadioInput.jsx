import { useState } from "react";

export default function RadioInput() {
  return (
    <>
      <div className="gender-container">
        <label htmlFor="gender">Gender</label>
        <div className="genders">
          <input type="radio" name="gender" id="gender " /> Male
          <input type="radio" name="gender" id="gender " /> Female
          <input type="radio" name="gender" id="gender " /> Other
        </div>
      </div>

      <div className="ability-container">
        <label htmlFor="ability">Your best Subject</label>
        <div className="genders">
          <input type="checkbox" /> English
          <input type="checkbox" /> Maths
          <input type="checkbox" /> Physics
        </div>
      </div>
    </>
  )
}