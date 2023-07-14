/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: [
        "Avenir Next",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Ubuntu",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {
      keyframes: {
        wobble: {
          '0%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-10px)' },
          '30%': { transform: 'translateX(10px)' },
          '45%': { transform: 'translateX(-10px)' },
          '60%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
          '90%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wobble: 'wobble 0.9s infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
};
