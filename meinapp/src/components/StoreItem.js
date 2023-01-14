// hier zeigt uns alle daten für Product
//  wir schreiben  <StoreItem  /> in Frauen.js und Herren.js und Kinder.js innerhalb map


import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BiDislike, BiLike } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

import { WarenKorpContext } from "../context/ShopKorpContext";
import { useContext } from "react";
import "../App.css";


const StoreItem = ({ id, text, price, picture1,picture2,picture3,activePicture }) => {
    // kommt { id, text, price, picture } von Frauen.js und ... als props 
    const {
        getProductMenge,
        erhohenWarenKorbMenge,
        verringernWarenKorbMenge,
        entfernVonWarenkorb,
        handelLike,
        like,
        unlike,
        setUnLike,
       
        selectedPhoto,
    } = useContext(WarenKorpContext);

    const quantity = getProductMenge(id);

    return (
        <Link className="link" to={"/product/" + id}> 
 {/* wenn wir auf dem Product drücken   es führt un zu einer Seite Zeigt uns nur Pruduct */}
             <Card className="h-100">
            
                 <Card.Img
                    variant="top"
                    src={activePicture}
                    style={{ height: "400px", objectFit: "cover" }}
                /> 

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="spanText ">{text}</span>
                        <span className="spanText ms-2 text-muted">
                            {price}€
                        </span>
                    </Card.Title>

                    <div className="mt-auto">
                        {/* wenn gibt kein Product in warenkorb zeigt uns nur button in warenkorb */}
                        {quantity === 0 ? (
                            <Button
                                className="  w-100"
                                onClick={(event) => {
                                    event.preventDefault();
                                    erhohenWarenKorbMenge(id);
                                }}
                            >
                                in den Warenkorb
                            </Button>
                        ) : (
                            // wenn gibt in warenkorb  producte zeigt uns - {quantity} in Warenkorb  +  und button von warenkorb entfern
                            <div
                                className="d-flex align-items-center flex-column"
                                style={{ gap: "0.5rem" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ gap: "0.4rem" }}
                                >
                                    <Button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            verringernWarenKorbMenge(id);
                                        }}
                                    >
                                        -
                                    </Button>

                                    <div>
                                        <span className="spanText">
                                            {quantity} in Warenkorb
                                        </span>
                                    </div>
                                    <Button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            erhohenWarenKorbMenge(id);
                                        }}
                                    >
                                        +
                                    </Button>
                                </div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        entfernVonWarenkorb(id);
                                    }}
                                >
                                    <RiDeleteBin5Line />
                                </Button>
                            </div>
                        )}
                    </div>

                     {/* button für like und unlike und herzicon */}
                    <div className="likeIcon">
                        <div>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    handelLike(id);
                                }}
                            >
                                <BiLike className="likeIcon1" />
                                {like}{" "}
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setUnLike(unlike + 1);
                                }}
                            >
                                <BiDislike className="likeIcon2" />
                                {unlike}{" "}
                            </button>
                            <button     onClick={(event) => {
                                    event.preventDefault();
                                    ;
                                }}>
                            
                            </button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default StoreItem;
