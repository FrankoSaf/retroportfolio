import React, { useContext } from "react";
import { ScreenContext } from "../../store/ScreenContext";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home";
import Projects from "./Projects/Projects";
import "../../UI/Stars.scss";
const Screen = ({ className, style }) => {
  const { screen, fullScreen, setFullScreen } = useContext(ScreenContext);

  return (
    <div className={className} style={style}>
      <div className="stars"></div>
      {fullScreen && (
        <p>
          Press{" "}
          <span onClick={() => setFullScreen(false)} style={{ color: "red" }}>
            here
          </span>{" "}
          or hit ESC to exit full screen
        </p>
      )}
      {screen === "home" ? (
        <Home />
      ) : screen === "contact" ? (
        <Contact />
      ) : screen === "about" ? (
        <About />
      ) : (
        <Projects />
      )}
    </div>
  );
};

export default Screen;
