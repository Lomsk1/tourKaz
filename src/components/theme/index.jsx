import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBgColor: "#000814",
    greenBg: "#023618",
    lightBlue: "#006d77",
    white: "#edf2f4",
    red: "#d90429",
  },
  font: "var(--font-chivo)",
  flexCenter:
    "display: flex;     align-items: center; justify-content: center;",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
