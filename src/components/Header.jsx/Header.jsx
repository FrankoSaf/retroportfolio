import React from "react";
import "../../UI/Header/Header.scss";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_top">
        <div className="homer">
          <div className="homer_forehead"></div>
          <div className="homer_face">
            <div className="homer_face-eyes">
              <div className="homer_face-eyes-left"></div>
              <div className="homer_face-eyes-right"></div>
            </div>
            <div className="hover_face-nose"></div>
            <div className="homer_face-mouth">
              <div className="homer_face-mouth-lips"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom"></div>
    </div>
  );
};

export default Header;
