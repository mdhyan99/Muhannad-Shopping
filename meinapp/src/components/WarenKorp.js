import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useContext } from "react";
import { WarenKorpContext } from "../context/ShopKorpContext";
import KorpProduct from "./KorpPruduct";
import storeItems from "../date/Products.json";

const Warenkorp = ({ isOpen }) => {
    const { closeCart, cartItems } = useContext(WarenKorpContext);
    return (
        // isOpen wenn warenkorb ist nicht leer dann kann mann sehen
        // closCart wenn warenkorb ist  leer dann kann mann nicht sehen

        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "red" }}>
                    Warenkorp
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <KorpProduct key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold spanText">
                        Total:
                        {cartItems.reduce((total, cartItem) => {
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
