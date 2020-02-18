import React from "react";
import "../styles.css";
import "../bootstrap.min.css";
import Book from "./Book";

function Turn({ author, books, highlight, onAnswerSelected }) {
  //console.log("highlight:" + highlight);
  //const { author, books } = props;
  function hightLightBG(highlight) {
    const mapping = {
      none: "",
      Correct: "green",
      Wrong: "red"
    };
    return mapping[highlight];
  }
  return (
    <div
      className="row turn"
      style={{ backgroundColor: hightLightBG(highlight) }}
    >
      <div className="col-4 offset-1">
        <img
          src={author.imageUrl}
          className="authorImage"
          alt="problem lOading img"
        />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book key={title} title={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
}
export default Turn;
