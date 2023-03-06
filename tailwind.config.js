/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      GoogleSansRegular: ["GoogleSansRegular", "sans-serif"],
      GoogleSansBold: ["GoogleSansBold", "sans-serif"],
    },
    fontSize: {
      tiny: ["0.625rem", "0.75rem"],
      xxs: ["0.75rem", "1.125rem"],
      xs: ["0.875rem", "1.125rem"],
      sm: ["0.938rem", "1.375rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.25rem", "1.875rem"],
      xl: ["1.5rem", "1.875rem"],
      "2xl": ["1.975rem", "2rem"],
      "2xxl": ["1.875rem", "2.25rem"],
      "3xl": ["2.25rem", "2.5rem"],
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
      "7xl": "6rem",
    },
    extend: {
      colors: {
        'appBlack': '#1F1E1E',
        'oziGrey': '#1F1E1E4D',
        'lightGrey': '#9B9B9B',
        'tableLightGrey': '#F5F5F5',
        'darkGrey': '#656565',
        'greyPrimary': '#777777',
        'greyBorder': '#F7F7F7',
        'redPrimary': '#B71111',
        'purple': '#6133E3',
      },
      width: {
        '188': '188px',
        '215': '215px',
        '320': '320px',
        '150': '150px'
      },
      maxWidth:{
        '290': '290px',
      },
      height: {
        '60': '60px',
      },
      lineHeight: {
        'extra-loose': '1.2',
      },
      zIndex: {
        '1024': '1024',
      }
    },
  },
  plugins: [],
}
