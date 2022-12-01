import React, { useContext } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { WarenKorpContext } from "../context/ShopKorpContext";

import KorpProduct from "./KorpPruduct";
import storeItems from "../date/Products.json";

const Warenkorp = ({ isOpen }) => {
    const { closeCart, korbProducts } =useContext(WarenKorpContext);
    return (
        

        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "red" }}>
                    Warenkorp
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {korbProducts.map((item) => (
                        <KorpProduct key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold spanText">
                        Total:
                        {korbProducts.reduce((total, cartItem) => {
                            const item = storeItems.find(
                                (i) => i.id === cartItem.id
                            );
                            return (
                                total + (item?.price || 0) * cartItem.quantity
                            );
                        }, 0)}
                        €
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Warenkorp;
