import React, { Component } from 'react';
import Cartdata from './cartdata';
import { getCartProducts  } from '../api/repository';
import fetch from 'node-fetch';


class CartArea extends Component {

    constructor(props){
        super(props)
        this.state ={
            domain: "https://shopend007.herokuapp.com/api", 
            value: 'select',
            id : "", 
            count:[],
            products:"",
            cost : 50,
            sumSub : "",
            products: [],
            total: 0,
            loanPage:false,
            currency : "",
           rate : [],
            
        }
        // this.data1()
     
      }

      componentWillMount() {
		// let cart = localStorage.getItem('cart');
        // if (!cart) return; 

        let cart = localStorage.getItem('cart');
		if (!cart) return; 
		getCartProducts(cart).then((products) => {
			let total = 0;
			for (var i = 0; i < products.length; i++) {
				total += products[i].discountprice * products[i].available_quantity;
			}
            this.setState({ products, total });
            // console.log("data ----0---->", products)
	    });
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
        };
     
        fetch('https://geoip-db.com/json', requestOptions)
        .then(res => res.json())
        .then(json => this.setState({
            data: json.IPv4,
            loanPage : true,
        }))

        fetch(this.state.domain+"/getip2/", requestOptions )
        .then(res => res.json())
        .then(res => {
                //  console.log("ress--==--=--=-===>   region ", res.result.currency)
            this.setState({
                currency : res.result.currency, 
 
            })
        }).catch(err => err);
 
        fetch(this.state.domain+'/getmoney', requestOptions)
        .then(res => res.json())
        .then((res)=>{
            // console.log("data -------> setGlobalpayer--->2", res)
            
               this.setState({
                  rate:res.data.rates
               })
        //    this.props.history.push("/product-checkout")
         }).catch( (error) => {
        })  

        // fetch('https://api.exchangeratesapi.io/latest', requestOptions)
        // .then(res => res.json())
        // .then(json => this.setState({
        //     data: json.IPv4,
        //     loanPage : true,
        // }))
        
        
       
    }

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})


  
    
    removeFromCart = (product) => {
		let products = this.state.products.filter((item) => item.id !== product.id);
		let cart = JSON.parse(localStorage.getItem('cart'));
		delete cart[product.id.toString()];
		localStorage.setItem('cart', JSON.stringify(cart));
        let total = this.state.total - (product.available_quantity * product.discountprice)
        this.props.removeChart() 
        this.setState({products, total});

        
        
	}


 
    getRates = (fromCurr, amount) => {
        // console.log("data prod cart----3---->",   fromCurr,   amount)  
        // const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

         
        

        if (fromCurr  === "USD" ) {
            // console.log("data --->>",this.props.rate.AUD  * amount )
            
           
           
            return amount ;
        } else if (fromCurr ===  "GBP" ) {
            // console.log("data --->>  this.props.rate.GBP", )
           
         
              
       
            return amount *  this.props.rate.GBP;
        }
        else if (fromCurr ===  "POUND") {
            // console.log("data --->>  this.props.rate.GBP", )
           
            
            return amount *  this.props.rate.GBP;
        }
        else if (fromCurr ===   "EURO") {
            // console.log("data --->>  this.props.rate.GBP", )
      
             
            return amount *  this.props.rate.GBP; 
        }
       else if (fromCurr === "EUR"  ) {
         
            
           
            return amount *  0.89;

        
        }else{
            
               
             

            return amount ;

        }

    }


    geticom = (fromCurr) => {
        // console.log("data prod cart----3---->",   fromCurr,   amount)  
        // const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

        if (fromCurr  === "USD" ) {
            // console.log("data --->>",this.props.rate.AUD  * amount )
            return "$"  ;
        } else if (fromCurr ===  "GBP" ) {
            // console.log("data --->>  this.props.rate.GBP", )
      
            return "£"
        }
        else if (fromCurr ===  "POUND") {
            // console.log("data --->>  this.props.rate.GBP", )
           
            
            return "£"
        }
        else if (fromCurr ===   "EURO") {
            // console.log("data --->>  this.props.rate.GBP", )
            
             
            return  "€"
        }
       else if (fromCurr === "EUR"  ) {
         

            return "€"

        
        }else{
            
            return "$" ;

        }

    }
    
subtotal = (data)=>{
//    console.log("data---==---->", data )
   let total  = this.state.total +  data
//    console.log("data---==---->", total )
//    this.setState ({
//        total :  total
//    })
  this.timeout(total)

}

