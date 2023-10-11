import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import MyContext from "../main";
function GPTModule({ setPopupVisible }) {
    const [inputValue, setInputValue] = useState();
    const [generatedData, setGeneratedData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { aiData, updateAiData } = useContext(MyContext);
    const generateResponse = () => {
        // Anropet GPT API
        // FÅ ETT SVAR
        // SPARA NER SVARET I VARIABEL

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

        // SPARA NER SVARET I ETT STATE
        setGeneratedData(data); // UPPDATERADE LISTAN
    };

    useEffect(() => {
        setLoaded(true);
        console.log(generatedData, "GEN DATA");
        console.log(loaded, "LOADED CHANGE");
        updateAiData(generatedData);
    }, [generatedData]);

    useEffect(() => {
        console.log("AI DATA", aiData);
    }, [aiData]);

    return (
        <div className="Module__Backdrop">
            <div className="Module__Background">
                <h1>GPT MODULE OPEN</h1>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                />
                <p>Värdet skickas som: {inputValue}</p>

                <div className="task__list">
                    {loaded &&
                        generatedData.map((task, i) => (
                            <Task key={i} data={task} />
                        ))}
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
