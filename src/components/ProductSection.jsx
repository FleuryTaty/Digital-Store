import { ProductCard } from "./productCard/ProductCard";
import produit_1 from "../assets/images/produit_1.png";
import produit_2 from "../assets/images/produit_2.png";
import produit_3 from "../assets/images/produit_3.png";
export function ProductSection() {
  const products = [
    {
      name: "Ebook Marketing Digital",
      price: 5000,
      description:
        "Apprenez les fondamentaux du marketing digital et découvrez comment développer une activité en ligne.",
      isOnSale: true,
      url: "../assets/images/produit_1.png",
    },
    {
      name: "Guide Freelance",
      price: 7500,
      description:
        "Découvrez comment proposer vos services en ligne, trouver vos premiers clients et développer votre activité freelance.",
      isOnSale: false,
    },
    {
      name: "Pack Templates",
      price: 10000,
      description:
        "Accédez à une collection de modèles prêts à utiliser pour gagner du temps et améliorer votre productivité.",
      isOnSale: true,
    },
  ];
  return (
    <>
      <section className="productSection">
        <div>
          <span className="badge">PRODUITS POPULAIRES</span>
          <h2>Nos meilleures offres</h2>
          <p>
            Découvrez notre sélection de produits numériques les plus appréciés
            <br />
            par notre communauté
          </p>
        </div>

        <section className="containerCard">
          <ProductCard
            name={products[0].name}
            description={products[0].description}
            price={products[0].price}
            url={produit_1}
            isOnSale={products[0].isOnSale}
          />
          <ProductCard
            name={products[1].name}
            description={products[1].description}
            price={products[1].price}
            url={produit_2}
            isOnSale={products[1].isOnSale}
          />
          <ProductCard
            name={products[2].name}
            description={products[2].description}
            price={products[2].price}
            url={produit_3}
            isOnSale={products[2].isOnSale}
          />
        </section>
      </section>
    </>
  );
}
