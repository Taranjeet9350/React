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



const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"This is Nested Shit!!"),
React.createElement("h2",{},"This is Nested Shit!!")]
)));
const header = React.createElement("h1",{id:"heading"},"Hello to React!!");
console.log(header);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);