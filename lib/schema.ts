import { z } from 'zod';

export const EvidenceSchema = z.object({ claim: z.string(), label: z.enum(['TESTED', 'SOURCED', 'UNCERTAIN']), source_url: z.string().url().optional(), result: z.string().optional() });
export const GuideSchema = z.object({
  app_name: z.string(), website: z.string(), slug: z.string(), generated_at: z.string(),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']), difficulty_reason: z.string(),
  time_estimate: z.object({ best_case: z.string(), typical: z.string(), worst_case: z.string() }),
  effort: z.string(), prerequisites: z.array(z.string()),
  steps: z.array(z.object({ title: z.string(), url: z.string().url(), instruction: z.string(), who: z.enum(['agent can do', 'human must do']) })),
  approval: z.object({ review_needed: z.string(), triggers: z.string(), checks: z.string(), slow_factors: z.string() }),
  blockers: z.array(z.object({ problem: z.string(), fix: z.string() })),
  scopes: z.array(z.object({ name: z.string(), level: z.string(), why: z.string() })),
  redirect_rules: z.string(), agent_handoff: z.string(), next_action: z.string(),
  evidence: z.array(EvidenceSchema), overall_confidence: z.enum(['High', 'Medium', 'Low'])
});
export type Guide = z.infer<typeof GuideSchema>;