timeout(data) {
    setTimeout(function() {
        // console.log(data)
        let cart = localStorage.getItem('cart');
		// if (!cart) return; 
        getCartProducts(cart).then((products) => {
            let total = 0;
            // for (var i = 0; i < products.length; i++) {
            //     total += products[i].discountprice * products[i].available_quantity;
            // }
            // this.setState({ products, total });
            for (var i = 0; i < products.length; i++) {
                total += products[i].discountprice * products[i].available_quantity;
            }
            this.setState({ total });
        });

    //   console.log("this total -===--->",  this.state.total)
        
    }.bind(this), 2000);
}


 
getRates = (fromCurr, amount) => {
    // console.log("data prod cart----3---->",   fromCurr,   amount)  
    // const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

     
    

    if (fromCurr  === "USD" ) {
        // console.log("data --->>",this.props.rate.AUD  * amount )
        
       
       
        return amount ;
    } else if (fromCurr ===  "GBP" ) {
        // console.log("data --->>  this.props.rate.GBP", )
       
     
          
   
        return amount *  this.props.rate.GBP;
    }
    else if (fromCurr ===  "POUND") {
        // console.log("data --->>  this.props.rate.GBP", )
       
        
        return amount *  this.props.rate.GBP;
    }
    else if (fromCurr ===   "EURO") {
        // console.log("data --->>  this.props.rate.GBP", )
  
         
        return amount *  this.props.rate.GBP; 
    }
   else if (fromCurr === "EUR"  ) {
     
        
       
        return amount *  0.89;

    
    }else{
        
           
         

        return amount ;

    }

}



