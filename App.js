import React from "react";
import ReactDOM  from 'react-dom/client';


/**
 * 
 * <div id=parent>
 *      <div id=child1>
 *            <div id=child2>
 *                  <h1>Hello this is Nested!!</h1>
 *              </div>
 *      </div>
 * </div>
 * 
 */



// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child1"},
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"This is Nested Shit!!"),
// React.createElement("h2",{},"This is Nested Shit!!")]
// )));

const header = React.createElement("h1",{id:"heading"},"Hello to React!!");

//React Element
const elem = <h1 id="element">Element!!!!!</h1>;
const jxsUsed = (
    
    <h1 id="heading" className="className">
        This is using jxs.
        {elem}
        </h1>
    );

const jxsAgain = (<h1>
    This is also a valid
    jsx.
    
</h1>);

//React Functional Component
const FunctionalComponent = () => {
    return <div>
        <h1>This is from Functional Component!!</h1>
    </div>
}
const Title = () => (
    <div>
        <h1>This is from Title!!</h1>
    </div>
);

const number = 50000;
//Component Composition
const FunctionalComponent1 = () => (
    <div>
        {jxsUsed}
        <Title />
        {Title()}
        <Title></Title>
        {number}
        <h2>{number}</h2>
        <h1>This is from Functional Component2!!</h1>
    </div>
);
console.log(header);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent1 />);