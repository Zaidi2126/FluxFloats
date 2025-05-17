/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-teal": "var(--accent-teal)",
        "accent-purple": "var(--accent-purple)",
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        background: "var(--background)",
        surface: "var(--surface)",
      },
      textColor: {
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-teal": "var(--accent-teal)",
        "accent-purple": "var(--accent-purple)",
      },
      borderColor: {
        "accent-teal": "var(--accent-teal)",
        "accent-purple": "var(--accent-purple)",
      },
      ringColor: {
        "accent-teal": "var(--accent-teal)",
        "accent-purple": "var(--accent-purple)",
      },
    },
  },
  plugins: [],
}; 