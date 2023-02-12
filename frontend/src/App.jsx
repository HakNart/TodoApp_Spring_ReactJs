import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
