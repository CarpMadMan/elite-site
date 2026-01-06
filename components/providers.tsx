"use client";

import { VibeKanbanWebCompanion } from "vibe-kanban-web-companion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VibeKanbanWebCompanion />
      {children}
    </>
  );
}
