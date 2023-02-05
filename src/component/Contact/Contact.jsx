import React, { useState } from "react";
import "./Contact.css";
import { FiArrowRight } from "react-icons/fi";
import axios from "axios";
function Contact() {
  const [message, setMessage] = useState({
    id:"Vx9MLlx5aYexLVe8nBx5Gjp33dg2",
    name: "",
    mobile: "",
    email: "",
    subject: "",
    messageContent: "",
  });
  function inputInformations(e) {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  }
  function submitMessage(e) {
    e.preventDefault();
    axios
      .post("https://glacial-shore-17634.herokuapp.com/", message)
      .then(function (response) {
        console.log(response);
      });
    setMessage({
      id:"Vx9MLlx5aYexLVe8nBx5Gjp33dg2",
      name: "",
      mobile: "",
      email: "",
      subject: "",
      messageContent: "",
    });
    console.log(message);
  }
  return (
    <div className="contact__section" id="contact">
      <div className="form__Div card">
        <form action="" className="contact__form ">
          <div>
            <p>YOUR NAME</p>
            <input
              type="text"
              value={message.name}
              name="name"
              onChange={inputInformations}
            />
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <input
              type="tel"
              name="mobile"
              value={message.mobile}
              onChange={inputInformations}
            />
          </div>
          <div className="two__column">
            <p>EMAIL</p>
            <input
              type="text"
              name="email"
              value={message.email}
              onChange={inputInformations}
            />
          </div>{" "}
          <div className="two__column">
            <p>SUBJECT</p>
            <input
              type="text"
              name="subject"
              value={message.subject}
              onChange={inputInformations}
            />
          </div>{" "}
          <div className="two__column">
            <p>YOUR MESSAGE</p>
            <textarea
              name="messageContent"
              rows="5"
              value={message.messageContent}
              onChange={inputInformations}
            />
          </div>
          <button
            className="two__column card"
            style={{ backgroundColor: "#ff014f" }}
            onClick={submitMessage}
          >
            <div className="button__div">
              <p>SEND MESSAGE</p>
              <FiArrowRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
