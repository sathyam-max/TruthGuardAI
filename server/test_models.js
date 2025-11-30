import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function listModels() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        console.log("Checking available models...");
        // Note: The Node SDK doesn't have a direct 'listModels' method exposed easily in all versions, 
        // but we can try a different approach or just test a few common ones.

        // Actually, let's just try to generate content with a few known model names to see which one works.
        const candidates = ["gemini-1.5-flash", "gemini-pro", "gemini-1.0-pro", "gemini-1.5-pro"];

        for (const modelName of candidates) {
            console.log(`Testing model: ${modelName}...`);
            try {
                const m = genAI.getGenerativeModel({ model: modelName });
                const result = await m.generateContent("Hello");
                const response = await result.response;
                console.log(`SUCCESS: ${modelName} is working!`);
                console.log("Response:", response.text());
                return; // Found one!
            } catch (e) {
                console.log(`FAILED: ${modelName} - ${e.message.split('\n')[0]}`);
            }
        }
        console.log("All common models failed.");

    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
