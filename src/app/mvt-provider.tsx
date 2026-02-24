"use client";

import { MVTOrchestrator } from "@mvtlab/nextjs-orchestrator";

// Set in .env.local: NEXT_PUBLIC_MVTLAB_ORCHESTRATOR_KEY (from MVTLab.io dashboard)
const orchestratorKey =
  process.env.NEXT_PUBLIC_MVTLAB_ORCHESTRATOR_KEY ?? "YOUR_PROJECT_KEY";

export function MVTProvider({ children }: { children: React.ReactNode }) {
  return (
    <MVTOrchestrator
      orchestratorKey={orchestratorKey}
      antiFlickerEnabled
    >
      {children}
    </MVTOrchestrator>
  );
}
