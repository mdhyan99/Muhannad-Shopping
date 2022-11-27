import React from "react";
import { Stack, Button } from "react-bootstrap";
import { WarenKorpContext } from "../context/ShopKorpContext";
import { useContext } from "react";
import storeItems from "../date/Products.json";

const KorpProduct = ({ id, quantity }) => {
    const { removeFromCart } = useContext (WarenKorpContext );
    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;
    return (
        <Stack
            direction="horizontal"
            gap={1}
            className="korp d-flex align-items-center"
        >
            <img
                src={item.picture}
                alt="cart-img"
                style={{ width: "115px", height: "75px", objectFit: "cover" }}
            />

            <div className="me-auto">
                <div>
                    {item.text}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: "0.55rem" }}
                        >
                            x{quantity}
                        </span>
                    )}
                </div>

                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {item.price} €
                </div>
            </div>
            <div>{(item.price * quantity)} €</div>

            <Button
                style={{ fontSize: "10px" }}
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
};

export default KorpProduct;
