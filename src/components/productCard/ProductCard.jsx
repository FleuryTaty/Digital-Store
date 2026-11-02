export function ProductCard({ name, price, description, isOnSale, url }) {
  const promoController = isOnSale == true ? "En promotion" : "Prix normal";
  return (
    <>
      <div className="cardProduct">
        <div className="contentImage">
          <span className="bullePromo">{promoController}</span>
          <img src={url} alt="Photo du produit " />
        </div>
        <div className="infoProduct">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <h4>{price} FCFA</h4>
        </div>
        <a href="#">Découvrir</a>
      </div>
    </>
  );
}
