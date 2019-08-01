import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("works fine with enzyme", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.text()).toContain("Learn React");
});

test("App is in sync with the snapshot", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("works fine with jest-enzyme", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toIncludeText("Learn React");
});
