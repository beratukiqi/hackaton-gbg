import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import MyContext from "../main";
import { Configuration, OpenAIApi } from "openai";

function GPTModule({ setPopupVisible }) {
    const [inputValue, setInputValue] = useState();
    const [generatedData, setGeneratedData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { aiData, updateAiData } = useContext(MyContext);

    const generateResponse = async () => {
        const res = await fetch("http://localhost:8000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer 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",
            },
            body: JSON.stringify({ userInput: inputValue }),
        });
        console.log("RESPONSE IS COMPLETETED : ", res);

        if (res.ok) {
            const jsonData = await res.json(); // Parse response body as JSON
            console.log("Response JSON Data: ", jsonData);

            // Now you can work with jsonData as an object
        } else {
            console.error("Request failed with status: " + res.status);
        }

        const data = [
            {
                text: "1. Set up a new React project.",
            },
            {
                text: "2. Design the UI (components).",
            },
            {
                text: "3. Set up state variables to store the current input and result.",
            },
            {
                text: "4. Implement function for basic arithmetic operations.",
            },
            {
                text: "5. Handle button clicks to update the input and perform calculations",
            },
            {
                text: "6. Implement additional operations.",
            },
            {
                text: "7. Implement a reset button to clear the calc.",
            },
            {
                text: "8. Error handling: division by zero and input validation.",
            },
            {
                text: "9. Deployment.",
            },
            {
                text: "10. Write documentation and user guide.",
            },
        ];
        // Anropet GPT API
        // FÅ ETT SVAR
        // SPARA NER SVARET I VARIABEL

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
                <button
                    onClick={() => {
                        setPopupVisible(false);
                        GetApiResponse();
                    }}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default GPTModule;
