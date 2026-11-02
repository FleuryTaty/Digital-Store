import logo from "../assets/logo/logo.png";
import { Navlinks } from "./navLinks/Navlinks";
import { Button } from "./button/Button";
import "../css/Header.module.css";

export function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo de la boutique" />
        </div>

        <Navlinks />

        <Button title={"Nous contacter"} />
      </header>
    </>
  );
}
