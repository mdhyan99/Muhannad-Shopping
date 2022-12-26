import React from "react";
import { Col, Row } from "react-bootstrap";
import produkt from "../date/Products.json";
import StoreItem from "./StoreItem";


const Herren= () => {
  const data_herren = produkt.filter((d) => d.category === "Herren");
  // zeigt uns mit filter  nur Producte die mit category Herren
  return (
    <>

   <div className="produktname" style={{textAlign:"center"}}>
   <h2  style={{color:"coral"}}>Herren Produkte</h2>
   <p style={{color:"black"}} >
                    Unser Herren-produkt Sortiment umfasst T-shirt, Hosen,
                    Hemden, Schuhe und vieles mehr! <br /> Alle unserer Produkte
                    erhalten Sie versandb kostenfrei bis vor die Haustür
                    geliefert.
                </p>
   </div>

{/* hier zegt uns die Produckt was von StoreItem kommt */}
      <Row md={3} xs={1} lg={4} className="g-3">
        {data_herren.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
                {/* hier  item als props genuzt  */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Herren;
