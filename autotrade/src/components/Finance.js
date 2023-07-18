import React, { useState, useEffect,useContext} from "react";
import Footer from "./Footer";
import Header from "./Header";
import { AddAutoParts } from "./AddAutoParts";
import axios from "axios";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";
import IslamiBank from '../images/islami.png';
import Allied from '../images/Allied.png';
import ubl from '../images/ubl.jpg';
import AddFinance from '../components/AddFinance';
const Finance = () => {
    const [showFinance, setFinance] = useState(false);
    const [bankName, setBankName] = useState(null);
     
    const handleFinance = (bName) => {
        setFinance(!showFinance);
        setBankName(bName)
    }
  return (
    <>
      <Header />
       {showFinance ? <AddFinance bankName={bankName} onClick={()=>handleFinance('')}/> :(
         <div className="container" style={{marginBottom:'50px',paddingTop:'50px'}}>
         <div className="row">
           <div className="col-12 col-md-7 m-auto">
           <div className="row">
           <div className="col-12 col-md-4">
           <div class="card" onClick={()=>handleFinance('Islami Bank')}>
           <img src={IslamiBank} alt="Image description" />
            <span class="count">5</span>
           </div>
           </div>
           <div className="col-12 col-md-4">
           <div class="card" onClick={()=>handleFinance('Allied Bank')}>
           <img src={Allied} alt="Image description" />
            <span class="count">15</span>
           </div>
           </div>
           <div className="col-12 col-md-4">
           <div class="card" onClick={()=>handleFinance('UBL Bank')}>
           <img src={ubl} alt="Image description" />
            <span class="count">4</span>
           </div>
           </div>
         </div>
           </div>
         </div>
      </div>
       ) } 
      
      
      <Footer />
    </>
  );
};

export default Finance;
