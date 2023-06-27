import React from "react";
import Create from "./components/pages/CRUD/Create";
import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Read from "./components/pages/CRUD/Read";
import Update from "./components/pages/CRUD/Update";

import HorizontalNonLinearStepper from "./components/pages/Form/HorizontalNonLinearStepper";


const router = createBrowserRouter([
    {
        path:"/",
        element:<HorizontalNonLinearStepper/>
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
