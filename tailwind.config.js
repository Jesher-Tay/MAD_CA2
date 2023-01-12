/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // boldDisplay: ['SFProDisplay-Bold'],
        // regulardisplay: ['SFProDisplay-Regular'],
        // semibolddisplay: ['SFProDisplay-Semibold'],
        // lightdisplay: ['SFProDisplay-Light'],
        bold: ['SFProText-Bold'],
        semibold: ['SFProText-Semibold'],
        light: ['SFProText-Light'],
      },
    },
  },
  plugins: [],
}
