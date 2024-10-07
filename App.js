/** Nested Structure
 * <div id="parent">
 *      <div id="child">
 *             <h1></h1>
 *             <h2></h2>
 *      </div>
 * </div>
 * for creating sibling children we have to give it into Array
 *
 * ReactElement(Object) => HTMLElement(Browser Understand)
 * 
 * const parent = React.createElement(
        "div",
        { id: "parent" },
        React.createElement(
            "div",
            { id: "child" }, 
            [   React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        )
    );
 */

// Crating a React Element. React Element is nothing but a normal JavaScript Object at the end of the day.
const heading = React.createElement(
  "h1",
  { id: "heading", className: "react-heading" },
  "Hello World From React!"
);
console.log(heading); //Object

// First of all React need to have a root where it will do all the DOM manupulation.
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering heading inside root. and this render method will take that Object and convert it into h1 tag. and put it into the DOM.
root.render(heading);

//** Putting some Nodes into DOM and removing something(Nodes) from DOM is most costly operation and all the frameworks and librery are trying to optimize them.
//If there is something in root the render mathod just replace it.and anything above or below root,it will be not affected.React can work on the place where we made it root.
//*React is a Library it can work independantly in a small portion of the app.
