// import React from "react";
// import ReactDOM from "react-dom/client";

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

// const parent = React.createElement(
//   "div",
//   { id: "parent" },[
//     React.createElement(
//         "div",
//         { id: "childone" },
//         [
//             React.createElement("h1", { id: "headingone" }, "This is Namaste Raeact"),
//             React.createElement("h2", { id: "headingtwo" }, "I am h2 tag")
//         ]),
//     React.createElement(
//         "div",
//         { id: "childtwo" },
//         [
//                 React.createElement("h1", { id: "headingone" }, "I am h1 tag"),
//                 React.createElement("h2", { id: "headingtwo" }, "I am h2 tag")
//         ])
//   ]
//   );

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "hello world in react"
// // );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// Episode 3

import React from "react";
import ReactDOM from "react-dom/client";

//React.createelement => Object=> HTMLElement(render)

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React........")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

// JSX - HTML like or XML like Syntax
// JSX (transpiled before it reacjes the js) - PARCEL- Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Namaste React using JSX
//   </h1>
// );

// console.log(jsxHeading);
// // console.log(heading);
// root.render(jsxHeading);

const elem = <span>React Element........</span> 

// React Element
const Heading = (
    <h1 id="heading" className="head" tabIndex="1">
      {elem}
      Namaste React using JSX
    </h1>
    
  );

// React component
// 1. Class Based Components - OLD
// 2. Functional Components - NEW

// React Functional Component
const HeadingComponent1 = () =>(
    <div id="container">
    
    <h1 className="head"> Namaste React Functional Component1</h1>
    </div>
);

const HeadingComponent2 = () =>(
    <div id="container">
    <HeadingComponent1 />
    {console.log("Can be used any javascript code in these braces")}
    {Heading}
    {HeadingComponent1()}
    <h1> Namaste React Functional Component2</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />); 
