import type { ThemeProps } from "../hoc/withTheme";

type Props = ThemeProps & {
  title: string;
};

export function Dashboard({ theme, title }: Props) {
  return (
    <section className={`dashboard ${theme}`}>
      <span className="badge">{theme} theme</span>
      <h2>{title}</h2>
      <p>
        Тема передана через пропсы компонентом высшего порядка — без Context
        API.
      </p>
      <div className="stats">
        <article>
          <b>24</b>
          <span>проекта</span>
        </article>
        <article>
          <b>98%</b>
          <span>готово</span>
        </article>
      </div>
    </section>
  );
}
