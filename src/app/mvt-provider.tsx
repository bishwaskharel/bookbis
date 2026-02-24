"use client";

import { MVTOrchestrator } from "@mvtlab/nextjs-orchestrator";

const orchestratorKey =
  process.env.NEXT_PUBLIC_MVTLAB_ORCHESTRATOR_KEY ?? "YOUR_PROJECT_KEY";

export function MVTProvider({ children }: { children: React.ReactNode }) {
  return (
    <MVTOrchestrator orchestratorKey={orchestratorKey}>
      {children}
    </MVTOrchestrator>
  );
}
