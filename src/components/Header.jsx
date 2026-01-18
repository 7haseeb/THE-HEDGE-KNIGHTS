import React, { useState, useEffect } from "react";
import logo from "../assets/Hedge-removebg.png";
import "./Header.css";

export default function Header() {
  const fullText = "The Hedge Knights.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <img src={logo} alt="Hedge Logo" className="header__logo" />
      <h1 className={`header__title ${isTyping ? "header__title--typing" : ""}`}>{displayText}</h1>
      <p className={`header__subtitle ${!isTyping ? "header__subtitle--visible" : ""}`}>The Knights of the Digital Roundtable</p>
    </header>
  );
}
