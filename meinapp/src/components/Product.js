import React from "react";
import { useContext } from "react";
import { useParams } from 'react-router-dom' 
import { WarenKorpContext } from "../context/ShopKorpContext";



export default function Product() {
  const { data } = useContext(WarenKorpContext);
  //  const item =product.find((i) => i.id === id);

 const {id}=useParams()
 console.log(data);
 const product= data.find((i) => i.id === +id)
    return (
        <div style={{backgroundColor:"red"}}>
            
       {
       product.text
       }
                 
           
        </div>
    );
}
