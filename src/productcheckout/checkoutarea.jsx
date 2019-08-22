import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import "./product.css"
import 'react-credit-cards/es/styles-compiled.css';
import  AuthService  from "../api/authentication.js";
import { QRCode } from "react-qr-svg";
import { withRouter } from 'react-router';
import Switch from "react-switch";
import axios from 'axios';
import Leader from "./loader"
import { getCartProducts  } from '../api/repository';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";


const Auth = new AuthService();
class CheckoutArea extends Component {

    constructor(props) {
		super(props);
		this.state = {
          quantity: 1,
          subtotal : "",
          Shipping :"",
          total : "",
          number: '',
          name: '',
          expiry: '',
          cvc: '',
          focused: '',
          isChecked: true,
          domainC: "https://dollardeviceback.herokuapp.com/api", 
        //   domain: "http://localhost:4000/api", 
          domain: 'https://dollardeviceback.herokuapp.com/api', 
          isAuthenticated : false,
          select : "",
          country  : [],
          region  : [],
          checked: true ,
          wallet : "",
          BTC_USD : 0,
          Btctotal:[],
          loanPage:false,
          inBTC : "",
          checkedbtc : false,
          checkedtrans : false,
          loanData : false,
          products : [],
          currency : "",
           rate : []

        }
        
    }

    componentDidMount(){
        //  this.props.noerorrpage(this.state.noerorrpage)
         // console.log("url===--->", this.state.domain)
         this.setState({
            isAuthenticated : false,
            wallet :"1DXJDSMUTkuHFn2rADps45ExRUUn2fvVWh"
         })
         

         const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
        };
        var len = 7;
      
        
     console.log("rendom number ==----->",  parseInt((Math.random() * 9 + 1) * Math.pow(10,len-1), 10) )

        const btc_usd_url = 'https://api.cryptonator.com/api/ticker/btc-usd';
        
        const url = btc_usd_url;
            
                axios.get(url).then(res => {
                    // console.log ("res.data naira data-==-->", res.data);
                    if (!res.data.success) {
                        return
                    }
            
                    const price = Number(res.data.ticker.price);
                    const timestamp = res.data.ticker.timestamp;
            
                    const curr_pair = 'BTC_USD';
            
                    this.setState({
                        [curr_pair]: price,
                        Btctotal :res.data.ticker
                    });
                    
                    // console.log("data this.curr_pair--->", this.state.curr_pair)
            
                }).catch(err => {
            
            });

            let cart = localStorage.getItem('cart');
      if (!cart) return; 
       const allCompletedCars = [];
      getCartProducts(cart).then((products) => {
        let total = 0;
        this.setState({
            products :products
        })
            // console.log ("subtotal---==---> products",  this.state.products)
        for (var i = 0; i < products.length; i++) {
            total += products[i].discountprice * products[i].available_quantity;
        }
        this.setState({ total });
        
            //   console.log("data prod cart----0---->", this.state.total)
        });
      
