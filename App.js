import React from "react";
import ReactDOM from "react-dom/client";

//jsx - react element.
const heading = <h1 id="heading">Namaste react using jsx🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Components.

//Functional Component
const title = <h1>Namaste React using jsx🚀</h1>;
const Title1 = () => <h1>Namaste React using jsx🚀</h1>;

const HeadingComponent = () => (
  <div id="container">
    {title}
    
    <h1 className="Heading">Namaste React Functional Component</h1>
  </div>
);

root.render(<HeadingComponent />);
