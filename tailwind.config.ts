import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light colors
        light50: "#fbfbfb",
        light75: "#f8f7fc",
        light100: "#f4f7fd",
        light125: "#f3f8fc",
        light150: "#f3f3f3",
        light175: "#f4fbff",
        light200: "#f4f9fb",
        light225: "#f2f2f2",
        light250: "#f0f2fb",
        light275: "#f7f7f7",
        light300: "#ebebeb",
        light400: "#f5f9fc",
        light450: "#fefafd",
        light475: "#f7f7fc",
        light500: "#f1f6fb",

        // Grey colors
        gray50: "#eff6fb",
        gray100: "#eaf9ff",
        gray125: "#e9f2f8",
        gray150: "#e4eff7",
        gray175: "#e7f0f8",
        gray200: "#e3edf7",
        gray250: "#ecf4f9",
        gray300: "#dae8f4",
        gray500: "#adadad",

        // Slate colors
        slate50: "#e1f7ff",
        slate75: "#e5eff7",
        slate100: "#ddeaf5",
        slate150: "#cfe1f1",
        slate200: "#eef4fa",

        // Blue colors
        blue25: "#daf4fb",
        blue50: "#b9eaf7",
        blue100: "#8ecafb",
        blue150: "#71a7d6",
        blue175: "#498dcb",
        blue200: "#468bca",
        blue225: "#5d9ad1 ",
        blue250: "#4473ca",
        blue275: "#3266cc",
        blue300: "#0575da",
        blue350: "#003399",
        blue375: "#263877",
        blue400: "#1c2a59",
        blue500: "#011c34",

        // Purple colors
        purple50: "#e0e0f3",
        purple75: "#eee7fa",
        purple100: "#ece5fa",
        purple200: "#ebe4f9",
        purple225: "#dadaf1",
        purple250: "#e6daf8",
        purple275: "#cfd7f0",
        purple300: "#c9d8fa",
        purple400: "#405ec4",
        purple500: "#663399",
        // Red colors
        red100: "#fff4f4",
        red200: "#ffcece",
        red300: "#d32f2f",
        red400: "#bf0000",
        red500: "#990000",

        // Green colors
        green100: "#f4fff8",
        green125: "#f0fff8",
        green150: "#e0fff0",
        green200: "#dbfcdd",
        green300: "#d5ffe3",
        green400: "#65966a",
        green450: "#009933",
        green500: "#006633",

        // Yellow colors
        yellow100: "#fffbea",
        yellow200: "#fff6d2",
        yellow300: "#ffcc00",

        // Pink colors
        pink25: "#f5f2fc",
        pink50: "#fcf0f7",
        pink100: "#fff2f2",
        pink200: "#ffe9e9",
        pink250: "#fae9f3",
        pink300: "#fbeaf4",
        pink400: "#a8376f",
      },
      borderRadius: {
        card: "37px",
      },
      screens: {
        xs: "320px",
        xxs: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      maxWidth: {
        card: "440px",
        tablet: "900px",
        laptop: "1200px",
        container: "1640px",
        desktop: "1920px",
      },
      boxShadow: {
        header: "#00000012 0px 7px 20px 0px",
        button: "#00000059 0px 4px 10px",
        avatar: "#0000003d 0px 3px 8px",
        card: "#0000000a 0px 3px 5px",
        table: "#00000040 0px 4px 22px",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
