import { formatPrice } from "../data/products.js";
import { orderCartViaWhatsApp } from "../utils/whatsapp.js";

export default function Cart({
  open,
  items,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart ${open ? "cart--open" : ""}`} aria-hidden={!open}>
      <div className="cart__backdrop" onClick={onClose} />
      <div className="cart__panel" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <div className="cart__header">
          <h3>Your bag</h3>
          <button type="button" className="icon-button" aria-label="Close bag" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart__empty">Your bag is empty.</p>
        ) : (
          <ul className="cart__list">
            {items.map((item) => (
              <li key={item.id} className="cart__item">
                <img src={item.image} alt={item.alt} className="cart__item-image" />
                <div className="cart__item-info">
                  <p className="cart__item-name">{item.name}</p>
                  <p className="cart__item-price">{formatPrice(item.price)}</p>
                  <div className="cart__item-qty">
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => onDecrease(item.id)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => onIncrease(item.id)}>
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart__remove"
                  aria-label={`Remove ${item.name} from bag`}
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              type="button"
              className="btn btn--primary btn--full"
              onClick={() => orderCartViaWhatsApp(items, total)}
            >
              Order via WhatsApp
            </button>
            <button type="button" className="btn btn--outline btn--full" onClick={onClose}>
              Continue shopping
            </button>
            <button type="button" className="cart__clear" onClick={onClear}>
              Clear bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
