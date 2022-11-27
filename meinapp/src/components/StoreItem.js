import React from "react";
import { Button, Card } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { WarenKorpContext } from "../context/ShopKorpContext";
import { useContext } from "react";

const StoreItem = ({ id, text, price, picture }) => {
    const {
        getProductMenge,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } =useContext (WarenKorpContext);

    const quantity = getProductMenge(id);

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={picture}
                style={{ height: "400px", objectFit: "cover" }}
            />

            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="spanText ">{text}</span>
                    <span className="spanText ms-2 text-muted">{price}€</span>

                    <div className=" spanText icons" style={{ color: "gray" }}>
                        <FiHeart />
                    </div>
                </Card.Title>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button
                            className="  w-100"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            in den Warenkorp
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: "0.5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: "0.4rem" }}
                            >
                                <Button
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    -
                                </Button>

                                <div>
                                    <span className="spanText">
                                        {quantity} in Warenkorp
                                    </span>
                                </div>
                                <Button
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeFromCart(id)}
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;
