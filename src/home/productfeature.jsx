import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Slider from "react-slick";
import List from "./list"
import Product from "./product"

class ProductFeature extends Component {
   
    // handleClick=(e)=>{
    //     e.preventDefault();
    //   this.props.clickCart(this.props.data)
    // }


	constructor(props) {
		super(props);
		this.state = {
            quantity: 1,
            products : [],
            phones  :[],
            // domain: 'http://localhost:4000/api', 
            domain: 'https://shopend007.herokuapp.com/api', 
            currency : "",
            rate : [],

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
     

       fetch(this.state.domain+"/getfelure/", requestOptions )
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
     

    
    
    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        } 
        return (
      
               <section className="feature_product_area" style={{  background: "#0dda8b"}}>
                    <div className="main_box">
                        <div className="container">
                            <div className="row hot_product_inner">
                                <div className="col-lg-6">
                                    <div className="hot_p_item">
                                        <img className="img-fluid" src="https://res.cloudinary.com/easywaya/image/upload/v1566729113/step-16_ep4y7s.jpg" alt="" />
                                        <div className="product_text">
                                            {/* <h4>Hot Deals of <br/>this Month</h4> */}
                                            {/* <a href="#">Shop Now</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hot_p_item">
                                        <img className="img-fluid" src="https://res.cloudinary.com/easywaya/image/upload/v1566729113/step-14_bjfsbt.jpg" alt="" />
                                        <div className="product_text">
                                            {/* <h4>Hot Deals of <br/>this Month</h4> */}
                                            {/* <a href="#">Shop Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feature_product_inner">
                                <div className="main_title">
                                    <h2> PRODUCTS</h2>
                                    {/* <p>Who are in extremely love with eco.</p> */}
                                </div>
                                <div style={{marginLeft:"55px"}}>
                                    <Slider {...settings}>
                                        {
                                                this.state.products.map(data => {
                                                    return (

                                                    <Product currency={this.props.currency} rate={this.props.rate}   data={data}  checkChart={this.checkChart}  />
                                                    
                                                    
                                                    )
                                                })
                                        }
                                    </Slider>

                                </div>
                              
                               
                            </div>
                        </div>
                    </div>
                </section>
         
          ); 
    }

}

export default ProductFeature;