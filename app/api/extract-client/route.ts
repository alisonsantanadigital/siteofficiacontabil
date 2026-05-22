import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { rawData } = await req.json();

    if (!rawData) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `Analise o seguinte texto bruto e extraia informações para cadastrar um novo cliente contábil.
      Retorne APENAS um objeto JSON com as seguintes chaves: name, document, company, taxRegime (ex: Simples Nacional, Lucro Presumido, Lucro Real), revenue, notes.
      
      Texto bruto:
      ${rawData}`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            document: { type: Type.STRING },
            company: { type: Type.STRING },
            taxRegime: { type: Type.STRING },
            revenue: { type: Type.STRING },
            notes: { type: Type.STRING },
          },
          required: ["name", "document", "company"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
