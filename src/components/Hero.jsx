import { products } from "../data/products.js";

export default function Hero() {
  const heroProduct = products[0];

  const scrollToCollection = (e) => {
    e.preventDefault();
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__label">DENMOND COLLECTION</span>
          <h1 className="hero__heading">
            Defined by
            <br />
            design.
          </h1>
          <p className="hero__sub">
            Contemporary pieces designed for those who move differently.
          </p>
          <a href="#collection" className="btn btn--primary" onClick={scrollToCollection}>
            Shop the collection
          </a>
        </div>

        <div className="hero__visual">
          <img src={heroProduct.image} alt={heroProduct.alt} className="hero__image" />
        </div>
      </div>
    </section>
  );
}
