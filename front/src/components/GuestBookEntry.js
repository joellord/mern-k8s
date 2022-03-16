import React from "react";

export default function GuestBookEntry(props) {
  return(
    <div className="gb-entry">
      <hr className="divider" />
      <div className="gb-name">
        <span className="label">Name:</span> {props.name}
      </div>
      <div className="gb-message">
        <span className="label">Message:</span> {props.message}
      </div>
    </div>
  )
}
