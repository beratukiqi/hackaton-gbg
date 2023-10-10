import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router";

function App() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <h1>ChronoTester</h1>
            <button onClick={() => navigate("/board")}>TO BOARD VIEW</button>
        </>
    );
}

export default App;
