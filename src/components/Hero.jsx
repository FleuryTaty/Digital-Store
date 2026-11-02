import { Button } from "./button/Button";
import style from "../css/Hero.module.css";

export function Hero({ welcomeMessage, heroTitle, heroDescription }) {
  return (
    <>
      <section className={style.heroSection}>
        <span className={style.badgeWelcomeMessage}>{welcomeMessage}</span>

        <h1>{heroTitle}</h1>

        <p>{heroDescription}</p>

        <Button title={"Découvrir nos produits"} />
      </section>
    </>
  );
}
