import { useEffect } from "react";

export function ThemeProvider({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "purple";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return children;
}
