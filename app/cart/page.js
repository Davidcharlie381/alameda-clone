// "use client"
import CartItem from "@/components/utils/CartItem";
import image from "../../public/assets/linen-tunic.jpg";

const Cart = () => {
  const isEmpty = false;

  return (
    <main className="container mt-4">
      <section>
        <h2 className="text-[24px] leading-6 font-medium font-robot mb-6">
          Shopping Cart
        </h2>
        {!isEmpty ? (
          <>
            <CartItem />
            <CartItem />
            <div className="md:flex md:justify-end w-full">
              <div className="md:w-1/3">
              <div className="flex justify-between items-center">
                <span className="text-base font-poppins font-medium">Subtotal</span>
                <span className="text-[22px] font-poppins font-medium">$250.00</span>
              </div>
              <button className="mt-5 block bg-black/40 w-full py-5 text-white font-poppins font-medium">
                Checkout
              </button>
            </div>
            </div>
            
          </>
        ) : (
          <>
            <p className="text-base font-poppins leading-[22px] text-light">
              You have nothing in your shopping cart
            </p>
            <button className="mt-5 bg-black/40 px-8 py-5 text-white font-poppins font-medium">
              Continue Shopping
            </button>
          </>
        )}
      </section>
    </main>
  );
};

export default Cart;
