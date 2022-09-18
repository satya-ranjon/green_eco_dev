import React, { useState } from "react";
import SocialMediaIcon from "../../components/socialMediaIcon";
import { images } from "../../constant";
import AppWrap from "../../wrapper/AppWrap";
import "./contact.scss";
import { client } from "../../client";
import { useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialMadia, setSocialMadia] = useState([]);
  const { username, email, message } = formData;

  const socilMidea = '*[_type == "contactinfo"]';

  useEffect(() => {
    client.fetch(socilMidea).then((data) => {
      setSocialMadia(data);
    });
  }, []);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    if (formData.email.split("").includes("@")) {
      setLoading(true);
      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="app__title">
        <h1>Contact</h1>
        <span></span>
      </div>
      {socialMadia && (
        <>
          <SocialMediaIcon socialMadia={socialMadia} />

          {socialMadia.map((item, index) => (
            <div className="app__contact-cards" key={index}>
              {item.email && (
                <div className="app__contact-card ">
                  <img src={images.email} alt="email" />
                  <a href={`mailto:${item.email}`} className="p-text">
                    {item.email}
                  </a>
                </div>
              )}

              {item.phone && (
                <div className="app__contact-card">
                  <img src={images.mobile} alt="phone" />
                  <a href={`tel:+${item.phone}`} className="p-text">
                    {item.phone}
                  </a>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {socialMadia &&
        socialMadia.map((item, index) => (
          <div key={index} className="app_contact_f">
            {item.contactfromseeornot && (
              <>
                {!isFormSubmitted ? (
                  <div className="app__contact-form app__flex">
                    <div className="app__flex">
                      <input
                        className="p-text"
                        type="text"
                        placeholder="Your Name"
                        name="username"
                        value={username}
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div className="app__flex">
                      <input
                        className="p-text"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div>
                      <textarea
                        className="p-text"
                        placeholder="Your Message"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                      />
                    </div>
                    <button
                      type="button"
                      className="p-text"
                      onClick={handleSubmit}
                    >
                      {!loading ? "Send Message" : "Sending..."}
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="head-text">Thank you for connect</h3>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
    </>
  );
};

export default AppWrap(Contact, "contact");
