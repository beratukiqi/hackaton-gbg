import React, { useState } from "react";
import { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./pages/Board.jsx";

const MyContext = createContext();

function MyContextProvider({ children }) {
    // Define the data you want to provide through the context
    const [aiData, setAiData] = useState([]);

    const updateAiData = (newValue) => {
        setAiData(newValue);
    };

    const contextValue = {
        aiData,
        updateAiData,
        // Add more functions or state properties as needed
    };

    return (
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MyContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/board" element={<Board />} />
                </Routes>
            </BrowserRouter>
        </MyContextProvider>
    </React.StrictMode>
);

export default MyContext;
