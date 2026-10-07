import type { ComponentType } from "react";

export type Theme = "light" | "dark";

export type ThemeProps = {
  theme: Theme;
};

export function withTheme<P extends ThemeProps>(Wrapped: ComponentType<P>) {
  function WithTheme(props: P) {
    return <Wrapped {...props} />;
  }

  WithTheme.displayName = `withTheme(${Wrapped.displayName || Wrapped.name || "Component"})`;
  return WithTheme;
}
