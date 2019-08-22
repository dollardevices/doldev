import React, { Component } from 'react';
import Banner from './shoppingcart/banner';
import CartArea from './shoppingcart/cartarea';


// class  ShoppingCart extends Component {

    
class ShoppingCart extends Component {

    constructor(props){
        super(props)
        this.state ={
            noerorrpage :true,
            // stock : initialState.stock,
            id : ""
        }
      }

  
       
  componentDidMount(){
   
    this.props.noerorrpage(this.state.noerorrpage)
  }

  removeChart=()=>{
      this.props.removeChart()
  }


    render(){
    //  console.log(  "data   cart------>" ,this.props.cart)
        return (
            <div>
                 <Banner />

                <CartArea  removeChart={this.removeChart}  items={this.props.cart}/>
           
            </div>
             
        );
    }
   
}


export default ShoppingCart   ;
