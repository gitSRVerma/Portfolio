import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
// import mail from "../mail/mail";
import Email from "../../img/email.png";
import Networking from "../../img/networking.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {

  // var ReactRotatingText = require('react-rotating-text');

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_97c7fck",
        "template_hj8hkgj",
        form.current,
        "tYMnxS_v0aZB-yqMR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Connect</span>
          <span>Me!</span>

          <div className="mailing">
            <div className="mailto-div">
              <a className="mail-connect" href="mailto:shivangiverma.2816@gmail.com">
                {/* <div className="into-heading1">
                  <ReactRotatingText className="react-rotating-text-cursor" items={['Click Here to Mail']} caretStyle={{ width: '100px', height: '100px' }} style={{ fontSize: '25px' }} />
                </div> */}
                Click Here to Mail
              </a>
              <img className="img-mail" src={Email} alt=""></img>
            </div>
          </div>

          <div className="mailing">
            <div className="mailto-div">
              <a className="mail-connect" href="https://linktr.ee/shivangi_2816">
              <img className="img-mail" src={Networking} alt=""></img>
                <div className="into-heading1">
                  {/* <ReactRotatingText className="react-rotating-text-cursor" items={['Click Here to Connect']} caretStyle={{ width: '100px', height: '100px' }} style={{ fontSize: '25px' }} /> */}
                   Click Here to Connect
                </div>
              </a>
            </div>
          </div>
          <div
                className="blur blurx"
                style={{ background: "rgb(253, 228, 177)"}}
          ></div>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>



      {/* right side form */}

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;



