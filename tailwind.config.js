// module.exports = {
//   content: ["./pages/**/*.jsx", "./components/**/*.jsx"], // Adjust paths for your project
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures all source files are scanned
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
