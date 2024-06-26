import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      red: "#ff5555",
      green: "#55ff55",
      yellow: "#ffff55",
      blue: "#5555ff",
      purple: "#ff55ff",
      cyan: "#55ffff",
      white: "#bbbbbb",
      brightBlack: "#555555",
      brightRed: "#ff5555",
      brightGreen: "#55ff55",
      brightYellow: "#ffff55",
      brightBlue: "#5555ff",
      brightPurple: "#ff55ff",
      brightCyan: "#55ffff",
      brightWhite: "#ffffff",
      foreground: "#ffffff",
      background: "#000000",
      cursorColor: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
