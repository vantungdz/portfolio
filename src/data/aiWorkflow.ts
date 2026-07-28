export interface AIWorkflowItem {
  title: string;
  description: string;
}

/** How AI tools are actually used day-to-day — every output is manually verified before shipping. */
export const aiWorkflowItems: AIWorkflowItem[] = [
  {
    title: "AI-assisted Code Review",
    description:
      "Use AI to review completed implementations for readability, edge cases, and potential improvements. Every suggestion is manually verified before being applied.",
  },
  {
    title: "AI-assisted Debugging",
    description:
      "Use AI to analyze error logs, identify possible root causes, and suggest debugging strategies. Validate each hypothesis through testing and official documentation.",
  },
  {
    title: "AI-assisted Documentation & Test Cases",
    description:
      "Use AI to draft technical documentation and generate initial test scenarios. Refine and adapt the output to match project requirements and coding standards.",
  },
];
