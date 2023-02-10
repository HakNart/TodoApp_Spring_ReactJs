import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";

function App() {
    const customTheme = createTheme({});

    return (
        <ThemeProvider theme={customTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Notes />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
