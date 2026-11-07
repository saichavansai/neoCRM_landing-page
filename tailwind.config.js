export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#1a1646",
        mist: "#f7f6ff",
        iris: { DEFAULT: "#6d4cf0", dark: "#5a3bd9" },
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        rise: { from: { opacity: 0, transform: "translateY(32px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        pulseGlow: { "0%,100%": { opacity: 0.55 }, "50%": { opacity: 1 } },
        flow: { to: { strokeDashoffset: -56 } },
        blob: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(40px,-30px) scale(1.1)" }, "66%": { transform: "translate(-30px,30px) scale(0.95)" } },
        drift: { "0%,100%": { transform: "translateX(-2%)" }, "50%": { transform: "translateX(2%)" } },
        borderFlow: { from: { backgroundPosition: "0 0, 0% 0" }, to: { backgroundPosition: "0 0, 300% 0" } },
        meshPulse: { "0%,100%": { opacity: 0.8 }, "50%": { opacity: 1 } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        hero: "rise 0.9s ease-out both, float 7s ease-in-out 0.9s infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        flow: "flow 3s linear infinite",
        "flow-fast": "flow 0.9s linear infinite",
        blob: "blob 20s ease-in-out infinite",
        border: "borderFlow 8s linear infinite",
        mesh: "meshPulse 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
