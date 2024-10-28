import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/contact";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";



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
            <Outlet />  
        </div>
    )
}

{/** Routing */}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                // dynamic path i.e. based on the input load the page
                path: "/restaurants/:resid",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);