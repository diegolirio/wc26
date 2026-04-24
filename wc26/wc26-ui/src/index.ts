import { getSharedFrontTitle } from "@wc26/shared-front";

export const workspaceTheme = {
  colors: {
    background: "#f8fafc",
    surface: "#eef2ff",
    card: "#ffffff",
    text: "#0f172a",
    accent: "#2563eb"
  }
} as const;

export function getWorkspaceSubtitle(channel: "web" | "mobile") {
  return `${getSharedFrontTitle()} for ${channel}`;
}

export function getWorkspaceHighlights() {
  return [
    {
      title: "Shared design language",
      description: "Keep project-specific UI in one place and re-use the same words, colors, and patterns across apps."
    },
    {
      title: "Web and mobile ready",
      description: "The workspace is split so Next.js and Expo can evolve independently without coupling their build tools."
    },
    {
      title: "Workspace-friendly imports",
      description: "Local packages resolve through pnpm workspaces, so feature code stays close to the project that owns it."
    }
  ];
}
