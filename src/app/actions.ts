"use server";

import { getNikoStrategy, type NikoStrategyInput } from "@/ai/flows/niko-ai-strategy";

type ServerActionResult = {
    success: boolean;
    strategy?: string;
    error?: string;
};

export async function generateStrategyAction(data: NikoStrategyInput): Promise<ServerActionResult> {
    try {
        const result = await getNikoStrategy(data);
        return { success: true, strategy: result.strategy };
    } catch (error) {
        console.error("Error generating strategy:", error);
        return { success: false, error: "Falha ao gerar a estratégia. Tente novamente mais tarde." };
    }
}
