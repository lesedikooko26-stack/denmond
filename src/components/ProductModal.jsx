import { useState, useEffect } from "react";
import { formatPrice } from "../data/products.js";
import { orderProductViaWhatsApp } from "../utils/whatsapp.js";

export default function ProductModal({ product, onClose, onAddToBag }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (product) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel">
        <button type="button" className="icon-button modal__close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal__image-wrap">
          <img src={product.image} alt={product.alt} className="modal__image" />
        </div>

        <div className="modal__details">
          <h3 className="modal__name">{product.name}</h3>
          <p className="modal__desc">{product.description}</p>
          <p className="modal__price">{formatPrice(product.price)}</p>

          <div className="quantity-selector">
            <span className="quantity-selector__label">Quantity</span>
            <div className="quantity-selector__control">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="modal__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                onAddToBag(product, quantity);
                onClose();
              }}
            >
              Add to bag
            </button>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => orderProductViaWhatsApp(product, quantity)}
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
