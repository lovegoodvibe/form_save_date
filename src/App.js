import React from "react";
import Home from "./router/Home";
import About from "./router/About";
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/about">Sign in</Link>
                </li>
                <li>
                    <Link to="/home">Register</Link>
                </li>
            </ul>
            <hr/>
            <div>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                </Routes>
            </div>
        </div>
    )
}

