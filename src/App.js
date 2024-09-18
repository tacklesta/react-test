import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";



/*
const parent = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
    id: "child1"
}, React.createElement("h1", {}, "Hello React")), React.createElement("div", {
    id: "child2"
}, React.createElement("h2", {}, "Namaste React"))]);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

/*
// React Element
const heading = (
    <h1 class="head">Namaste React !</h1>
);

// React Component(Functional)

const Heading1 = ()=>{
    return <div id="container1">
        <h1 class="head">Namaste React PArt 1</h1>
    </div>
};
// OR we can also write like this also without writing return statement explicitly, both are same thing 

const Heading2 = ()=>(
    <div id="container2">
        <Heading1 />
        <h1 class="head">Namaste React</h1>
    </div>
);

// rendering of functional components
*/


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/about",
        element: <About />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);