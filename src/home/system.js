import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

class  System extends Component {
   
    // handleClick=(e)=>{
    //     e.preventDefault();
    //   this.props.clickCart(this.props.data)
    // }
    
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
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
    
    
  render() {
    // var divStyle = {
    //     color: 'white',
    //     background: "red",
    //     height:"auto",
    //     WebkitTransition: 'all', // note the capital 'W' here
    //     "margin-top":"110px"
        
    //   };
    return (

    //     <div class="col-lg-3 col-md-4 col-sm-6">
    //     <div class="f_p_item">
    //         <div class="f_p_img">
    //             <img class="img-fluid" src="img/product/feature-product/f-p-1.jpg" alt=""/>
    //             <div class="p_icon">
    //                 <a href="#"><i class="lnr lnr-heart"></i></a>
    //                 <a href="#"><i class="lnr lnr-cart"></i></a>
    //             </div>
    //         </div>
    //         <a href="#"><h4>Long Sleeve TShirt</h4></a>
    //         <h5>$150.00</h5>
    //     </div>
    // </div>
        
            <div class="col-lg-3 col-md-4 col-sm-6" key={this.props.data.id}>
              {
                  this.props.data ?
                        <div class="f_p_item">
                        <div class="f_p_img image-system-home">
                            <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } >
                                    <img class="img-fluid" src={this.props.data.imageData[1]} alt=""/>
                            </a>
                            <div class="p_icon icon-posion-relative">
                            {/* <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } ><i class="fas fa-binoculars"></i></a>
                                <a style={{"cursor":"pointer"}}><i class="lnr lnr-cart"  onClick={this.addToCart}></i></a> */}
                            </div>
                        </div>
                        <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } >
                            <h4> {this.props.data .name}</h4> {this.props. data.count} </a>
                       {
                           this.props.data.discountprice ?
                           <h5> $ {this.props.data.discountprice.toFixed(2)}</h5>
                           :
                           <h5> ${this.props.data.discountprice}</h5>
                       }
                       
                    </div>
                    :
                    <div class="f_p_item">
                    <div class="f_p_img image-system-home">
                        <img class="img-fluid" src={this.props.data.imageData[0]} alt=""/>
                        <div class="p_icon icon-posion-relative">
                        {/* <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } ><i class="fas fa-binoculars"></i></a>
                            <a style={{"cursor":"pointer"}}><i class="lnr lnr-cart"  onClick={this.addToCart}></i></a> */}
                        </div>
                    </div>
                    <a href="#"><h4> {this.props.data .name}</h4> {this.props. data.count} </a>
                    <h5> ${this.props.data.discountprice}</h5>
                </div>
         
       
              }
                   
             </div>                           
       

    )

}





}

export default System;