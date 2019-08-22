import React, { Component } from 'react';
import "./exmple.css"
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
// import  AuthService  from "../api/authentication.js";
import List from "./book"
import { getCartProducts  } from '../api/repository';
// const Auth = new AuthService();
class Exmple extends Component {

    constructor(props){
        super(props)
        this.state ={
            noerorrpage :true,
            products:[]
        }
      }
    

    
  componentDidMount(){
   
    this.props.noerorrpage(this.state.noerorrpage)
    // getCartProducts((products) => {
    //  this.setState({
    //      products :products
    //  })
    // })
  }

//   handleAddToCart=(book)=> {
//     console.log("exmple--->data")
//     this.props.checkChart()
//     // console.log( "hjbgfkjn", book)
//     // const cartItem = this.state.cart.find(x => x.id === book.id);
//     // !cartItem && book.inStock > 0 && this.setState({cart: [...this.state.cart, book]})
//  }
 checkChart=(data)=>{
   this.props.checkChart(data)
 }

  
  render() {
      console.log("data -----> text", this.state.products)
      const stylelogo ={
        width:"10px"
      }
    return (
      <div className="pagemple">
                  <section class="feature_product_area latest_product_area">

                      <div class="main_box">
                          <div class="container">
                              <div class="feature_product_inner">
                                  <div class="main_title">
                                      <h2>Latest Products</h2>
                                      {/* <p>Who are in extremely love with eco friendly system.</p> */}
                                  </div>
                                  <div class="latest_product_inner row">
                                  {
                                        this.props.items.map(data => {
                                            return (

                                              <List    data={data}  checkChart={this.checkChart}  />
                                              
                                             
                                            )
                                        })
                                    }

                                   
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
      
             
          
         
      </div>
    );
  }
}

export default Exmple  ;



