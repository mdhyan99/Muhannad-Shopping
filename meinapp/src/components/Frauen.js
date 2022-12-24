import React from "react";
import { Col, Row } from "react-bootstrap";

import product from "../date/Products.json";
import StoreItem from "./StoreItem";


const Frauen= () => {
  const data_Frauen = product.filter((d) => d.category === "Frauen"); 
  // zeigt uns mit filter  nur Producte die mit category Frauen
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

{/* hier zegt uns die Produckt was von StoreItem kommt */}
      <Row md={3} xs={2} lg={4} className="g-3">
        {data_Frauen.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
            {/* hier  item als props genuzt  */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Frauen;
