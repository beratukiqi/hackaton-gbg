import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const app = express();
app.use(express.json());
app.use(cors());
//app.options("*", cors());
const port = 8000;

app.listen(port, () => console.log("Server is runnin on port " + port));

app.post("/generate", async (req, res) => {
    const { userInput } = req.body;

    const configuration = new Configuration({
        organization: "org-h95CoawxojtJxquEgL3PVNty",
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    try {
        const response = await openai.createChatCompletion(
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: userInput,
                    },
                    {
                        role: "assistant",
                        content:
                            "Your are a helping tool that will take user input and create a list of steps that will guide the user in the workflow of what they want to create.",
                    },
                    {
                        role: "assistant",
                        content:
                            "Summarize everything into maximum 10 steps (list elements) and each step should be maximum 10 words",
                    },
                    {
                        role: "assistant",
                        content:
                            "Your answer will always be a JSON object with a list. Each list(array element) will be an object, with the property 'text' (string)",
                    },
                ],
            },
            {
                headers: {
                    Authorization:
                        "Bearer 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", // Replace YOUR_API_KEY with your actual API key
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(response.data.object[0]);

        return res.status(200).json({
            message: response.data.object[0],
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "An error occurred while generating text.",
        });
    }
});
