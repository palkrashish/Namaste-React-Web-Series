import React from 'react'
import  ReactDOM  from 'react-dom/client';

// LET SEE EXAMPLE OF USING JSX React element

// const jsxHeading = (<h1>Namaste React using JSX</h1>); 

const Title = () => {
   return (
    <h1>Hello I am Title runing from Title function</h1>
    )
}


// USING FUNCTIONAL COMPONENT

const JsxHeading = () => {
   return(
    <div id="container">
    <h1>Namaste React using functional component</h1>
    <Title />
    
    </div>
   )
    
}

// IF YOU USE ONLY () THIS bracket does not need to return and variable must be first letter capital letter



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< JsxHeading />);
