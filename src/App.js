import React from "react";
import Create from "./components/Create";
import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Form from "./components/Form";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Form  />
    },
    {
         path:"/create",
        element:<Create/>
    },
   {
    path:"/read",
    element:<Read/>
   },
   {
    path:"/edit/:id",
    element:<Update/>
   }
])


function App() {
    return (
        <div className="App">
            
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
