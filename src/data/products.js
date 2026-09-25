// ---------------------------------------------------------
// DENMOND product data
// ---------------------------------------------------------
// The two clothing images live here. Replace the files at
// src/assets/product-image-1.jpg and product-image-2.jpg to
// change the photography — nothing else needs to change.
// ---------------------------------------------------------
import productImage1 from "../assets/product-image-1.jpg";
import productImage2 from "../assets/product-image-2.jpg";

export const products = [
  {
    id: 1,
    name: "DENMOND ESSENTIAL",
    description: "A refined DENMOND staple designed for everyday wear.",
    price: 200,
    image: productImage1,
    alt: "DENMOND clothing collection piece — the Essential",
  },
  {
    id: 2,
    name: "DENMOND SIGNATURE",
    description: "A statement piece built around the DENMOND identity.",
    price: 200,
    image: productImage2,
    alt: "DENMOND clothing collection piece — the Signature",
  },
];

export function formatPrice(amount) {
  return `R${amount.toLocaleString("en-ZA")}`;
}
