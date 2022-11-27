import { createContext,  useEffect, useState } from "react";
import Warenkorp from "../components/WarenKorp";



 export const WarenKorpContext = createContext();
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

  const ShopKorpContext=({children})=>{

  const [isOpen, setIsOpen] = useState(false);
  const [searchInput,setSearchInput] =useState("")

  const [korbProducts, setKorbProducts] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(korbProducts));
  }, [korbProducts]);

  const cartQuantity = korbProducts.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart= () => {
    setIsOpen(false);
  };
  const getProductMenge = (id) => {
    return korbProducts.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setKorbProducts((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setKorbProducts((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setKorbProducts((currItems) => currItems.filter((item) => item.id !== id));
  };
   const handleChange = (elem) => {
     setSearchInput(elem.target.value);
 };
  return (
    <WarenKorpContext.Provider
      value={{
        getProductMenge,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        korbProducts,
        searchInput,
        handleChange,
      }}
    >
      {children}
      <Warenkorp isOpen={isOpen} />
    </WarenKorpContext.Provider>
  );
};

export default ShopKorpContext;
// export const useShoppingCart = () => {
//   return useContext(WarenKorpContext);
// };
