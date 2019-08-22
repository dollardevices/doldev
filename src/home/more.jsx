import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Slider from "react-slick";
import List from "./list"
import System from "./system"
// import "./more.css"
import "./more.css"
class More extends Component {
   
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
            system : [],
            // domain: 'http://localhost:4000/api',   
            domain: 'https://dollardeviceback.herokuapp.com/api', 
		}
    }


    componentDidMount(){
        this.setState({
         pageLoading : true,
         ifChart : false
         // items : initialState.stock
         
       })
       const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
       };
       // var email = "admin@peppement.com"
        fetch(this.state.domain+"/getphone/", requestOptions )
       .then(res => res.json())
       .then(res => {
   
         this.setState({
           phones : res.data
         })
        //  console.log("error state this.state.phoen==----===----> ", this.state.phones)
       }).catch(err => err);

       fetch(this.state.domain+"/getsystem/", requestOptions )
       .then(res => res.json())
       .then(res => {
   
         this.setState({
           system : res.data
         })
        //  console.log("error state this.state.phoen==----===----> ", this.state.phones)
       }).catch(err => err);

       
       
    }
    
    checkChart=(data)=>{
        this.props.checkChart(data)
      }
     

  render(){
  
  
    
    
    return (
            <div className="timer_area home-more-body" style={{  background: "#0dda8b"}}>
         <section class=" home-more-body">
              
              <div class="main_box">
                  <div class="container">
                      <div class="feature_product_inner" style={{"paddingTop":"35px"}}>
                          <div class="main_title" >
                              <h2>PHONE</h2>
                              {/* <p>Who are in extremely love with eco friendly system.</p> */}
                          </div>
                          <div class="latest_product_inner row">
                              
                            {
                                        this.state. phones.map(data => {
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
      
          <section class="home-more-body">
              
              <div class="main_box">
                  <div class="container">
                      <div class="feature_product_inner" style={{"paddingTop":"35px"}}>
                          <div class="main_title" >
                              <h2>LAPTOP</h2>
                              {/* <p>Who are in extremely love with eco friendly system.</p> */}
                          </div>
                          <div class="latest_product_inner row">
                                 
                            {
                                        this.state.system.map(data => {
                                            return (

                                              <System    data={data}  checkChart={this.checkChart}  />
                                              
                                             
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

export default More;



const Completionist = () => <span>You are good to go!</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} :{hours}:{minutes}:{seconds}</span>;
  }
};