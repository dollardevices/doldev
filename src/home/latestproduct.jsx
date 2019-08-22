import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Slider from "react-slick";
import List from "./list"
import  Lastes from "./lastes"


class  LatestProduct extends Component {

      
	constructor(props) {
		super(props);
		this.state = {
            quantity: 1,
            products : [],
            phones  :[],
            domain: 'https://dollardeviceback.herokuapp.com/api', 
            // domain: 'http://localhost:4000/api', 
		}
    }

    componentDidMount(){
        this.setState({
         pageLoading : true,
         ifChart : false
       })
       const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
       };
     

       fetch(this.state.domain+"/getlatest/", requestOptions )
       .then(res => res.json())
       .then(res => {
   
         this.setState({
           products : res.data
         })
        //  console.log("error state this.state.products==----===----> ", this.state.products)
       }).catch(err => err);

       
    }

    checkChart=(data)=>{
        this.props.checkChart(data)
    }
  render (){
  return (
    <react-fragment> 
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
                                this.state.products.map(data => {
                                    return (

                                        < Lastes  currency={this.props.currency} rate={this.props.rate}
                                          data={data}  checkChart={this.checkChart}  />
                                        
                                    )
                                })
                             }              
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </react-fragment>
  );
 }
}

export default LatestProduct;