         fetch(this.state.domainC+"/getip/", requestOptions )
        .then(res => res.json())
        .then(res => {
                // console.log("ress--==--=--=-===>   region ", res)
            this.setState({
                region :res.result.country ,
                select : res.result.country

            })
        }).catch(err => err);
        fetch(this.state.domain+"/getcountry/", requestOptions )
        .then(res => res.json())
        .then(res => {
                // console.log("ress--==--=--=-===> 33 getcountry", res)
                this.setState({
                  country  : res.data,
                  inBTC : this.getRates("USD", this.state.total),
                  loanPage : true,
              })
            //   console.log("data prod cart----2---->",    this.getRates("USD", this.state.total)) 
        }).catch(err => err);

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

    }
                    // USD      null, 40    null
    getRates = (fromCurr, amount) => {
        // console.log("data prod cart----3---->",   fromCurr,   amount)  
        const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

        if (fromCurr === "USD" ) {
        
            return amount / rate;
        }
        

        if (fromCurr === "BTC") {

        
            return amount * rate;
        
        }
    };


    // getRate = (curr_pair) =>{
    //    var inBTC = this.props.total *  curr_pair ;
    //    console.log("get btc total--=--->",inBTC , "total", this.props.total )
    //    this.setState({
    //        inBTC :  inBTC 
    //    })

    
    // }

  

    makePayment = (event)=>{

            event.preventDefault()
        
            this.setState({ 
                loanData:true,
            
            });
           
        
         var  data = {
            fullname :   this.firstname.value + "  "+ this.lastname.value,
            phone  :  this.phone.value, 
            address1 :   this.address1.value ,
            address2 :  this.address2.value ,
            city  :  this.city.value,
            postcode  :   this.zip.value,
            country: this.state.select,
            email : this.email.value ,
            total : this.state.total,
            product : this.state.products,
            number: this.state.number,
            name: this.state.name,
            expiry: this.state.expiry,
            cvc: this.state.cvc
            
         }
         this.setState({
          submitIftrue : true
         })
        //  console.log("body --===0--0000----->", data)
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        };
        // console.log("requestOptions",requestOptions)
           fetch(this.state.domain +"/confirmation", requestOptions)
            .then(res => res.json())
            .then((res)=>{
                // console.log("data --====---- > ",result)
                if(res.status === "true"){
                    //  this.props.callHistory(result.data._id)
                    this.props.history.replace({
                        pathname: '/events/'+ res._id,
                        // state: { detail: res}
                        state: { notice: "true" , message:"Create Event" }
                      })
                    // console.log("data --====---- > id yes",result.data._id)
                }
                //  this.props.callHistory(re)
                
            })
        
        
        //  this.timeout()
        
        
      }

      handleInputFocus = ({ target }) => {
        this.setState({
          focused: target.name,
        });
      };
      toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
        // console.log("true---000---->",this.state.isChecked)
      }
      handleInputChange = ({ target }) => {
        if (target.name === 'number') {
          this.setState({
            [target.name]: target.value.replace(/ /g, ''),
          });
        }
        else if (target.name === 'expiry') {
          this.setState({
            [target.name]: target.value.replace(/ |\//g, ''),
          });
        }
        else {
          this.setState({
            [target.name]: target.value,
          });
        }
      };

    
       
    getRates2 = (fromCurr, amount) => {
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

        if (fromCurr  === "USD" ) {
            // console.log("data --->>",this.props.rate.AUD  * amount )
            return "$"  ;
        } else if (fromCurr ===  "GBP" ) {
            // console.log("data --->>  this.props.rate.GBP", )
      
            return "£"
        }
        else if (fromCurr ===  "POUND") {
            
            return "£"
        }
        else if (fromCurr ===   "EURO") {
             
            return  "€"
        }
       else if (fromCurr === "EUR"  ) {
         

            return "€"

        
        }else{
            
            return "$" ;

        }

    }
    

      signIn = (event)=>{
        this.setState({
            loading : true
        })
         event.preventDefault()
        //  console.log("headchange", this.email.value, this.password.value )
        //  console.log("data to string")
           var email =    this.email.value.toLowerCase();
           var emailString = email.toString()
       
         const login ={
             username :  emailString ,
             password :this.password.value,
             "strategy":"local"
  
         }
         const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
             body: JSON.stringify(login),
         };
        //  console.log("requestOptions",requestOptions)
         fetch(this.state.domain+"/login", requestOptions)
         .then(res => res.json())
         .then((result)=>{
            //   console.log("res", result)
             if(result.status === "error"){
                //  console.log("res", result.code)    
                 this.setState({
                     errormessage:"Invalid Email or Password ",
                     erorrDiv : true,
                     loading : false,
                     isAuthenticated : false,
                 })
                 this.timeout()
             }else if(Auth.loggedIn){
                  Auth.setToken(result.token) ;
                 const requestOptions1 = {
                     method: 'GET',
                     headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization':   Auth.getToken() },
                     
                 };
            //   console.log("data" , requestOptions1,)
                 return fetch(this.state.domain+"/users/"+ Auth.getProfile().id, requestOptions1 )
                 .then(res => res.json())
                 .then(res => {
                    //  console.log("res getting user data", res);
                     if(res.code !== 400){
                        this. setState({
                            isAuthenticated : true,
                         })
                                
                         }
                  })
              }
           
         }).catch( (error) => {
             //  console.log("errro", error);
             //  console.log("error load", error )
          });
       
     }

     slugify(string) {
        const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
        const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------'
        const p = new RegExp(a.split('').join('|'), 'g')
    
        return string.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
    }
  
     handleChange=(event)=>{
        //  console.log("user !", event.target.value)
         this.setState({
                 model: event.target.value
         })
  
     }

     handleChangebybtc=(e)=>{
         
    
            this.setState({ 
                loanData:true,
                // checkedbtc : e,
                // checked : false,
                // checkedtrans:false,
             });
             var data={
                checkedbtc:true,
                checked : false,
                checkedtrans:false,
            }
            // console.log("data--===------ BTC")
             this.timeout(data)  
     }
    handleChangepayment=(checked)=> {
       
        this.setState({
            loanData:true,
            //  checked:checked ,
            //  checkedbtc : false,
            //  checkedtrans : false
            });
            var data={
                checkedbtc : false,
                checked:true,
                checkedtrans : false
            }
             this.timeout(data) 
      }
      handleChangetrans=(e)=>{
        // console.log("data--===------> transts")
        this.setState({
            loanData:true,
            // checkedtrans : e,
            // checked:false ,
            // checkedbtc : false
           });
           var data={
            checked:false ,
            checkedbtc : false,
            checkedtrans : true,
        }
         this.timeout(data) 
      }
     selectChange = (e)=>{
        this.setState({
            select: e.target.value
          })
        //  console.log("data--===------> contry", e.target.value)
     }


  
     timeout() {
        //  console.log("data---====--==>",data)
         setTimeout(function() {
             this.setState({
                 erorrDiv : false
             })
         //   console.log(this.state.noticeshow);
         }.bind(this), 4000);
     }
  
     isEmpty=(val)=>{
         return (val === undefined || val === null || val.length <= 0) ? true : false;
     
   
      }



      timeout(data) {
        // console.log("data---====--==> 1",data)
        setTimeout(function() {
            this.setState({
              submitIftrue : false,
              loanData:false,
              checkedbtc : data.checkedbtc,
              checked:data.checked,
              checkedtrans : data.checkedtrans

            })
        //    console.log(this.state.noticeshow);
        }.bind(this), 2300);
    }

    
   
	

