import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaQuora, FaTiktok } from "react-icons/fa";

const SocialMediaIcon = (socialMadia) => {
  return (
    <div className="app__social">
      {socialMadia.socialMadia &&
        socialMadia.socialMadia.map((item, index) => (
          <div key={index}>
            {item.linkedin && (
              <a href={item.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            )}
            {item.quora && (
              <a href={item.quora} target="_blank" rel="noreferrer">
                <FaQuora />
              </a>
            )}
            {item.whatsapp && (
              <a href={item.whatsapp} target="_blank" rel="noreferrer">
                <BsWhatsapp />
              </a>
            )}
            {item.tiktok && (
              <a href={item.tiktok} target="_blank" rel="noreferrer">
                <FaTiktok />
              </a>
            )}
            {item.telegram && (
              <a href={item.telegram} target="_blank" rel="noreferrer">
                <BsTelegram />
              </a>
            )}
            {item.youtube && (
              <a href={item.youtube} target="_blank" rel="noreferrer">
                <BsYoutube />
              </a>
            )}

            {item.twitter && (
              <a href={item.twitter} target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
            )}
            {item.facebook && (
              <a href={item.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            )}
            {item.instagram && (
              <a href={item.instagram} target="_blank" rel="noreferrer">
                <BsInstagram />
              </a>
            )}
          </div>
        ))}
    </div>
  );
};

export default SocialMediaIcon;
