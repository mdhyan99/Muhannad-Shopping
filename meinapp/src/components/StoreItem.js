import React from "react";
import { Button, Card } from "react-bootstrap";
// import { useShoppingCart } from "../context/WarenKorpContext";
import { FiHeart } from "react-icons/fi";

const StoreItem = ({ id, text, price, picture }) => {
    // const {
    //     getItemQuantity,
    //     increaseCartQuantity,
    //     decreaseCartQuantity,
    //     removeFromCart,
    // } = useShoppingCart();

     const quantity =1;

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
                                   
                                >
                                    -
                                </Button>

                                <div>
                                    <span className="spanText">
                                         in Warenkorp
                                    </span>
                                </div>
                                {/* add ein Product  */}
                                <Button
                                    
                                >
                                    +
                                </Button>
                            </div>
                            {/* remove alle Products  */}
                            <Button
                                variant="danger"
                                size="sm"
                                
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
    