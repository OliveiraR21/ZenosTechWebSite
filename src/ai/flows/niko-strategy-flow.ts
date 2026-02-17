'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const NikoStrategyInputSchema = z.object({
  challenge: z.string().describe('The user\'s business challenge.'),
});
export type NikoStrategyInput = z.infer<typeof NikoStrategyInputSchema>;

const NikoStrategyOutputSchema = z.object({
  insight: z.string().describe('A short, actionable insight to address the user\'s challenge.'),
});
export type NikoStrategyOutput = z.infer<typeof NikoStrategyOutputSchema>;

export async function generateNikoStrategy(input: NikoStrategyInput): Promise<NikoStrategyOutput> {
  return nikoStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'nikoStrategyPrompt',
  input: { schema: NikoStrategyInputSchema },
  output: { schema: NikoStrategyOutputSchema },
  prompt: `You are NIKO, an AI strategist for Zenos Tech. A user has described their business challenge.
  Your task is to provide a single, concise, and actionable insight based on the Zenos philosophy: "If it's not simple, it's not smart."
  Keep the insight under 30 words. The goal is to show value and encourage them to talk to a human strategist.

  User's Challenge: {{{challenge}}}

  Generate one insight.`,
});

const nikoStrategyFlow = ai.defineFlow(
  {
    name: 'nikoStrategyFlow',
    inputSchema: NikoStrategyInputSchema,
    outputSchema: NikoStrategyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
