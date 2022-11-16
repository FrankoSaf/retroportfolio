import React from "react";
import "../../UI/Footer/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="coin">
          <div className="coin_enter">
            <div className="coin_enter-hole"></div>
          </div>
          <div className="coin_display">
            <span>INSERT TOKEN</span>
          </div>
          <div className="coin_exit"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