geticom = (fromCurr) => {
    // console.log("data prod cart----3---->",   fromCurr,   amount)  
    // const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

    if (fromCurr  === "USD" ) {
        // console.log("data --->>",this.props.rate.AUD  * amount )
        return "$"  ;
    } else if (fromCurr ===  "GBP" ) {
        // console.log("data --->>  this.props.rate.GBP", )
  
        return "£"
    }
    else if (fromCurr ===  "POUND") {
        // console.log("data --->>  this.props.rate.GBP", )
       
        
        return "£"
    }
    else if (fromCurr ===   "EURO") {
        // console.log("data --->>  this.props.rate.GBP", )
        
         
        return  "€"
    }
   else if (fromCurr === "EUR"  ) {
     

        return "€"

    
    }else{
        
        return "$" ;

    }

}


    
    
    


 render(){
        // var sum = 1;
        //  let total = 0;
        // var sum = null;  
        // this.props.items.forEach(function(value, index, arry){
        //     sum += value.discountprice;
        // });
      
        // console.log("API URI ADDRESS",	sum, this.state.data )

    
    return (
       
            <section class="cart_area">
                <div class="container">
                    <div class="cart_inner">
                        <div class="table-responsive">
                         {
                               this.state.products?
                              <div>
                              
                              {
                                ! this.state.products.length > 0 ? (
                                    <div className="cartarea-no">
                                         <i class="fas fa-shopping-cart cartarea-font"></i>
                                       <h4> No Cart</h4>    
                                          
                                    </div>
                                    )
                                :
                                <table class="table">
                                <thead>
                                   <tr>
                                       <th scope="col">Product</th>
                                       <th scope="col">Price</th>
                                       <th scope="col">Quantity</th>
                                       <th scope="col">Total</th>
                                   </tr>
                                           
                                    </thead>
   
                                       {
                                           !this.state.products.length > 0 ? (
                                            <div></div>
                                               )
                                           :
                                           <tbody>
                                       
                                           {
                                                   this.state.products.map(data => {

                                                    return(

                                                        <Cartdata currency={this.state.currency} rate={this.state.rate} data={data} remove={this.removeFromCart}  subtotal={this.subtotal}/>
                                                     
                                                    )
                                               })

                                           }         
                                               
                                               
                                               {/* <tr class="bottom_button">
                                                   <td>
                                                       <a class="gray_btn" href="#">Update Cart</a>
                                                   </td>
                                                   <td>
   
                                                   </td>
                                                   <td>
   
                                                   </td>
                                                   <td>
                                                       <div class="cupon_text">
                                                           <input type="text" placeholder="Coupon Code"/>
                                                           <a class="main_btn" href="#">Apply</a>
                                                           <a class="gray_btn" href="#">Close Coupon</a>
                                                       </div>
                                                   </td>
                                               </tr> */}
                                               <tr>
                                                   <td>
   
                                                   </td>
                                                   <td>
   
                                                   </td>
                                                   <td>
                                                       <h5>Subtotal</h5>
                                                   </td>
                                                   <td style={{width:"200px"}}> 
                                                       <h5>
                                                       {/* {this.state.total.toFixed(2) } */}
                                                       {this.geticom(this.props.currency)} {this.getRates(this.props.currency,  this.state.total).toFixed(2) }
                                                       </h5>
                                                   </td>
                                               </tr>
                                               
                                               <tr class="out_button_area">
                                                   <td>
   
                                                   </td>
                                                   <td>
   
                                                   </td>
                                                   <td>
   
                                                   </td>
                                                   <td>
                                                       
                                                   </td>
                                               </tr>
                                           </tbody>
                                       }
                                       
                                   </table> 
                                   
                                }  
                                <div class="checkout_btn_inner" style={{float:"right"}}>
                                                           <a class="gray_btn" href="/shop">Continue Shopping</a>
                               {
                                     this.state.products.length > 0 ? (
                                            <a class="main_btn" href="/checkout">Proceed to checkout</a>
                                        )
                                        :
                                        <div></div>
                                }
                                                         
                               </div> 
                              </div>  
                              :
                              <div>
                                   <div class="pre-loader">
                                       <div class="loader"></div>
                                    </div> 
                              </div>
                         }  
                        {/* {
                          this.props.items ?
                          <table class="table">
                             <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                                        
                                 </thead>

                                    {
                                        !this.props.items.length > 0 ? (
                                         <div></div>
                                            )
                                        :
                                        <tbody>
                                    
                                        {
                                                this.props.items.map(data => {
                                                    <tr>
                                                        <td>
                                                            <div class="media">
                                                                <div class="d-flex">
                                                                    <img src="img/product/single-product/cart-1.jpg" alt=""/>
                                                                </div>
                                                                <div class="media-body">
                                                                    <p>Minimalistic shop for multipurpose use</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5>$360.00</h5>
                                                        </td>
                                                        <td>
                                                            <div class="product_count">
                                                                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
                                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5>$720.00</h5>
                                                        </td>
                                                    </tr>
                                    
                                            })
                                        }         
                                            
                                            
                                            <tr class="bottom_button">
                                                <td>
                                                    <a class="gray_btn" href="#">Update Cart</a>
                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div class="cupon_text">
                                                        <input type="text" placeholder="Coupon Code"/>
                                                        <a class="main_btn" href="#">Apply</a>
                                                        <a class="gray_btn" href="#">Close Coupon</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <h5>Subtotal</h5>
                                                </td>
                                                <td>
                                                    <h5>$2160.00</h5>
                                                </td>
                                            </tr>
                                            <tr class="shipping_area">
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <h5>Shipping</h5>
                                                </td>
                                                <td>
                                                    <div class="shipping_box">
                                                        <ul class="list">
                                                            <li><a href="#">Flat Rate: $5.00</a></li>
                                                            <li><a href="#">Free Shipping</a></li>
                                                            <li><a href="#">Flat Rate: $10.00</a></li>
                                                            <li class="active"><a href="#">Local Delivery: $2.00</a></li>
                                                        </ul>
                                                        <h6>Calculate Shipping  <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                        <select class="shipping_select" style={{ display: "none" }}>
                                                            <option value="1">Bangladesh</option>
                                                            <option value="2">India</option>
                                                            <option value="4">Pakistan</option>
                                                        </select>
                                                        <div class="nice-select shipping_select" tabindex="0"><span class="current">Bangladesh</span>
                                                            <ul class="list">
                                                                <li data-value="1" class="option selected">Bangladesh</li>
                                                                <li data-value="2" class="option">India</li>
                                                                <li data-value="4" class="option">Pakistan</li>
                                                            </ul>
                                                        </div>
                                                        <select class="shipping_select" style={{ display: "none" }}>
                                                            <option value="1">Select a State</option>
                                                            <option value="2">Select a State</option>
                                                            <option value="4">Select a State</option>
                                                        </select>
                                                        <div class="nice-select shipping_select" tabindex="0"><span class="current">Select a State</span>
                                                            <ul class="list">
                                                                <li data-value="1" class="option selected">Select a State</li>
                                                                <li data-value="2" class="option">Select a State</li>
                                                                <li data-value="4" class="option">Select a State</li>
                                                            </ul>
                                                        </div>
                                                        <input type="text" placeholder="Postcode/Zipcode"/>
                                                        <a class="gray_btn" href="#">Update Details</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="out_button_area">
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div class="checkout_btn_inner">
                                                        <a class="gray_btn" href="#">Continue Shopping</a>
                                                        <a class="main_btn" href="#">Proceed to checkout</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    }
                                    
                                </table> 
                             :
                             <div>  </div>      
                          } */}
                           
                        </div>
                    </div>
                </div>
            </section>

    );
  } 
}

export default CartArea;
