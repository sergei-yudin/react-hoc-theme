import type { Theme } from "../hoc/withTheme";

type Props = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeHeader({ theme, onToggle }: Props) {
  return (
    <header>
      <h1>Theme HOC</h1>
      <button onClick={onToggle}>
        {theme === "light" ? "Включить тёмную" : "Включить светлую"}
      </button>
    </header>
  );
}
