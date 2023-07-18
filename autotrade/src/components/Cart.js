import React,{useContext, useState} from 'react'
import Footer from './Footer'
import Header from './Header';
import Table from 'react-bootstrap/Table';
import { AuthContext } from './authContext';
import { useHistory  } from 'react-router-dom';
import axios from "axios";

const Cart = () => {
  const {cart,addToCart,setCart,removeFromCart,totalPrice,totalCount} = useContext(AuthContext);
  const [success,setSuccess]=useState(false);
  const history=useHistory();
  let orderArray=[];
  for (const index in cart) {
    orderArray.push({product:cart[index].Name,quantity:cart[index].count})
  }
  console.log(cart,orderArray)
  const handleOrder=async()=>{
      try {
        const response = await axios.post("http://localhost:5000/api/orders", {items: orderArray,
        totalPrice: totalPrice,
      });
        console.log("Upload successful:", response.data);
        setSuccess(true);
        setCart([]);
        setTimeout(()=>{
          setSuccess(false);
        },3000)
        setTimeout(()=>{
          history.push('/');
        },3000)
      } catch (error) {
        console.error("Upload failed:", error);
      }
    
  }
  return (
    <div>
    {success &&   <div className="alertMessage"> <div className="alert alert-success" role="alert" style={{width:'50%'}}>Thank you for your order! We have received your Order, </div></div>}
      <Header/>
      {/* <!--breadcrumbs area start--> */}
    <div class="breadcrumbs_area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content" style={{paddingTop:'10px'}}>
                        <ul>
                            <li class="text-uppercase h3"  style={{fontWeight: 'bold'}}>Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--breadcrumbs area end-->

    <!--shopping cart area start --> */}
    <div class="shopping_cart_area mt-32">
        <div class="container">
                <div class="row">
                    <div class="col-12">
                    <Table striped bordered hover>
                     <thead>
                      <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>price</th>
                        <th>Action</th>
                      </tr>
                        </thead>
                        <tbody>
                     {
                      cart.map((item,index)=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td><img src={item?.Image} style={{width:'40px',height:'40px',borderRadius:'4px'}}  alt={item?.name}/></td>
                        <td>{item?.Name}</td>
                        <td>{item?.totalPrice}</td>
                        <td className='cart-css'>
                          <button className='btn' onClick={()=>addToCart({ Id:item.Id, Name:item.Name,Image:item.Image, Price:item.Price})}><i className='fa fa-plus'></i></button>
                          <input type="number" value={item?.count} placeholder="e.g 2" name="cart" className="form-control" readOnly="true" min={0} style={{width:'100px'}}/>
                          <button className='btn' onClick={() =>removeFromCart({Id:item.Id})}><i className='fa fa-minus'></i></button></td>
                      </tr>
                      ))
                     }
                     </tbody>
                  </Table>
                    </div>
                </div>
                {/* <!--coupon code area start--> */}
                <div class="coupon_area">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 float-right">
                            <div class="coupon_code right" style={{display:'flex',flexDirection:'column',alignItems: 'end'}}>
                                <h3>Total Item</h3>
                                <h3>{totalCount && totalCount}</h3>
                                <h3>Cart Totals</h3>
                                 <h5>{totalPrice && totalPrice}</h5>

                                 <button class="btn btn-primary" onClick={handleOrder} style={{marginBottom:'40px'}}>Order Item</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--coupon code area end--> */}
        </div>
    </div>
    {/* <!--shopping cart area end --> */}
      <Footer/>
    </div>
  )
}

export default Cart
