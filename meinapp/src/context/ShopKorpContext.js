import { createContext, useEffect, useState } from "react";
import Warenkorp from "../components/WarenKorb";
import product from "../date/Products.json";

export const WarenKorpContext = createContext();

const initialCartItems = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [];

const ShopKorpContext = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [like, setLike] = useState(0);
    const [unlike, setUnLike] = useState(0);
    const [data, setData] = useState(product);
    const [selectedPhoto,setSelectedPhoto] =useState()

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
    const closeCart = () => {
        setIsOpen(false);
    };
    // für Pruductmenge in warenkorp
    const getProductMenge = (id) => {
        return korbProducts.find((item) => item.id === id)?.quantity || 0;
        // wenn item.id === id  return quantity wenn nicht return 0
    };
    // für  (in den Warenkorp) Button und + button
    const erhohenWarenKorbMenge = (id) => {
        setKorbProducts((currItems) => {
            // curItems ist ein Array
            if (currItems.find((item) => item.id === id) == null) {
                // wenn Product nicht in warenkorb  füg hin und mach quantity 1
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        // wenn Product in warenkorb  füg hin und mach quantity + 1
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };
    // für - button
    const verringernWarenKorbMenge = (id) => {
        setKorbProducts((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                // wenn Product nicht in warenkorb  return die andere Product
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        // wenn Product in warenkorb  delete die Product  und mach quantity -1

                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };
    // für delete from Warenkorp
    const entfernVonWarenkorb = (id) => {
        // delete die product gleiche id und return die andere Producte  die andere id hat
        setKorbProducts((currItems) =>
            currItems.filter((item) => item.id !== id)
        );
    };
    //für SearchInput
    const handleChange = (elem) => {
        setSearchInput(elem.target.value);
    };

    const handelLike = (id) => {
        // console.log(id.target);
        const updateData = data.map((el) => {
            if (el.id === id) {
                el.like = el.like + 1;
            }
            return el;
        });
        setData(updateData);
    };
    return (
        <WarenKorpContext.Provider
            value={{
                getProductMenge,
                erhohenWarenKorbMenge,
                verringernWarenKorbMenge,
                entfernVonWarenkorb,
                openCart,
                closeCart,
                cartQuantity,
                korbProducts,
                searchInput,
                handleChange,
                handelLike,
                like,
                unlike,
                setUnLike,
                data,
                selectedPhoto,
                setSelectedPhoto,
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
