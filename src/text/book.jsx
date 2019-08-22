import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

class List extends Component {
   
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
        
            <div class="col-lg-3 col-md-4 col-sm-6" key={this.props.data.id}>
                  <Link   to={'/product/'+  this.slugify(this.props. data.name) + "/"+ this.props. data.id}>
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <img class="img-fluid" src="img/product/feature-product/f-p-1.jpg" alt=""/>
                            <div class="p_icon">
                                <a href="#"><i class="lnr lnr-heart" ></i></a>
                                <button ><i class="lnr lnr-cart"  onClick={this.addToCart}></i></button>
                            </div>
                        </div>
                        <a href="#"><h4> {this.props.data .name}</h4> {this.props. data.count} {this.slugify(this.props. data.name)} </a>
                        <h5> ${this.props.data.price.toFixed(2)}</h5>
                    </div>
                    </Link>
             </div>                           
       

    )

}





}

export default List;