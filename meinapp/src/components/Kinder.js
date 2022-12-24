import React from "react";
import { Col, Row } from "react-bootstrap";
import product from "../date/Products.json";
import StoreItem from "./StoreItem";
const Kinder= () => {
  const data_Kinder = product.filter((d) => d.category === "Kinder");
    // zeigt uns mit filter  nur Producte die mit category Kinder
  return (
    <>
       <div className="produktname" style={{textAlign:"center"}}>
   <h2 style={{color:"coral"}}>Kinder Produkte</h2>
                <p style={{color:"black"}} className="paragraph">
                    Unser Kinder-produkt Sortiment umfasst T-shirt, Hosen,
                    Hemden, Schuhe und vieles mehr! <br /> Alle unserer Produkte
                    erhalten Sie versandkostenfrei bis vor die Haustür
                    geliefert.
                </p>
   </div>
   {/* hier zegt uns die Produckt was von StoreItem kommt */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {data_Kinder.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
                {/* hier  item als props genuzt  */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Kinder;
