import { useEffect, useState } from "react";
import Task from "./Task";

function GPTModule({ setPopupVisible }) {
    const [inputValue, setInputValue] = useState();
    const [generatedData, setGeneratedData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const generateResponse = () => {
        // Anropet ger DATA
        const data = [
            {
                text: "Hej hej",
            },
            {
                text: "Hej HEJ 222",
            },
            {
                text: "Hej HEJ 333",
            },
        ];
        setGeneratedData(data);
    };

    useEffect(() => {
        setLoaded(true);
    }, [generatedData]);

    return (
        <div className="Module__Backdrop">
            <div className="Module__Background">
                <h1>GPT MODULE OPEN</h1>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                />
                <p>{inputValue}</p>
                <div className="task__list">
                    {loaded &&
                        generatedData.forEach((task, i) => {
                            <Task key={i} data={task} />;
                            console.log("ADDED");
                        })}
                </div>
                <button
                    style={{ background: "red" }}
                    onClick={() => {
                        generateResponse();
                        console.log(inputValue, "SENT THIS");
                    }}
                >
                    Generate
                </button>
                <button onClick={() => setPopupVisible(false)}>Confirm</button>
            </div>
        </div>
    );
}

export default GPTModule;
