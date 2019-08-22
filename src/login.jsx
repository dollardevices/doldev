import React, { Component } from 'react';
import Banner from './login/banner';
import FormArea from './login/formarea';
import {
  
    Redirect
  } from 'react-router-dom'
  

class Login extends Component {


    constructor(props){
        super(props)
        this.state ={
          domain: "https://shopend.herokuapp.com/api", 
          isAuthenticated : false,
          country : [],
          region : [],
          products : [],
          total : "",
          noerorrpage :true
        }
    }  
  
    componentDidMount(){
     this.props.noerorrpage(this.state.noerorrpage)
       // console.log("url===--->", this.state.domain)
       
      }

      setGlobalwallet=(data)=>{
        this.props.setGlobalwallet(data)
        this.props.history.push("/checkout")
        console.log("data--=-0--0000==---> register", data)
      }

      // rederet = () =>{
      //   this.props.history.replace('/product-checkout');
      // }
    render(){
        return (
            <react-fragment>
                <Banner />
                <FormArea  setGlobalwallet={this.setGlobalwallet} rederet={this.rederet}/>
            </react-fragment>
        );


    }
        



}

export default Login;
