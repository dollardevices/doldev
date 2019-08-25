import React, { Component } from 'react';
import Banner from './productcheckout/banner';
import CheckoutArea from './productcheckout/checkoutarea';
import axios from 'axios';
import { getCartProducts  } from './api/repository';
import  AuthService  from "./api/authentication.js";
import Switch from "react-switch";

const Auth = new AuthService();
  class ProductCheckout extends Component {

    constructor(props){
      super(props)
      this.state ={
        domain: "https://dollardeviceback.herokuapp.com/api", 
        isAuthenticated : false,
        country : [],
        region : [],
        products : [],
        total : "",
        noerorrpage :true,
        checked: false
      }
  }  

    
    componentWillMount() {
      this.props.noerorrpage(this.state.noerorrpage)
      if (localStorage.cart === undefined) {
        // localStorage.user = "username";
        this.props.history.replace({
            pathname: '/home/'
            // state: { detail: res}
            // state: { notice: "true" , message:"Create Event" }
          })

        
    }
     
      if(Auth.loggedIn()){
        if (!this.setState.isAuthenticated ){
          this.setState({
            pageLoading : false
          })
          this.setState({
            isAuthenticated : true,
            pageLoading : true,
            errorAuth : false,
            // platform_admin : res.is_platform_admin,
       
      
          })
        }
    }else{
      //  console.log("check if error state is call")
      this.setState({
        isAuthenticated : false,
        errorAuth : true,
      })
      // console.log("error state", this.state.errorAuth)
      
    }
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
      };


       
      let cart = localStorage.getItem('cart');
      if (!cart) return; 
       const allCompletedCars = [];
      getCartProducts(cart).then((products) => {
        let total = 0;
            products.forEach( (car, index) => {
              // console.log ("subtotal---==---> 1 car", car)
              // console.log ("subtotal---==---> 3 ",    car.price * car.qty )
                var cars = {
                  sub :  car.discountprice * car.available_quantity
                }
                 let completeCars = {
                                 ...car,
                                 car: {
                                 ...cars
                             }
                     }

            // console.log ("subtotal---==---> 2", completeCars)
            allCompletedCars.push(completeCars);
                                this.setState({
                                  products: allCompletedCars
                                });
            })
            // console.log ("subtotal---==---> products",  this.state.products)
        for (var i = 0; i < products.length; i++) {
            total += products[i].discountprice * products[i].available_quantity;
        }
        this.setState({ total });
              // this.setState({ products, total });
              // console.log("data prod cart----0---->", products)
        });
        var sub_array = [];
        var super_array = [];
        for (var i = 1; i <= 3; i++) {
          sub_array.push(i);
          super_array.push(sub_array.concat());
          // console.log("push--=====-----==----->", super_array)
      } 


     
  }


  callHistory=(data)=>{
    // console.log("------>/confirm-order")
    this.props.history.replace({
      // pathname: '/proof/'+ data,
      
        pathname: '/confirm-order/'+ data,
        // state: { detail: res}
        state: { notice: "true" , message:"Create Event" }
     
      // state: { detail: res}
      // state: { notice: "true" , message:"Create Event" }
    })
    // this.props.history.push('/confirm-order')
  }

 render(){   
  //  console.log("---===----> this.props.userW", this.props.userW.bitcoin_wallet_address)
  return (
        <div>
           <Banner/>
           <CheckoutArea userW={this.props.userW}  isAuthenticated={this.state.isAuthenticated } data={this.state.products} total={this.state.total} 
            callHistory={this.callHistory} country={this.state.country  } region={this.state.region  } />
        </div>
                
 
  );
 }
}



export default ProductCheckout;
