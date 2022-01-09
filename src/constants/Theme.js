export const theme = Object.freeze({
  colors: {
    primaryColor: "#000000",
    reverseColor: "#ffff00",
  },
  spacing: (value) => `${4 * value}px`,
  timing: "250ms",
  timingFunction: `cubic-bezier(0.075, 0.82, 0.165, 1)`,
  boxShadow: `4px 4px 8px 0px rgba(34, 60, 80, 0.2)`,
});
