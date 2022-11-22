import React from "react";

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <>
      <div>
        <h1>CART ({cartItems.length})</h1>
        <div>{cartItems.length === 0 && <p>Cart is Empty</p>}</div>
      </div>
      <div>
        <div>
          <ul>
            {cartItems.map((cartItem) => (
              <li
                key={cartItem}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={cartItem[0]} alt="" width={"50px"} />
                <h5>{cartItem[1]}</h5> <h5>{cartItem[2]}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
