

import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import config from "./config/config";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () =>{
   return(
    <BrowserRouter>
    <Routes>
        <Route path={`${config.baseUrl}`} element={<Home/>}/>
    </Routes>
</BrowserRouter>
   )
}
export default App;