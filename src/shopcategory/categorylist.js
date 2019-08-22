import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import './category.css';
class List extends Component {
   
    // handleClick=(e)=>{
    //     e.preventDefault();
    //   this.props.clickCart(this.props.data)
    // }
    
	constructor(props) {
		super(props);
		this.state = {
            quantity: 1,
            icon: ""
		}
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

    addToCart = () => {
        
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.data.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.data.available_quantity < qty) {
			cart[id] = this.props.data.available_quantity; 
		} else {
			cart[id] = qty
        }
        // this.props.clickCart()
    
        localStorage.setItem('cart', JSON.stringify(cart));
        this.props.checkChart(this.props.data)
    }


    
    getRates = (fromCurr, amount) => {
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
        // const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

         
        

        if (fromCurr  === "USD" ) {
            // console.log("data --->>",this.props.rate.AUD  * amount )
            return "$"  ;
        } else if (fromCurr ===  "GBP" ) {
            // console.log("data --->>  this.props.rate.GBP", )
      
            return "£"
        }
        else if (fromCurr ===  "POUND") {
            // console.log("data --->>  this.props.rate.GBP", )
           
            
            return "£"
        }
        else if (fromCurr ===   "EURO") {
            // console.log("data --->>  this.props.rate.GBP", )
            
             
            return  "€"
        }
       else if (fromCurr === "EUR"  ) {
         
            
           
            return "€"

        
        }else{
            
                
             

            return "$" ;

        }

    }
    
    
    
  render() {
    // var divStyle = {
    //     color: 'white',
    //     background: "red",
    //     height:"auto",
    //     WebkitTransition: 'all', // note the capital 'W' here
    //     "margin-top":"110px"
        
    //   };
    // console.log("prorp list", this.props.currency, this.props.rate.AUD)
    return (


               
                <div class="col-lg-3 col-md-4 col-sm-6" key={this.props.data.id}>
                    {/* {this.getRates (this.props.currency,  900) } */}
                {
                    this.props.data ?
                          <div class="f_p_item">
                          <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } >
                                <div class="f_p_img shop-category-image">
                                    
                                    <img class="img-fluid" src={this.props.data.imageData[0]} alt="" />
                                    <div class="p_icon icon-posion-relative">
                                    <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } ><i class="fas fa-binoculars"></i></a>
                                        <a style={{"cursor":"pointer"}}><i class="lnr lnr-cart"  onClick={this.addToCart}></i></a>
                                    </div>
                                    
                                </div>
                                <h4> {this.props.data .name}</h4> {this.props. data.count} 
                                {
                                    this.props.data.discountprice ?
                                    <h5> {this. geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.data.discountprice).toFixed(2) }</h5>
                                    :
                                    <h5> {this.props.data.discountprice}</h5>
                                }
                         </a> 
                      </div>
                      :
                      <div class="f_p_item">
                      <div class="f_p_img shop-category-image">
                          <img class="img-fluid" src={this.props.data.imageData[0]} alt=""/>
                          <div class="p_icon icon-posion-relative">
                          <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } ><i class="fas fa-binoculars"></i></a>
                              <a style={{"cursor":"pointer"}}><i class="lnr lnr-cart"  onClick={this.addToCart}></i></a>
                          </div>
                      </div>
                      <a href="#"><h4> {this.props.data .name}</h4> {this.props. data.count}  </a>
                      <h5> ${this. geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.data.discountprice).toFixed(2) }</h5>
                  </div>
           
         
                }
                     
               </div>

                

                
        
            // <div class="col-lg-3 col-md-4 col-sm-6" key={this.props.data.id}>
              
            //         <div class="f_p_item">
            //             <div class="f_p_img image-style">
            //                 <img class="img-fluid" src={this.props.data.imageData[0]} alt=""/>
            //                 <div class="p_icon icon-posion-relative">
            //                 <Link   to={'/product/'+ this.slugify(this.props.data.name) + "/"+ this.props.data.id}><i class="fas fa-binoculars"></i></Link>
            //                     <a style={{"cursor":"pointer"}}><i class="lnr lnr-cart"  onClick={this.addToCart}></i></a>
            //                 </div>
            //             </div>
            //             <a href="#"><h4> {this.props.data .name}</h4> {this.props. data.count} {this.slugify(this.props. data.name)} </a>
            //             <h5> ${this.props.data.price.toFixed(2)}</h5>
            //         </div>
             
            //  </div>                           
       

    )

}





}

export default List;