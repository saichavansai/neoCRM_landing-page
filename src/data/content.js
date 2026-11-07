export const SCREENS = {
  overview: { src: "/screens/overview.webp", alt: "neoCRM workspace overview with lead KPIs, pipeline conversion funnel and inbound source attribution" },
  pipeline: { src: "/screens/pipeline.webp", alt: "neoCRM leads pipeline board with a column for each stage" },
  leads: { src: "/screens/leads.webp", alt: "neoCRM all leads table with search, filters, stage, status and assigned agent" },
};

export const SHOWCASE = [
  {
    screen: "overview", badge: "Dashboards and reporting",
    title: "See your whole pipeline at a glance",
    text: "Review lead volume, conversion rate and follow-up indicators, then see how leads move through the funnel and where they come from.",
    points: ["Switch between 7D, 30D, 90D and all-time views", "Follow the pipeline funnel stage by stage", "See which sources bring in leads", "Managers can compare team performance where permitted"],
  },
  {
    screen: "pipeline", badge: "Sales pipeline",
    title: "Move every lead through your sales stages",
    text: "A visual board with a column for each stage. Drag leads between stages and review duplicate flags as you work.",
    points: ["Filter the board by assignee", "Show potential duplicates only", "Import and export leads as CSV", "Create a lead straight into any stage"],
  },
  {
    screen: "leads", badge: "Shared lead workspace",
    title: "Every lead in one directory, with a clear owner",
    text: "Search and filter all your leads, see who owns each one, and keep unassigned leads visible until someone picks them up.",
    points: ["Filter by pipeline, stage, status, assignee or tag", "Contact details, stage and owner in one row", "Open any lead to review its activity history"],
  },
];
