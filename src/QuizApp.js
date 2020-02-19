import React from "react";
import "./styles.css";
import "./bootstrap.min.css";
import { Link } from "react-router-dom";
import Hero from "./Components/Hero";
import Turn from "./Components/Turn";
import Continue from "./Components/Continue";
import Footer from "./Components/Footer";

export default function QuizApp({
  turnData,
  highlight,
  onAnswerSelected,
  onContinue
}) {
  //console.log("turnData in quizApp:" + highlight);
  return (
    <div className="container-fuild">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue show={highlight === "Correct"} onContinue={onContinue} />
      <p>
        <Link to="/add">Add an Author</Link>
      </p>
      <Footer />
    </div>
  );
}
