import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { ThemeHeader } from "./components/ThemeHeader";
import { withTheme, type Theme } from "./hoc/withTheme";
import "./App.css";

const ThemedDashboard = withTheme(Dashboard);

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <main className={theme}>
      <ThemeHeader theme={theme} onToggle={toggleTheme} />
      <ThemedDashboard theme={theme} title="Панель управления" />
    </main>
  );
}
