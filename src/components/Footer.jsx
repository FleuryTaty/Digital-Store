import logo from "../assets/logo/logo.png";
export function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src={logo} alt="Logo de la boutique" />
          <p>Votre partenaire pour un avenir numérique plus grand</p>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Produits</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">Nous contacter</a>
            </li>
          </ul>
        </div>

        <div>
          <p>2026 Digital Store. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
