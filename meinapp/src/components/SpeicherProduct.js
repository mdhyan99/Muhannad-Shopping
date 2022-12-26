import React, { useContext } from 'react';
import {  Stack } from "react-bootstrap";
import { WarenKorpContext } from "../context/ShopKorpContext";

import KorpProduct from "./KorpPruduct";
import product from "../date/Products.json";

export default function SpeicherProduct() {
    const {  korbProducts } =useContext(WarenKorpContext);
  return (
    <div>
     <Stack gap={3}>
                    {korbProducts.map((item) => (
                        <KorpProduct key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold spanText">
                        Total:
                        {korbProducts.reduce((total, cartItem) => {
                            const item = product.find(
                                (i) => i.id === cartItem.id
                            );
                            return (
                                total + (item?.price || 0) * cartItem.quantity
                            );
                        }, 0)}
                        €
                    </div>
                </Stack>
    </div>
  );
}
