import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../date/Products.json";
import StoreItem from "./StoreItem";
const Frauen= () => {
  const data_Frauen = storeItems.filter((d) => d.category === "Frauen");
  return (
    <>
       <div className="produktname" style={{textAlign:"center"}}>
   <h2 style={{color:"coral"}}>Frauen Produkte</h2>
                <p style={{color:"black" }} >
                    Unser Frauen-produkt Sortiment umfasst T-shirt, Hosen,
                    Hemden, Schuhe und vieles mehr! <br /> Alle unserer Produkte
                    erhalten Sie versandkostenfrei bis vor die Haustür
                    geliefert.
                </p>
   </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {data_Frauen.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Frauen;
