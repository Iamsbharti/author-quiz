import React from "react";
import "./styles.css";
import "./bootstrap.min.css";

import Hero from "./Components/Hero";
import Turn from "./Components/Turn";
import Continue from "./Components/Continue";
import Footer from "./Components/Footer";

export default function QuizApp({ turnData, highlight, onAnswerSelected }) {
  //console.log("turnData in quizApp:" + highlight);
  return (
    <div className="container-fuild">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <Footer />
    </div>
  );
}
