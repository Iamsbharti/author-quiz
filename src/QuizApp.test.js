import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { wrapper, mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuizApp from "./QuizApp";

/**Configure Enzyme Adapter */
Enzyme.configure({ adapter: new Adapter() });
//Intialize with a test state to let pass the test.
const state = {
  turnData: {
    books: [
      "The Shining",
      "IT",
      "The tale of two Cities",
      "The Man in Brown Suite"
    ],
    author: {
      name: "Amish Devgan",
      imageUrl: "images/authors/Amish.jpg",
      imageSource: "Google",
      books: ["The Immortals of Meluha", "Scion of Ikshvaku"]
    }
  },
  higlight: "Correct"
};
describe("Author Quiz", () => {
  it("Renders without Crash", () => {
    const div = document.createElement("div");
    console.log("test:" + state.higlight);
    ReactDOM.render(
      <QuizApp
        {...state}
        highlight={state.highlight}
        onAnswerSelected={() => {}}
      />,
      div
    );
  });
});
describe("When no answer has been selected", () => {
  let wrapper;
  console.log(state.higlight);

  beforeAll(() => {
    wrapper = mount(<QuizApp {...state} onAnswerSelected={() => {}} />);
    console.log("wrapper:" + wrapper.find("div.row.turn").props());
  });
  it("should have no backgroundColoe", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
  });
});
