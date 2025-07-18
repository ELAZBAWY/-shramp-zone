// Sidebar component for displaying shopping cart items
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartSidebar = () => {
  // Access cart context values
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext)!;

  return (
    <div
      className="cart-sidebar"
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        height: "100%",
        width: "300px",
        backgroundColor: "wheat",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
        padding: "1rem",
        overflowY: "auto",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Cart title */}
      <h4
        style={{
          marginBottom: "1rem",
          color: "#333",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        Your Shopping Cart
      </h4>
      {/* Show message if cart is empty */}
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {/* List cart items */}
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "1rem" }}>
          <h5>{item.title}</h5>
          <p>Price: ${item.price.toFixed(2)}</p>
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <button
            className="btn btn-danger btn-sm mt-1"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartSidebar;
