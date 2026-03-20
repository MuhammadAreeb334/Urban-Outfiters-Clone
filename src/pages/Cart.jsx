// src/components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate total safely
  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl mb-4">Shopping Bag</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.color}-${item.size}`}
          className="flex gap-4 items-center mb-4 border-b pb-4"
        >
          {/* Fallback image if missing */}
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover"
          />

          <div className="flex-1">
            <p className="font-bold">{item.name || "Unnamed Product"}</p>
            <p>Color: {item.color || "N/A"}</p>
            <p>Size: {item.size || "N/A"}</p>
            <p>${item.price?.toFixed(2) || "0.00"}</p>

            <input
              type="number"
              min={1}
              value={item.quantity || 1}
              onChange={(e) =>
                updateQuantity(
                  item.id,
                  item.color,
                  item.size,
                  Number(e.target.value)
                )
              }
              className="w-16 border p-1 mt-1"
            />

            <button
              className="ml-2 text-red-500 text-xs underline"
              onClick={() => removeFromCart(item.id, item.color, item.size)}
            >
              Remove
            </button>
          </div>

          <p className="font-bold">
            ${(item.price * (item.quantity || 1)).toFixed(2)}
          </p>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;