import React from "react";
import { useContext } from "react";
import { useParams } from 'react-router-dom' 
import { WarenKorpContext } from "../context/ShopKorpContext";
import StoreItem from "./StoreItem";
import { Col, Row } from "react-bootstrap";


import "../App.css";


const Product = () =>{
    

  const {data,setSelectedPhoto}= useContext(WarenKorpContext);
  //  const item =product.find((i) => i.id === id);

 const {id}=useParams()
 console.log(data);
 const product= data.find((i) => i.id === +id)
    return (
        <Row md={1} xs={2} lg={2}  key={product.id}>
    
                    <Col  >
                        <StoreItem  {...product}/>
       
                    </Col>
                    <Col  >
                    <img onClick={setSelectedPhoto()} src={product.picture1} style={{width :"200px",height :"200px",margin:"20px"}} alt={product.picture1} />
                       <img  src={product.picture2} style={{width :"200px",height :"200px",margin:"20px"}} alt={product.picture1}/>
                       <img src={product.picture3} style={{width :"200px",height :"200px",margin:"20px"}} alt={product.picture1} />
       
                    </Col>
                      
                
           
    </Row>
    );
}
export default Product