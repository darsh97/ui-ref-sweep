import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function chatWithAeroAgent(prompt: string, history: any[]) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: `You are the AeroTwyn Orchestrator, a high-performance AI agent for Scout Dynamics. 
      You specialize in aero-thermal engineering, CFD analysis, and wind tunnel telemetry.
      Your tone is professional, technical, and precise.
      When discussing data, use technical terms like Cd (drag coefficient), Cl (lift coefficient), Re (Reynolds number), and mesh density.
      You have access to various sub-agents: 
      - Aero CFD Agent: For computational fluid dynamics.
      - WT Agent: For wind tunnel telemetry.
      - Knowledge Agent: For SOPs and technical documentation.
      
      If a user asks for a comparison or analysis, simulate the orchestration process by mentioning which agents you are consulting.
      Keep responses concise and data-driven.`
    }
  });

  return response.text || "I'm sorry, I couldn't process that request.";
}
