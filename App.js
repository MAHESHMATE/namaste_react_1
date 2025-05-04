import React from "react";
import ReactDOM from "react-dom/client";

//// 1. Using React.createElement to nest h1, h2, h3 inside a div with class "title"
const h = React.createElement(
    "div", 
    {className: "title"}, 
    React.createElement("h1", null, "This is h1"),
    React.createElement("h2", null, "This is h2"),
    React.createElement("h3", null, "This is h3")
);

// 2. Same nested element using JSX
const H = (
    <div className="title">
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
    </div>
);

// 3. Functional component returning the same structure with JSX
function Header() {
    return (
        <div className="title">
            <h1>This is h1</h1>
            <h2>This is h2</h2>
            <h3>This is h3</h3>
        </div>
    );
}

// 4. Passing attributes into the tag in JSX
const nestedAttributes = (
    <div className="title" id="main-title" datatype="main" style={{textAlign: "center"}}>
        <h1 style={{color: "blue"}}>This is h1</h1>
        <h2 style={{color: "red"}}>This is h2</h2>
        <h3 style={{color: "black"}}>This is h3</h3>
    </div>
)

// 5. Composition: using one component inside another
function ParentComponent() {
    return (
        <div>
            <h2>Inside Parent Component</h2>
            <Header/>
        </div>
    );
}

// 6. Comparing usages in JSX:
// {TitleComponent}    -> refers to the component function itself, not rendered output
// {<TitleComponent/>} -> a React element returned by the component, rendered inside the parent
// <TitleComponent></TitleComponent> is identical to <TitleComponent/> (just the verbose form)
function DemoComparison() {
    return (
        <div>
            <div>Function referance: {Header.name}</div>
            <div>Element via expression: {<Header/>}</div>
            <div>Self - closing tag: <Header /></div>
            <div>Explicit closing tag: <Header></Header></div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
      <h1>1. createElement Example:</h1>
      {h}
  
      <h1>2. JSX Example:</h1>
      {H}
  
      <h1>3. Functional Component:</h1>
      <Header />
  
      <h1>4. With Attributes:</h1>
      {nestedAttributes}
  
      <h1>5. Composition:</h1>
      <ParentComponent />
  
      <h1>6. Comparison of Usages:</h1>
      <DemoComparison />
    </>
);




