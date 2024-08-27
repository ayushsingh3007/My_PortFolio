import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <>
      <div className="container contact">
        <h1>Contact Me</h1>
        <div className="contact-icons">
          <div className="item">
            <FaInstagram className="icon"/>
            </div>
          <div className="item">
          <FaFacebookSquare className="icon"/>
          </div>
          <div className="item">
          <FaLinkedin className="icon"/>

          </div>
          <div className="item">
          <FaSquareXTwitter className="icon"/>

          </div>
          <div className="item">
          <FaGithub className="icon"/>
          </div>
          <div className="item">
          <IoMdMail />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
