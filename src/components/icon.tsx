type IconName = "research" | "structure" | "design" | "technology" | "automation" | "data" | "improvement" | "handshake" | "people" | "target" | "arrow" | "close" | "menu";
const paths: Record<IconName, React.ReactNode> = {
  research: <><path d="M5 30V20h5v10m5 0V12h5v18m5 0V4h5v26M4 15h16" /></>,
  structure: <><path d="m18 3 13 7v16l-13 7-13-7V10l13-7Z M5 10l13 8 13-8M18 18v15" /></>,
  design: <><path d="M6 30C7 16 15 5 30 4c-1 15-9 25-24 26ZM6 30l16-17M14 23l2-8" /></>,
  technology: <><rect x="3" y="5" width="30" height="21" rx="1" /><path d="M18 26v6m-7 0h14" /></>,
  automation: <><rect x="9" y="9" width="18" height="18" rx="1" /><path d="M14 3v6m8-6v6M14 27v6m8-6v6M3 14h6m-6 8h6m18-8h6m-6 8h6" /></>,
  data: <><ellipse cx="18" cy="7" rx="13" ry="5" /><path d="M5 7v21c0 7 26 7 26 0V7M5 14c0 7 26 7 26 0M5 21c0 7 26 7 26 0" /></>,
  improvement: <><path d="M4 31v-6h4v6m5 0V17h4v14m5 0V10h4v21m5 0V3h3v28" /></>,
  handshake: <><path d="m2 16 5-10 8 2 6-2 7 2 6 10-5 9-8 5-8-5-8-8m9-11-5 7 3 3 7-5 10 9M13 22l8 7m-5-11 10 8M4 20l-2-2m26-9 4-2" /></>,
  people: <><circle cx="18" cy="9" r="5" /><path d="M8 32v-6c0-10 20-10 20 0v6ZM5 8a4 4 0 0 0 0 8m26-8a4 4 0 0 1 0 8M4 21c-4 1-3 7-3 10h4m26-10c4 1 3 7 3 10h-4" /></>,
  target: <><path d="M29 14a13 13 0 1 1-8-8m3 14a7 7 0 1 1-7-7M18 19 32 5m-7 0h7v7" /></>,
  arrow: <><path d="M5 18h25m-7-7 7 7-7 7" /></>,
  close: <><path d="m9 9 18 18M27 9 9 27" /></>,
  menu: <><path d="M5 10h26M5 18h26M5 26h26" /></>,
};
export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
