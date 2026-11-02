import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductSection } from "./components/ProductSection";
import { Footer } from "./components/Footer";
import "./css/App.css";
function App() {
  {
    /* Données du header */
  }
  const storeName = "Digital Store";
  const welcomeMessage = `Bienvenue chez ${storeName}`;

  {
    /* Données de la section hero */
  }
  const heroTitle =
    "Développez vos compétences et donnez vie à vos ambitions grâce au digital.";
  const heroDescription =
    "Découvrez une sélection d'ebooks, de guides pratiques et de templates conçus pour vous aider à acquérir de nouvelles compétences, développer vos projets et saisir les opportunités offertes par Internet.";
  {
    /*Tableau objets produits */
  }

  return (
    <>
      <main>
        <Header />

        <Hero
          welcomeMessage={welcomeMessage}
          heroTitle={heroTitle}
          heroDescription={heroDescription}
        />

        <ProductSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
