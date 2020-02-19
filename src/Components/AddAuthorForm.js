import React from "react";
import "../AddAuthorForm.css";

function AddAuthorForm({ match, onAuthorSubmit }) {
  const [name, setauthorName] = React.useState("");
  const [imageUrl, setimageUrl] = React.useState("");
  const [imageSource, setSource] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const [bookTemp, setbookTemp] = React.useState("");

  const state = {
    name: name,
    imageUrl: imageUrl,
    imageSource: imageSource,
    books: books
  };
  function handleSubmit(event) {
    event.preventDefault();
    onAuthorSubmit(state);
  }
  function handleAddBooks(event) {
    setBooks([...books, bookTemp]);
    setbookTemp("");
  }
  return (
    <div className="AddAuthorForm">
      <h3>Form to add new compoenents to the quiz.</h3>
      <form onSubmit={handleSubmit}>
        <div className="AddAuthorForm_input">
          <label htmlFor="name">Author Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="author name?"
            onChange={e => setauthorName(e.target.value)}
          />
        </div>
        <div className="AddAuthorForm_input">
          <label htmlFor="ImageURL">ImageURL</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            placeholder="browse url"
            onChange={e => setimageUrl(e.target.value)}
          />
        </div>
        <div className="AddAuthorForm_input">
          <label htmlFor="imageSource">Source?</label>
          <input
            type="text"
            name="imageSource"
            placeholder="imageSource?"
            value={imageSource}
            onChange={e => setSource(e.target.value)}
          />
        </div>
        <div className="AddAuthorForm_input">
          <label htmlFor="Books">Books</label>
          {books.map(book => (
            <p key={book}>{book}</p>
          ))}
          <input
            type="text"
            name="bookTemp"
            value={bookTemp}
            onChange={e => setbookTemp(e.target.value)}
          />
          <input type="button" value="+" onClick={handleAddBooks} />
          <br />
        </div>
        <button>Add Author Info</button>
      </form>
    </div>
  );
}

export default AddAuthorForm;