render(){
//     console.log("data ------>this.props.data",this.props.data)
//  console.log("data contry--==---=>",this.props.userW. bitcoin_wallet_address) 
 const { name, number, expiry, cvc, focused } = this.state;
        return (
           <section class="checkout_area p_120">
               {this.state.loanData?
                //   <Leader/>
                 <div class="pre-loader">
		        	<div class="loader"></div>
		         </div> 
                  :
                  <div></div>
               }
               
                <div class="container">
                <div class="returning_customer">
                {
                        this.state.isAuthenticated || !this.props.isAuthenticated  ?
                        <div>
                        {/* <div class="check_title">
                            <h2>join us and enjoy great discounts on purchases Customer? <a href="/register">Click here to login</a></h2>
                        </div> */}
                            <br/>
                            <br/>
                            
                         </div>
                    :
                    <div></div>
                }
                </div>
                    {
                        this.state.loanPage  ?
                        <div class="billing_details">
                            
                        <form   onSubmit={this.makePayment}  class="row contact_form">
                            <div class="row">
                                
                                <div class="col-lg-8">
                                    
                                    <h3>Billing Information</h3>
                                        <div class="col-md-6 form-group p_star">
                                            <input type="text" class="form-control"
                                            ref={input=>this.firstname = input}
                                            onChange={this.handleChange}
                                             id="first" name="name" placeholder="First name" required/>
                                            {/* <span class="placeholder" data-placeholder="First name"></span> */}
                                        </div>
                                        <div class="col-md-6 form-group p_star">
                                            <input type="text" class="form-control" 
                                             ref={input=>this.lastname = input}
                                             onChange={this.handleChange}
                                            id="last" name="name"placeholder="Last name" required/>
                                            {/* <span class="placeholder" data-placeholder="Last name"></span> */}
                                        </div>
                                        
                                        <div class="col-md-6 form-group p_star">
                                            <input type="text" class="form-control" id="number" 
                                            ref={input=>this.phone = input}
                                            onChange={this.handleChange}
                                            name="number" placeholder="Phone number" required/>
                                            {/* <span class="placeholder" data-placeholder="Phone number"></span> */}
                                        </div>

                                        <div class="col-md-6 form-group p_star">
                                            <input type="email" class="form-control" id="number" 
                                            ref={input=>this.email = input}
                                            onChange={this.handleChange}
                                            name="email" placeholder="Email" required/>
                                            {/* <span class="placeholder" data-placeholder="Phone number"></span> */}
                                        </div>
                                        
                                        {
                                          this.state.country ?
                                                <div class="col-md-12 form-group p_star">
                                             {
                                              ! this.state.country.length > 0 ? (
                                                <div></div>
                                                 )  
                                                 :
                                             
                                                 <select onChange={this.selectChange}  class="form-control" value={this.state.select}>
                                                         <option value={this.state.region}>{this.state.region}</option>
                                                        {
                                                            this.state.country.map(data => {
                                                                return  <option key={data.alpha2Code} value={data.name}>{data.name}</option>
                                                            })
                                                        }
                                                       
                                                    
                                                </select>
    
                                                 }   
                                                    {/* <div class="nice-select country_select" tabindex="0"><span class="current">Country</span>
                                                        <ul class="list">
                                                            <li data-value="1" class="option selected">Country</li>
                                                            <li data-value="2" class="option">Country</li>
                                                            <li data-value="4" class="option">Country</li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                                    
                                             :
                                               <div>
    
                                               </div>
                                        }
                                        <div class="col-md-12 form-group p_star">
                                            <input type="text" class="form-control" id="add1"
                                             ref={input=>this.address1 = input}
                                             onChange={this.handleChange}
                                            name="add1" placeholder="Address line 01" required/>
                                            {/* <span class="placeholder" data-placeholder="Address line 01"></span> */}
                                        </div>
                                        
                                        <div class="col-md-12 form-group p_star">
                                            <input type="text" class="form-control"
                                                ref={input=>this.address2 = input}
                                                onChange={this.handleChange}
                                            id="add2" name="add2" placeholder="Address line 02" required/>
                                            {/* <span class="placeholder" data-placeholder="Address line 02"></span> */}
                                        </div>
                                        <div class="col-md-12 form-group p_star">
                                            <input type="text" class="form-control"
                                              ref={input=>this.city = input}
                                              onChange={this.handleChange}
                                            id="city" name="city" placeholder="Town/City" required/>
                                            {/* <span class="placeholder" data-placeholder="Town/City"></span> */}
                                        </div>
                                       
                                        <div class="col-md-12 form-group">
                                            <input type="text" class="form-control" id="zip" name="zip"
                                              ref={input=>this.zip = input}
                                              onChange={this.handleChange}
                                             placeholder="Postcode/ZIP" required/>
                                        </div>
                                        <div class="col-md-12 form-group panel-group" id="accordion">

                                        <h4 class="panel-title payment_item radio-lab">
												<label  for='pay2' style={{'width': '350px;'}} class="radion_btn">
													<input type='radio' id='pay2' name='payoption' value='flutterwave' required onChange={this.handleChangebybtc}  checked={this.state.checkedbtc}/>
													<span class="radio-lab"> BITCOIN USING  WALLET </span> 
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"></a>
													<div class="check"></div>
												</label>
											</h4>

                                            {
                                            
                                               !this.state.checked ?
                                                    <div>
                                                          <div class="col-md-12 form-group p_star">
                                                                <input type="text" class="form-control" id="add1"
                                                                ref={input=>this.address1 = input}
                                                                onChange={this.handleChange}
                                                                name="add1" placeholder="Address line 01" required/>
                                                                {/* <span class="placeholder" data-placeholder="Address line 01"></span> */}
                                                            </div>
                                                            
                                                            <div class="col-md-12 form-group p_star">
                                                                <input type="text" class="form-control"
                                                                    ref={input=>this.address2 = input}
                                                                    onChange={this.handleChange}
                                                                id="add2" name="add2" placeholder="Address line 02" required/>
                                                                {/* <span class="placeholder" data-placeholder="Address line 02"></span> */}
                                                            </div>
                                                            <div class="col-md-12 form-group p_star">
                                                                <input type="text" class="form-control"
                                                                ref={input=>this.city = input}
                                                                onChange={this.handleChange}
                                                                id="city" name="city" placeholder="Town/City" required/>
                                                                {/* <span class="placeholder" data-placeholder="Town/City"></span> */}
                                                            </div>
                                       
                                                    </div>    
                                              :
                                                    <div>

                                                    </div>  
                                            }
									
                                   
								</div>
                                 
                                
                                         
                                        
                                       
                                </div>
                                <div class="col-lg-4">
                                    <div class="order_box">
                                        <h2>Your Order</h2>
                                        {
                                          this.props.data ?
                                          <div>
                                             {
                                              ! this.props.data.length > 0 ? (
                                                       
                                                       <div> </div>
                                              )
                                                    :
                                                    <ul class="list">
                                                       <li><a href="#">Product <span>Total</span></a></li>
                                                          {
                                                                this.props.data.map(data => {
                                                                return  <li key={data.id}> <a  href={"/product/" + this.slugify(data.name) +  "/"+ data.id } >{data.name.slice(0, 9)} <span class="middle">x {data.available_quantity}</span> 
                                                                    <span class="last">
                                                                    {this. geticom(this.props.currency)} {this.getRates2(this.props.currency,  data.car.sub).toFixed(2) }
                                                                        {/* ${data.car.sub} */}
                                                                    
                                                                    </span>
                                                                </a>
                                                                </li>
                                                                })
                                                            }
                                                            
                                                    </ul> 
                                                       
                                                    
                                                    }
                                            </div>
                                                :
                                           <div>
    
                                           </div>
                                         }
                                       
                                        <ul class="list list_2">
                                            <li><a >Subtotal 
                                            {/* {this.props.total} */}
                                            {
                                                 this.props.total ? 
                                                 <span>
                                                         {this. geticom(this.props.currency)} {this.getRates2(this.props.currency,  this.props.total).toFixed(2) }
                                                 </span>
                                                 :
                                                 <p></p>        
                                            }
                                        
                                            </a></li>
                                            <li><a href="#">Shipping <span>Flat rate: $00.00</span></a></li>
                                            <li><a href="#">Total <span> $
                                                {
                                                    this.props.total 
                                                }</span></a></li>
                                        </ul>

{/*                                   
                                    <div class="payment_item">
                                        <div class="radion_btn">
                                        <Switch onChange={this.handleChangepayment} checked={this.state.checked} /> 
                                        {
                                       ! this.state.checked ?
                                           <b className="checkout-costom"> USED BTC</b>
                                           :
                                           <b className="checkout-costom"> USED CARD PAYMENT</b>
                                        }
                                        </div>
                                       
                                    </div> */}
                                   
                                  
                                 

                                            <div class="">
                                            <div class="payment_item active">
        							<div class="radion_btn">
										{/* <input type="radio" id="f-option6" name="selector"/> */}
                                                <label for="f-option6">Pay with card</label>
                                                <img src="img/product/single-product/card.jpg" alt=""/>
                                                {/* <div class="check"></div> */}
                                            </div>
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                           
                                            {/* <h4> Amount In Btc :{this.state.inBTC}</h4> */}
                                                
                                      <div className="QRCode-active-body">
                                              
                                         {/* <p class="body-p text-center">Input card data</p> */}
                                         <div className="div-card-chectout">
                                         <Cards
                                                number={number}
                                                name={name}
                                                expiry={expiry}
                                                cvc={cvc}
                                                focused={focused}
                                                required
                                              
                                            />
                                            <form   onSubmit={this.makePayment}>
                                            <div className="card-body-payment-sub">
                                            <div class="form-group mb-3">
                                                    <div class="input-group input-group-alternative">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                                        </div>
                                                        <input 
                                                        className="form-control"
                                                            type="number"
                                                            name="number"
                                                            placeholder="Card Number"
                                                            onKeyUp={this.handleInputChange}
                                                            onFocus={this.handleInputFocus}
                                                            ref={input=>this.number = input}
                                                            required
                                                            
                                                        />
                                                        
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <div class="input-group input-group-alternative">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                                type="tel"
                                                                name="expiry"
                                                                placeholder="Valid Thru"
                                                                onKeyUp={this.handleInputChange}
                                                                onFocus={this.handleInputFocus}
                                                                ref={input=>this.expiry = input}
                                                                required
                                                            /> 
                                                            {/* <input class="form-control"
                                                        ref={input=>this.password = input}  onChange={this.handleChange}
                                                        placeholder="Password" type="password"/> */}
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <div class="input-group input-group-alternative">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                        </div>
                                                        <input
                                                        className="form-control"
                                                        type="tel"
                                                        name="cvc"
                                                        placeholder="CVC"
                                                        ref={input=>this.cvc = input}
                                                        onKeyUp={this.handleInputChange}
                                                        onFocus={this.handleInputFocus}
                                                        required
                                                        />
                                                
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <div class="input-group input-group-alternative">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="name"
                                                            placeholder="Name"
                                                            onKeyUp={this.handleInputChange}
                                                            onFocus={this.handleInputFocus}
                                                            // pattern="[a-z]{1,15}"
                                                            ref={input=>this.name = input}
                                                            // pattern="[a-z]{1,15}"
                                                            required
                                                        />
                                                        
                                                    </div>
                                                    </div>
                                                    
                                                    {/* <div class="text-center">
                                                {
                                                    this.state. submitIftrue ?
                                                    <div class="spinner"></div>
                                                    
                                                    :
                                                    <button  class="btn btn-primary my-4">Enter </button>
                                                }
                                                    
                                                    
                                            </div> */}
                                                

                                                <div class="creat_account">
                                            
                                                  
                                                    <input type="checkbox" id="f-option4" name="selector" required/>
                                                    <label for="f-option4">I’ve read and accept the </label>
                                                    <a href="#">terms &amp; conditions*</a>
                                    
                                                </div>

                                            </div>
                                            {
                                            this.state. submitIftrue ?
                                            // <div class="spinner"></div>
                                            <div></div>
                                            
                                            :
                                            <button class="main_btn" href="#" style={{"width":"100%"}}>proceed to payments</button>
                                        }
                                            
                                            
                                           </form>
                                         </div>
                                                  
                                                                
                                           

                                                </div>
                                                
                                            </div>
                                        
                     
                                        {/* <div class="payment_item active">
                                            <div class="radion_btn">
                                                <input type="radio" id="f-option6" name="selector"/>
                                                <label for="f-option6">Paypal </label>
                                                <img src="img/product/single-product/card.jpg" alt=""/>
                                                <input type="checkbox" id="f-option4" 
    
                                             checked={this.state.isChecked}
                                             onChange={this.toggleChange}
                                            name="selector" />
                                            </div>
                                         
                                        </div> */}
    
                                      
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                       
                        :
                        <div class="pre-loader">
                        <div class="loader"></div>
                  
                        {/* <div class="check_title">
                            <h2>Returning Customer? <a href="/register">Click here to login</a></h2>
                        </div> */}
                            {/* <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p> */}
                            {/* <form onSubmit={this.signIn} class="row contact_form" >
                                        <div class="col-md-6 form-group p_star">
                                            <input type="text" class="form-control" id="name"
                                            ref={input=>this.email = input}
                                            onChange={this.handleChange}
                                            name="name" placeholder=" Email"/>
                                          
                                        </div>
                                        <div class="col-md-6 form-group p_star">
                                            <input type="password" class="form-control" id="password"
                                            ref={input=>this.password = input}  onChange={this.handleChange}
                                            name="password" placeholder="Password"/>
                                    
                                        </div>
                                        <div class="col-md-12 form-group">
                                            {
                                                this.state. loading ?
                                                 <div class="spinner"></div>
                                                :
                                                <button  class="btn submit_btn">Login</button>
                                            }
                                        
                                            <a class="lost_pass" href="#">Lost your password?</a>
                                        </div>
                              </form> */}
                         </div>
                    }
                    
                    {/* <div class="cupon_area">
                        <div class="check_title">
                            <h2>Have a coupon? <a href="#">Click here to enter your code</a></h2>
                        </div>
                        <input type="text" placeholder="Enter coupon code"/>
                        <a class="tp_btn" href="#">Apply Coupon</a>
                    </div> */}
                  
                    
                </div>
        </section>  
      );
    }
}

export default CheckoutArea;
