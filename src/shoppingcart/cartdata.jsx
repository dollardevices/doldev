// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import "./shopcart.css"


class Cartdata extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            domain: "https://dollardeviceback.herokuapp.com/api", 
            value: 'select',
            id : "", 
            count:[],
            products:"",
            cost : 50,
            total2: "", 
            send :"",
            products: [],
            total: 0,
            quantity : 1,
            Qistrue : false
        }
        // this.data1()
      }

      componentWillMount() {
		let cart = localStorage.getItem('cart');
        if (!cart) return; 
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
            body: JSON.stringify(cart),
          };

          
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

  

 handleChange = (e) =>{
        if(e.target.value){
            // console.log("nulll ---->yes", e.target.value)
                this.setState({
                    Qistrue : true,
                    total : parseInt(e.target.value) * parseInt(this.props.data.discountprice),
                    send : parseInt(e.target.value) * parseInt(this.props.data.discountprice),
                })  
            this.props.subtotal(this.state.send)    
        }else{
            // console.log("nulll ---->no", e.target.value) 
              this.setState({
              total : "Wait"
           }) 
        }
    }


    addToCart = (e) => {
        if(e.target.value){
            // console.log("nulll ---->yes", e.target.value)
                // this.setState({
                //     total : parseInt(e.target.value) * parseInt(this.props.data.price),
                //     send : parseInt(e.target.value) * parseInt(this.props.data.price),
                // })  
                let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
                let id = this.props.data.id.toString();
                cart[id] = (cart[id] ? cart[id]: 0);
                this.setState({
                    quantity :e.target.value,
                    total2:parseInt(e.target.value) * parseInt(this.props.data.discountprice),
                    total : parseInt(e.target.value) * parseInt(this.props.data.discountprice),
                    send : parseInt(e.target.value) * parseInt(this.props.data.discountprice),
                })
                let qty = cart[id] + parseInt(e.target.value);
                // console.log("nulll ---->qty 1", qty)
                if (this.props.data.qty < e.target.value) {
                    cart[id] = this.props.data.available_quantity; 
                } else {
                    cart[id] = e.target.value
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                this.props.subtotal(this.state.send)    
        }else{
                // console.log("nulll ---->no", e.target.value) 
                this.setState({
                total2 : "Wait"
            }) 
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
    
  
render(){
       var  total = 0
       total += this.props.data.discountprice * this.props.data.available_quantity;
    //   console.log("data total 2--->", total, this.props.data)
    // var data = this.props.stock.find(task => Number(task.id) === Number(this.props.id))
    //  console.log("data---->propt", data)



    
  return (
        <tr>
            <td>
                <div class="media">
                    <div class="d-flex d-flex-costom">
                    <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } ><img src={this.props.data.imageData[0]} alt=""/></a>
                    </div>
                    <div class="media-body">
                    <a  href={"/product/" + this.slugify(this.props.data.name) +  "/"+ this.props.data.id } > <p>{this.props.data.name}</p> </a>
                    </div>
                </div>
            </td>
            {
                this.props.data?
                <td style={{width:"150px"}}>
                    {
                        this.props.data.discountprice?
                        <h5> 
                        {this.geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.data.discountprice).toFixed(2) }
                        {/* {this.props.data.discountprice.toFixed(2)} */}
                        </h5>
                        :
                        <h5> ${this.props.data.discountprice}</h5>
                    }
                   
                </td>
            :
            <td>
              
            </td>

            }
            
            <td>
                <div class="product_count">
                    {
                        this.state.Qistrue ?
                        <input type="text"  class="input-text qty"  defaultValue={this.state.quantity}    onChange={this.addToCart}  />
                        :
                        <input type="text"  class="input-text qty"  defaultValue={this.props.data.available_quantity}    onChange={this.addToCart}  />
                    }
               
                    {/* <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button> */}
                </div>
            </td>
            <td>
              {
                  this.state.total2 === "" ?
                  <h5>
                   
                    {/* ${ total.toFixed(2)} */}
                    {this. geticom(this.props.currency)} {this.getRates(this.props.currency,  total).toFixed(2) }
                  </h5>
                :
                <h5>
                   {
                      this.state.total2  === "Wait" ?
                      <p>
                      {this. geticom(this.props.currency)} {this.getRates(this.props.currency,  this.state.total) }
                      </p>
                      :
                      <p> 
                      {/* {this.state.total.toFixed(2)} */}
                      {this. geticom(this.props.currency)} {this.getRates(this.props.currency,  this.state.total).toFixed(2) }
                      </p>
                   }
                   
                </h5>
              }
            
            </td>
            <td>
            
            <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(this.props.data)}><i class="fas fa-trash-alt"></i></button>
            </td>
        </tr>
        
     );
 } 
}

export default Cartdata;

