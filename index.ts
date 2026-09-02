import type { PluginContext } from "@getpaseo/plugin";
import { AgentCrew } from "./main.client";

export default function contribute(plugin: PluginContext) {
  plugin.addWorkspacePanel({
    id: "crew",
    title: "Agent Crew",
    icon: "Network",
    context: "workspace",
    locations: ["explorer"],
    Component: AgentCrew,
  });
  plugin.addCommandCenterItem({
    id: "open-crew",
    title: "Open Agent Crew",
    icon: "Network",
    keywords: ["agents", "subagents", "orchestration", "delegation", "workers", "workspace"],
    context: "workspace",
    onSelect({ openPanel }) {
      openPanel("crew", { location: "explorer" });
    },
  });
  return () => {};
}
