/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: {
        "50": "#535353",
        "100": "#494949",
        "200": "#3f3f3f",
        "300": "#353535",
        "400": "#2b2b2b",
        "500": "#212121",
        "600": "#171717",
        "700": "#0d0d0d",
        "800": "#030303",
        "900": "#000000"
      },
      pink: {
        "50": "#ff58c8",
        "100": "#ff4ebe",
        "200": "#ff44b4",
        "300": "#fb3aaa",
        "400": "#f130a0",
        "500": "#e72696",
        "600": "#dd1c8c",
        "700": "#d31282",
        "800": "#c90878",
        "900": "#bf006e"
      },
      green: {
        "50": "#90ffd7",
        "100": "#86ffcd",
        "200": "#7cf9c3",
        "300": "#72efb9",
        "400": "#68e5af",
        "500": "#5edba5",
        "600": "#54d19b",
        "700": "#4ac791",
        "800": "#40bd87",
        "900": "#36b37d"
      },
      yellow: {
        "50": "#ffff63",
        "100": "#fff759",
        "200": "#ffed4f",
        "300": "#ffe345",
        "400": "#ffd93b",
        "500": "#facf31",
        "600": "#f0c527",
        "700": "#e6bb1d",
        "800": "#dcb113",
        "900": "#d2a709"
      }
    }
  },
  plugins: [],
}