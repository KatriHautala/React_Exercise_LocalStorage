import React from "react";
import App from "./App";
import { configure, shallow, assert, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
describe('The text is correct")', () => {
  beforeEach(() => {
    // Avoid `attachTo: document.body` Warning
    const inp = document.createElement("input");
    const myDiv = document.createElement("div");
    inp.setAttribute("id", "chat");
    //inp.setAttribute("value", "chat");
    //global.chat = inp;
    window.domNode = myDiv;
    document.body.appendChild(inp);
  });

  var localStorageMock = function() {
    var store = {};

    return {
      getItem: function(key) {
        return store[key] || null;
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      }
    };
  };

  global.localStorage = new localStorageMock();

  it("Has five paragraphs", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("p")).toHaveLength(5);
  });
  it("Has two buttons", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("button")).toHaveLength(2);
  });
  it("First button label is Send", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper
        .find("button")
        .at(0)
        .text()
    ).toEqual("Send");
  });
  it("Second button label is Show messages", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper
        .find("button")
        .at(1)
        .text()
    ).toEqual("Show messages");
  });

  it("Has one input field", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("input")).toHaveLength(1);
  });
  // it("Adding test to textfield and clicking Send button will add a element to localstorage item chats", () => {
  //   const wrapper = mount(<App />, { attachTo: window.domNode });
  //   wrapper.find("input").getNode.value = "Hello";
  //   //console.log(wrapper.find("input").getNode.value);
  //   let localStorageChat = [];
  //   localStorageChat.push(wrapper.find("input").getNode.value);
  //   localStorage.setItem("chats", JSON.stringify(localStorageChat));
  //   //const mockCallBack = jest.fn();
  //   //console.log("aaa " + localStorage.getItem("chats"));
  //   //localStorage.setItem("chats", JSON.stringify(localStorageChat));
  //   wrapper
  //     .find("button")
  //     .at(0)
  //     .simulate("click");

  //   console.log(localStorage.getItem("chats"));
  // });
});