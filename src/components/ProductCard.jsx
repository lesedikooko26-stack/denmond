import { formatPrice } from "../data/products.js";
import { orderProductViaWhatsApp } from "../utils/whatsapp.js";

export default function ProductCard({ product, onView, onAddToBag }) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__image-wrap"
        onClick={() => onView(product)}
        aria-label={`View ${product.name}`}
      >
        <img src={product.image} alt={product.alt} className="product-card__image" />
      </button>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>

        <div className="product-card__actions">
          <button type="button" className="btn btn--outline" onClick={() => onView(product)}>
            View product
          </button>
          <button type="button" className="btn btn--primary" onClick={() => onAddToBag(product)}>
            Add to bag
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => orderProductViaWhatsApp(product, 1)}
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}
