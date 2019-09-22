import React, { Component } from 'react';
// import Header from './statics/header';
import Banner from './shopcategory/banner';
import CatProductArea from './shopcategory/catproductarea';


class  ShopCategory extends Component{

  constructor(props){
    super(props)
    this.state ={
        noerorrpage :true,
        domain: "https://shopend007.herokuapp.com/api", 
        // domain: "http://localhost:4000/api",
        // products:[]
    }
  }
      
  componentDidMount(){
   
    this.props.noerorrpage(this.state.noerorrpage)
  }


  checkChart=(data)=>{
    this.props.checkChart(data)
  }
 
render(){
      return (
            <div>
           
              <Banner/>
               <CatProductArea domain = {this.state.domain}   checkChart={this.checkChart}/>
              {/* <Footer/> */}
           </div>
      );
   }
}

export default ShopCategory;
