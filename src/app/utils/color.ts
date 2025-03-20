export const tailwindColors = {
  "green-400": "#4ade80",
  "blue-500": "#3b82f6",
  "red-400": "#f87171",
  "purple-500": "#a855f7",
  "yellow-400": "#facc15",
  "orange-500": "#f97316",
  "pink-400": "#f472b6",
  "indigo-500": "#6366f1",
  "teal-400": "#2dd4bf",
  "green-500": "#22c55e",
} as const;

export type TailwindColorKey = keyof typeof tailwindColors;