/* <div id="parent">
    <div id="child">
        <h1 id="headingone"></h1>
        <h2 id="headingtwo"></h2>
    </div>
        <div id="child2">
        <h1 id="headingone"></h1>
        <h2 id="headingtwo"></h2>
    </div>
</div> */


import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement(
  "div",
  { id: "parent" },[
    React.createElement(
        "div",
        { id: "childone" },
        [
            React.createElement("h1", { id: "headingone" }, "This is Namaste Raeact"),
            React.createElement("h2", { id: "headingtwo" }, "I am h2 tag")
        ]),
    React.createElement(
        "div",
        { id: "childtwo" },
        [
                React.createElement("h1", { id: "headingone" }, "I am h1 tag"),
                React.createElement("h2", { id: "headingtwo" }, "I am h2 tag")
        ])
  ]
  );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world in react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
