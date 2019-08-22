
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  class  Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ifChart :true
        }
      }


      logout = () =>{
          // console.log("judge love")
          this.props.logout()
     }
      
   
    render(){
      // console.log("this.props.cart--===--->",  this.props.cart, this.props.ifChart )
    

  return (
 
			<header className="header_area">
                <div className="top_menu row m0">
                    <div className="container">
                        <div className="float-left">
                            {/* <a href="mailto:support@colorlib.com">support@colorlib.com</a> */}
                          <Link to={`/`}>Welcome to Catalouge</Link>
                            {/* <a href="#">Welcome to Catalouge</a> */}
                        </div>
                        <div className="float-right">
                            <ul className="header_social header_social-costom">
                                <li><a href="https://web.facebook.com/dollardevices/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                 <li><a href="https://twitter.com/devices_dollar" target="_blank"><i className="fa fa-twitter" ></i></a></li>
                               {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                 <li><a href="#"><i className="fa fa-behance"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                           
                            <a className="navbar-brand logo_h" href="/">
                              <img src="https://res.cloudinary.com/easywaya/image/upload/v1563704392/logo-do2_sk7ssx.png" alt="" width="50"/>
                              {/* <img src="img/bitcoin.png" alt="bitcoin logo" class="paylogo float-right"></img> */}
                              </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    {/* <li className="nav-item active">
                                      <a href="/" className="nav-link">Home</a></li>
                                    <li className="nav-item submenu dropdown"> */}

                                    <li className="nav-item ">
                                      <a href="/" className="nav-link">Home</a></li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="/shop" className="nav-link dropdown-toggle" role="button">Shop</a>
                                        {/* <a href="/shop" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a> */}
                                        {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                              <Link to={`/category`} className="nav-link">Shop Category</Link></li>
                                            <li className="nav-item">
                                              <Link to={`/product-details`} className="nav-link">Product Details</Link>
                                            </li>
                                            <li className="nav-item">
                                              <Link to={`/product-checkout`} className="nav-link">Product Checkout</Link>
                                            </li>
                                            <li className="nav-item">
                                              <Link to={`/shopping-cart`} className="nav-link">Shopping Cart</Link>
                                            </li>
                                            <li className="nav-item">
                                              <Link to={`/confirm-order`} className="nav-link">Confirmation</Link>
                                            </li>
                                        </ul> */}
                                        </li>
                                        {/* <li className="nav-item submenu dropdown">
                                            <Link to={`/blog`} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                            
                                            <ul className="dropdown-menu">
                                          <li className="nav-item"><Link to={`/blog`} className="nav-link">Blog</Link></li>
                                          <li className="nav-item"><Link to={`/blog-details`} className="nav-link">Blog Details</Link></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu">
                                          <li className="nav-item"><Link to={`/login`} className="nav-link">Login</Link></li>
                                          <li className="nav-item"><Link to={`/tracking`} className="nav-link">Tracking</Link></li>
                                          <li className="nav-item"><Link to={`/elements`} className="nav-link">Elements</Link></li>
                                            </ul>
                                       </li> */}
                                  <li className="nav-item"><a href="/contact-us" className="nav-link">Contact</a></li>
                                  <li className="nav-item"><a href="/about-us" className="nav-link">About</a></li>
                                </ul>
                                    
                                <ul className="nav navbar-nav navbar-right">
                                { this.props.cart?
                                  <li className="nav-item">
                                        <a href="/shopping-cart" className="nav-link"><i className="lnr lnr lnr-cart"></i>
                                              {
                                                  this.props.ifChart  === this.state.ifChart ||  this.props.cart.length !== 0 ?
                                                  
                                                    <b style={{"color":"black"}}>{ this.props.cart.length} </b>

                                                  :
                                                  <i></i>
                                              }
                                        </a>
                                   </li>
                                  :
                                  <li className="nav-item"><i className="lnr lnr lnr-cart"></i> </li>
                                  }
                                  {
                                    this.props.isAuthenticated?
                                    <li className="nav-item">

                                       <a href="#" onClick={this.logout} className="search"><i class="fas fa-sign-out-alt"></i></a>
                                    </li>
                                    :
                                    <li></li>
                                  }
                                     
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
  
   );
  }
}

export default Header;
