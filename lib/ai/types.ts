/**
 * Shared types for Design Journey + AI Consultant.
 * Phase 2/3 will expand usage; Phase 1 establishes the contract.
 */

export type DesignPreferences = {
  space?: string;
  style?: string;
  cabinetry?: string;
  wood?: string;
  finish?: string;
  hardware?: string;
  molding?: string;
  budgetNotes?: string;
  favoriteImageIds?: string[];
  notes?: string;
};

export type ProjectBrief = {
  projectType?: string;
  room?: string;
  designStyle?: string;
  cabinetStyle?: string;
  woodSpecies?: string;
  finish?: string;
  hardware?: string;
  molding?: string;
  inspirationImageIds?: string[];
  customerNotes?: string;
  questions?: string[];
  generatedAt?: string;
  summaryNarrative?: string;
};

export type ConsultSession = {
  preferences?: DesignPreferences;
  brief?: ProjectBrief;
  messages?: { role: "user" | "assistant"; content: string }[];
};

/** Phase 3 stub — implement AI brief generation later */
export async function generateBrief(
  _preferences: DesignPreferences,
  _notes?: string,
): Promise<ProjectBrief> {
  // TODO(Phase 3): Use AI SDK to produce a polished consultation document
  throw new Error("generateBrief is not implemented yet (Phase 3)");
}
