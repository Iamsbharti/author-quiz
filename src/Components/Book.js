import React from "react";
import "../styles.css";
import "../bootstrap.min.css";

function Book(props) {
  return (
    <div className="answer">
      <h3 onClick={() => props.onClick(props.title)}>{props.title}</h3>
    </div>
  );
}
export default Book;
