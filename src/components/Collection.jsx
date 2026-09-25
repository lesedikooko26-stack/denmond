import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function Collection({ onView, onAddToBag }) {
  return (
    <section id="collection" className="collection">
      <div className="container">
        <div className="collection__header">
          <h2 className="section-heading">The collection</h2>
          <p className="section-sub">Two pieces. One identity.</p>
        </div>

        <div className="collection__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={onView}
              onAddToBag={onAddToBag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
