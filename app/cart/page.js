"use client";
import CartItem from "@/components/utils/CartItem";
import { useSelector } from "react-redux";


const Cart = () => {
  // const isEmpty = false;

  const cart = useSelector((state) => state.cart);

  // console.log(cart);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0 )
  }

  // console.log(getTotalPrice())

  return (
    <main className="container mt-4">
      <section>
        <h2 className="text-[24px] leading-6 font-medium font-robot mb-6">
          Shopping Cart
        </h2>
        {cart.length === 0 ? (
          <>
            <p className="text-base font-poppins leading-[22px] text-light">
              You have nothing in your shopping cart
            </p>
            <button className="mt-5 bg-black/40 px-8 py-5 text-white font-poppins font-medium">
              Continue Shopping
            </button>
          </>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.slug}
                // name={name}
                // image={images[1]}
                // slug={slug}
                // price={price}
                item={item}
              />
            ))}

            {/* <CartItem /> */}
            <div className="md:flex md:justify-end w-full">
              <div className="md:w-1/3">
                <div className="flex justify-between items-center">
                  <span className="text-base font-poppins font-medium">
                    Subtotal
                  </span>
                  <span className="text-[22px] font-poppins font-medium">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button className="mt-5 block bg-black/40 w-full py-5 text-white font-poppins font-medium">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Cart;
