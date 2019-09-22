import React, { Component } from 'react';
import Banner from './orderconfirm/banner';
import OrderDetails from './orderconfirm/orderdetails';

import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

    
class  OrderConfirm extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            domain: "https://shopend007.herokuapp.com/api", 
            // domain: "http://localhost:4000/api", 
            id : "", 
            products:[],
            Qistrue : false,
            noerorrpage:true,
            currency : "",
            rate : [],

        }
        // this.data1()
      }

      componentDidMount(){
        if (localStorage.cart === undefined) {
            // localStorage.user = "username";
            this.props.history.replace({
                pathname: '/home/'
                // state: { detail: res}
                // state: { notice: "true" , message:"Create Event" }
              })

            
        }
        this.props.noerorrpage(this.state.noerorrpage)
        const { match: { params } } = this.props;
        localStorage.removeItem('cart'); 
        this.props.checklook()
        // console.log("params.userId",params.id, "params all", params)
               
        const requestOptions = {
            method: 'GET', 
            headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },
        };
        this.setState({
         loading:true
        })
        // console.log("public users param", params.id, this.props.location.state, this.props.location.state.message)
        fetch(this.state.domain+"/orderpay/"+params.id, requestOptions)
        .then(res => res.json())
        .then(res => {
          this.setState({
            products : res
          })
        //   console.log("error state this.state.items==----===----> ", res)
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


render(){
    return (
        <react-fragment>
            <Banner />
            <OrderDetails  currency={this.state.currency} rate={this.state.rate} data={this.state.products}/>
        </react-fragment>
    )
}
}

export default OrderConfirm;
