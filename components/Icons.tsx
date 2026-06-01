import type { SVGProps } from "react";

type IconName =
  | "clipboard"
  | "cube"
  | "form"
  | "grid"
  | "mail"
  | "mobile"
  | "screen"
  | "search"
  | "settings"
  | "shield"
  | "trend";

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const common: SVGProps<SVGSVGElement> = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.8,
    "aria-hidden": true,
  };

  const icons: Record<IconName, React.ReactNode> = {
    clipboard: <path d="M9 5h6m-6 4h6m-6 4h6m-6 4h4m-6 4h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1.5a2.5 2.5 0 0 0-5 0H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />,
    cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v18m8-13.5-8 4.5-8-4.5" />,
    form: <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 5h8m-8 4h8m-8 4h5" />,
    grid: <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />,
    mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
    mobile: <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15h2" />,
    screen: <path d="M3 4h18v13H3zM8 21h8m-4-4v4" />,
    search: <path d="m20 20-4.5-4.5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />,
    settings: <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-3.5 2-1-2-3-2.1.5a7.7 7.7 0 0 0-1.5-.9L15 5.5h-6l-.4 2.1a7.7 7.7 0 0 0-1.5.9L5 8l-2 3 2 1a7.6 7.6 0 0 0 0 1.9L3 15l2 3 2.1-.5c.5.4 1 .7 1.5.9L9 20.5h6l.4-2.1c.5-.2 1-.5 1.5-.9l2.1.5 2-3-2-1a7.6 7.6 0 0 0 0-1.9Z" />,
    shield: <path d="M12 21s7-3.5 7-9V5l-7-2-7 2v7c0 5.5 7 9 7 9Z" />,
    trend: <path d="m4 17 6-6 4 4 6-8m-5 0h5v5" />,
  };

  return <svg {...common}>{icons[name as IconName] ?? icons.form}</svg>;
}
