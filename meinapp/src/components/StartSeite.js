import React from "react";
import storeItems from "../date/Products.json";
import { WarenKorpContext } from "../context/ShopKorpContext";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";

// import  Components
import Frauen from "./Frauen";
import Herren from "./Herren";
import Kinder from "./Kinder";
import Footer from "./Footer";
import StoreItem from "./StoreItem";

function StartSeite() {
    const { searchInput } = useContext(WarenKorpContext);
    return searchInput === "" ? (
        <>
       
            <Herren />
            <Frauen />
            <Kinder />
            <Footer />
        </>
    ) : (
        <Row md={2} xs={1} lg={4} className="g-3">
            {storeItems
                .filter((el) =>
                    el.text.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((item) => {
                    return (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                            {/* <img src={item.picture} />
            <p>{item.text}</p>
            <p>{item.category}</p> */}
                        </Col>
                    );
                })}
        </Row>
    );
}

export default StartSeite;
