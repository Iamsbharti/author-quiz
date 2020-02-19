import React from "react";
import ReactDOM from "react-dom";
import QuizApp from "./QuizApp";
import authors from "./Data/authors";
import { shuffle, sample } from "underscore";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import AddAuthorForm from "./Components/AddAuthorForm";

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c, i) {
    return p.concat(c.books);
  }, []);

  //Using underscore library to select top 4 random answers.
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  //Return thr book and authors name as turnData.
  //Select an author from whose title matches from answer.
  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };
}
//Intialize the state.
function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ""
  };
}
let state = resetState();

//This method computes the correct answer upon OncLick Event.
function onAnswerSelected(title) {
  console.log("clicked");
  const isCorrect = state.turnData.author.books.some(book => book === title);
  state.highlight = isCorrect ? "Correct" : "Wrong";

  //Render the QuiZComponent upon state change as we are not using lifecycle methods.
  render();
}
function App() {
  return (
    <QuizApp
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={() => {
        state = resetState();
        render();
      }}
    />
  );
}
//Pushing the new item to the array and reqouting the use to App Component.
const AddAuthorWrapper = withRouter(({ history }) => (
  <AddAuthorForm
    onAuthorSubmit={author => {
      authors.push(author);
      history.push("/");
    }}
  />
));
function RoterComponents() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/add" component={AddAuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>
  );
}
function render() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <>
      <RoterComponents />
    </>,
    rootElement
  );
}
//For initial rendering.
render();
