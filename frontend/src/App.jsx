import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Notes/>}/>
                </Routes>
            </Layout>
            
        </BrowserRouter>
    );
}

export default App;
