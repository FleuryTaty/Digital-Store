import { ProductCard } from "./productCard/ProductCard";
import produit1 from "../assets/images/produit_1.png";
import produit2 from "../assets/images/produit_2.png";
import produit3 from "../assets/images/produit_3.png";

const products = [
  {
    id: 1,
    name: "Ebook Marketing Digital",
    price: 5000,
    description:
      "Apprenez les fondamentaux du marketing digital et découvrez comment développer une activité en ligne.",
    isOnSale: true,
    url: produit1,
  },
  {
    id: 2,
    name: "Guide Freelance",
    price: 7500,
    description:
      "Découvrez comment proposer vos services en ligne, trouver vos premiers clients et développer votre activité freelance.",
    isOnSale: false,
    url: produit2,
  },
  {
    id: 3,
    name: "Pack Templates",
    price: 10000,
    description:
      "Accédez à une collection de modèles prêts à utiliser pour gagner du temps et améliorer votre productivité.",
    isOnSale: true,
    url: produit3,
  },
];

export function ProductSection() {
  return (
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            isOnSale={product.isOnSale}
            url={product.url}
          />
        ))}
      </section>
    </section>
  );
}
