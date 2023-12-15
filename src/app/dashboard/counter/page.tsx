

import { CartCounter } from "@/app/shopping-cart";

export const metadata={
    title: "Shopping Cart",
    description: "Counter page",
    };

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Products in Cart</span>
        <CartCounter value={20}/>

    </div>
  );
}