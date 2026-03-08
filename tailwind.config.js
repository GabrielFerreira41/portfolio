/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        udem: {
          blue: "#0057AC",
          navy: "#0B113A",
          ink: "#0A0F2B",
          mist: "rgba(0, 87, 172, 0.10)",
        },
      },
    },
  },
  plugins: [],
};
