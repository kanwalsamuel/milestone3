// // import type { Config } from "tailwindcss";

// // export default {
// //   content: [
// //     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "var(--background)",
// //         foreground: "var(--foreground)",
// //       },
// //       fontFamily: {
// //         clash: ['Clash Display', 'sans-serif'],
// //         santhoshi: ['Santhoshi', 'sans-serif'],
// //       },



      
// //     },
// //   },
// //   plugins: [],
// // } satisfies Config;




// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       fontFamily: {
//         clash: ['Clash Display', 'sans-serif'],
//         santhoshi: ['Santhoshi', 'sans-serif'],
//       },
//       // Extend the theme with custom keyframes and animation for "slide-down"
//       keyframes: {
//         slideDown: {
//           '0%': {
//             transform: 'translateY(-20px)',
//             opacity: '0',
//           },
//           '100%': {
//             transform: 'translateY(0)',
//             opacity: '1',
//           },
//         },
//       },
      





//       animation: {
//         'slide-down': 'slideDown 0.5s ease-out forwards',
//       },
//     },

//       // Define custom keyframes for the shutter-down effect
//       keyframes: {
//         shutterDown: {
//           '0%': {
//             transform: 'translateY(-100%)', // Start off-screen at the top
//             opacity: '0',
//           },
//           '100%': {
//             transform: 'translateY(0)', // End at its original position
//             opacity: '1',
//           },
//         },
//       },
//       animation: {
//         'shutter-down': 'shutterDown 0.6s ease-in-out', // Define the animation duration and easing
//       },
//     },
  



  
//   plugins: [],
// } satisfies Config;





import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        santhoshi: ["Santhoshi", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        shutterDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-down": "slideDown 0.5s ease-out forwards",
        "shutter-down": "shutterDown 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
