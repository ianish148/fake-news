import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export const maxDuration = 60;

// Initialize the Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API key is not configured.' }, { status: 500 });
    }

    const prompt = `
      You are an expert, unbiased investigative journalist and fact-checker. 
      Your task is to analyze the following news snippet or text, extract its core claims, and verify them using real-time information from Google Search.
      
      Text to verify: "${text}"
      
      Respond strictly in the following JSON format without any markdown wrappers or code blocks:
      {
        "verdict": "True" | "Mostly True" | "Mixed" | "Mostly False" | "False",
        "confidence": <number between 0 and 100>,
        "analysis": "<Detailed, step-by-step breakdown explaining why the claims are true or false based on search results>",
        "sources": [
          {
            "title": "<title of the source article>",
            "url": "<url of the source>"
          }
        ]
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.2,
      }
    });

    let responseText = response.text || "{}";
    
    // Strip potential markdown JSON wrappers since we can't use responseMimeType
    responseText = responseText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse JSON from Gemini:", responseText);
      // Fallback
      parsedData = {
        verdict: "Mixed",
        confidence: 0,
        analysis: "Failed to parse the response from the AI. Raw response: " + responseText,
        sources: []
      };
    }

    return NextResponse.json(parsedData);
  } catch (error: any) {
    console.error('Error in verification API:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
