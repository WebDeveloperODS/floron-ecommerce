'use client';
import { addToCart } from "@/store/slices/cart-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function SlideShow(){
      const dispatch = useDispatch<AppDispatch>();
      const items = useSelector((state: RootState) => state.cart.items)
      return(
            <div className="flex pt-40">
                  <div className="flex flex-col items-center justify-center gap-8 w-300 h-auto p-8">
                        <h1>
                              Item 1
                        </h1>
                        <h3>100 PKR</h3>
                        <button onClick={() => dispatch(addToCart({id:'1',title: 'item 1', price: '100', quantity: 1}))}>Add To Cart</button>
                        <h1>
                              Item 2
                        </h1>
                        <h3>200 PKR</h3>
                        <button onClick={() => dispatch(addToCart({id:'2',title: 'item 2', price: '200', quantity: 1}))}>Add To Cart</button>
                  </div>
                  <div>
                        {
                              items.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center justify-center gap-4 border p-4 m-4">
                                          <h2>{item.title}</h2>   
                                          <h4>Price: {item.price}</h4>
                                          <h4>Quantity: {item.quantity}</h4>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}