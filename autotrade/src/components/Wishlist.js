import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <div>
      <Header/>
      {/* <!--breadcrumbs area start--> */}
    <div class="breadcrumbs_area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            {/* <!-- <li><a href="index.html">home</a></li> --> */}
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--breadcrumbs area end-->

    <!--wishlist area start --> */}
    <div class="wishlist_area mt-30">
        <div class="container">
            <form action="#">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc wishlist">
                            <div class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Delete</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_quantity">Stock Status</th>
                                            <th class="product_total">Add To Cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product_remove"><Link to="/">X</Link></td>
                                            <td class="product_thumb"><Link to="/"><img src="assets/img/s-product/product.jpg" alt=""/></Link></td>
                                            <td class="product_name"><Link to="/">Handbag fringilla</Link></td>
                                            <td class="product-price">£65.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><Link to="/">Add To Cart</Link></td>
                                        </tr>

                                        <tr>
                                            <td class="product_remove"><Link to="/">X</Link></td>
                                            <td class="product_thumb"><Link to="/"><img src="assets/img/s-product/product2.jpg" alt=""/></Link></td>
                                            <td class="product_name"><Link to="/">Handbags justo</Link></td>
                                            <td class="product-price">£90.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><Link to="/">Add To Cart</Link></td>
                                        </tr>
                                        

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </form>
            <div class="row">
                <div class="col-12">
                    <div class="wishlist_share">
                        <h4>Share on:</h4>
                        <ul>
                            <li><Link to="/"><i class="fa fa-rss"></i></Link></li>
                            <li><Link to="/"><i class="fa fa-vimeo"></i></Link></li>
                            <li><Link to="/"><i class="fa fa-tumblr"></i></Link></li>
                            <li><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
                            <li><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    {/* <!--wishlist area end --> */}
      <Footer/>
    </div>
  )
}

export default Wishlist
