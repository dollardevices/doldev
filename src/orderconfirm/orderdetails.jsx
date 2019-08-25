import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

    
class  OrderDetails extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            domain: "https://dollardeviceback.herokuapp.com/api", 
            // domain: "http://localhost:4000/api", 
            id : "", 
            products:[],
            Qistrue : false,

        }
        // this.data1()
      }

      componentDidMount(){

        
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
    // console.log("data ---0000====---->",  this.props.data )
    return (
          
            <section class="order_details p_120">
                {
                    this.props.data ?
                        <div class="container">
                        <h3 class="title_confirmation">Thank you. Your order has been received.</h3>
                        <div class="row order_d_inner">
                            <div class="col-lg-4">
                                <div class="details_item">
                                    <h4>Order Info</h4>
                                    <ul class="list">
                                        <li><a ><span>Order number</span> : {this.props.data.number}</a></li>
                                        <li><a ><span>Name</span> : {this.props.data.fullname}</a></li>
                                        <li><a ><span>Date</span> : {this.props.data.created_at}</a></li>
                                        <li><a ><span>Total</span> : USD {this.props.data.total}</a></li>
                                        <li><a ><span>Payment method</span> : {this.props.data.payment}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="details_item">
                                  <h4>Shipping Address</h4>
                                    <ul class="list">
                                        <li><a><span>Street</span> : {this.props.data.address1} </a></li>
                                        <li><a ><span>City</span> : {this.props.data.city} </a></li>
                                        <li><a><span>Country</span> :  {this.props.data.country}</a></li>
                                        <li><a ><span>Postcode </span> : {this.props.data.postcode}</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div class="col-lg-4">
                                <div class="details_item">
                                    <h4>Shipping Address</h4>
                                    <ul class="list">
                                        <li><a href="#"><span>Street</span> : 56/8</a></li>
                                        <li><a href="#"><span>City</span> : Los Angeles</a></li>
                                        <li><a href="#"><span>Country</span> : United States</a></li>
                                        <li><a href="#"><span>Postcode </span> : 36952</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div class="order_details_table">
                            <h2>Order Details</h2>
                            {
                                this.props.data.product ?
                                <div class="table-responsive">
                                {
                                   this.props.data.product.length > 0 ? (
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                        
                                                    {
                                                        this.props.data.product.map(data => {
                                                        return  (
                                                           <tr>
                                                                <td>
                                                                    <p>{data.name}</p>
                                                                </td>
                                                                <td>
                                                                    <h5>x {data.available_quantity}</h5>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                    {this. geticom(this.props.currency)} {this.getRates(this.props.currency,   data.available_quantity * data.discountprice).toFixed(2) }
                                                                      
                                                                         
                                                                 </p>
                                                                </td>
                                                            </tr>
                                                        )
                                                        })
                                                    }
                                                    
                                                       
                                                           
                                                        
                                           
                                            
                                           
                                        </tbody>
                                    </table>
                                   )
                                    :
                                    <div></div>
                                 }
                                </div>
                                :
                                <div></div>
                            }
                           
                        </div>
                        <br/>
                        <a class="gray_btn" href="/shop" style={{float:"right"}}>Continue Shopping</a>
                    </div>
                :
                <div></div>


                }
                        
            </section>
       
    );

  }
}

export default OrderDetails;
