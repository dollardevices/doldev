// import React from 'react';
import React, { Component } from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import Slider from "react-slick";
import "./productimage.css"

class ProductImageArea extends Component {
    
    constructor(props){
        super(props)
        this.state ={
           
            value: 'select',
            id : "", 
            count:[],
            products:"",
            product:[],
            cost : 50,
            quantity : 1,
            message :"",
            showCart:false,
            countCart: 1,
            stopincrement : false,
            stopdecrement:true,
            domain: 'https://shopend007.herokuapp.com/api', 
            totalmoney:0,
            hideAddcart : false
        }
        // this.data1()
       
      }

      onChange(e) {
        // console.log("data---==--->", e)
        this.setState({
          value: e.target.value
        })
        // console.log("data", this.state.value)
      }

      handleClick=(e)=> {
        const { param } = e.target.dataset;
        var data1 = this.props.stock.find(task => Number(task.id) === Number(param))
        // console.log("params----=---->",data1);
         this.props.sendcartItem(data1)
        //do what you want to do with the parameter
      }

      addToCart = () => {
        // console.log("data add ", this.state.countCart)
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.stock.id.toString();
        cart[id] = (cart[id] ? cart[id]: 0);
        
        let qty = cart[id] +  this.state.countCart;
        // console.log("nulll ---->qty 1", qty)
        // if (this.props.stock.available_quantity < this.state.countCart) {
        //     cart[id] = this.props.stock.available_quantity; 
        // } else {
        //     cart[id] = this.state.countCart
        // }
        cart[id] = this.state.countCart
        localStorage.setItem('cart', JSON.stringify(cart));
        // this.props.subtotal(this.state.send)  
		// let qty = cart[id] + this.state.countCart;
		// if (this.props.stock.available_quantity < qty) {
        //     // console.log("------>yes")
		// 	cart[id] = this.props.stock.available_quantity; 
		// } else {
        //     // console.log("------>no")
		// 	cart[id] = qty
        // }
        // this.props.clickCart()
        this.setState({
     
            hideAddcart:true,
        })
        // this.getproduct(id)
        localStorage.setItem('cart', JSON.stringify(cart));
        this.props.checkChart(this.props.stock)
    }

    getproduct=(data)=>{

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
      };
    
      fetch(this.state.domain+"/details/"+data, requestOptions )
      .then(res => res.json())
      .then(res => {

          
            // console.log("error state this.state. getreview==----===----> ", res )
             this.setState({
               product: res.data,
               countCart : res.data.available_quantity
             })
        // this.setState({
        //  stock: res.data
        // })

         // console.log("error state this.state. stock==----===----> ", this.state.stock)
      })
    }

      data1 = ()=>{
       let total = 0;
			for (var i = 0; i < 5; i++) {
			//  console.log("total------>",	total +=parseInt(30) + 4)
			}
            
            // console.log("count--->products", total)
      }

      closeShowCart=()=>{
        this.setState({
            showCart:false
        })
      }
      showcart= ()=>{
        this.setState({
            showCart:true
        })
      }


      
      checkChart=(data)=>{
        this.props.checkChart(data)
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

    increment=(e)=> {
        if(this.state.countCart !== 10){
            e.preventDefault()
            this.setState({
                countCart: this.state.countCart + 1,
                stopdecrement:false,
                // totalmoney :  this.state.countCart * this.props.stock.discountprice 
                // stopincrement:true
            });
            // this.addToCartfunc(this.state.countCart)
        }else{
            this.setState({
                
                stopincrement:true
            });
        }
        
       
        // console.log("data ==---->,increment", this.state.countCart)
      };
      
      decrement=(e)=> {
        e.preventDefault()
        if(this.state.countCart !== 1){
        this.setState({
            countCart: this.state.countCart  - 1,
            stopincrement:false,
        });
        //  var con = this.props.stock.discountprice  - this.state.countCart  - 1
           
        //  console.log("caculat", con)
        // this.addToCartdecrement(this.state.countCart)
        }else{
            this.setState({
                stopdecrement:true
            });
        }
      };

      addToCartdecrement =(data)=>{
        // })  
        // console.log(data - 1)
          var getdata = data - 1
         var con = getdata * this.props.stock.discountprice 

        this.setState({
         
         
            totalmoney :con
            // stopincrement:true
        });
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        
         let id = this.state.product.id;
        //  console.log(" cart --====--->",cart , id)
        // console.log
        // console.log('id----->',id)
        cart[id] = (cart[id] ? cart[id]: 0);
        let qty = cart[id] + parseInt(data);
        // console.log("nulll ---->qty 1", qty)
        cart[id] = data -1
        // cart[id] = this.props.stock.available_quantity; 
      
        localStorage.setItem('cart', JSON.stringify(cart));
  }

      addToCartfunc =(data)=>{
            // })  
            let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
            
             let id = this.state.product.id;
            //  console.log(" cart --====--->",cart , id)
           
             var getdata = data + 1
              var con = getdata * this.props.stock.discountprice 
              
                this.setState({
                
                
                    totalmoney :con
                    // stopincrement:true
                });
            // console.log
            // console.log('id----->',id)
            cart[id] = (cart[id] ? cart[id]: 0);
            let qty = cart[id] + parseInt(data);
            // console.log("nulll ---->qty 1", qty)
            cart[id] = data + 1
            // cart[id] = this.props.stock.available_quantity; 
          
            localStorage.setItem('cart', JSON.stringify(cart));
      }

      checkifaddtoCart= (data)=>{
       const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
      };
    
      fetch(this.state.domain+"/details/"+data, requestOptions )
      .then(res => res.json())
      .then(res => {
            // console.log("error state this.state. getreview==----===----> ", res )
            if(res.data.id){
                this.setState({
                    product: res.data,
                    countCart : res.data.available_quantity,
                    hideAddcart : true
                  })
            }else{
                this.setState({
                    product: res.data,
                    countCart : res.data.available_quantity,
                   
                  }) 
            }
            
        // this.setState({
        //  stock: res.data
        // })

         // console.log("error state this.state. stock==----===----> ", this.state.stock)
      })
     
            
        //   if (data === cart){
        //     console.log('id----->yes')
        //     //   this.setState({
        //     //     hideAddcart : true
        //     //   })
        //   }else{
        //     console.log('id----->no')
        //     // this.setState({
        //     //     hideAddcart : false
        //     //   })
        //   }
      }
    
    //   reset() {
    //     this.setState({
    //       count: 0
    //     });
    //   };

      
//   for (const [index, value] of elements.entries()) {
//     items.push(<li key={index}>{value}</li>)
//   }
render(){
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    //   this.checkifaddtoCart(this.props.stock.id)
   
    //   console.log("data---->propt props.stock.discountprice", this.props.stock.discountprice)
  return (
     
        <div class="product_image_area">
            <div class="container">
                {
                    !this.state.showCart ?
                      <div class="row s_product_inner">
                            <div class="col-lg-6">
                            {
                                this. props.stock.imageData ?
                                    <div class="s_product_img">
                                        
                                           <Slider {...settings}>
                                               {
                                                    this.props.stock.imageData.map(data => {
                                                        return (
                                                            <div className="data-productimage">
                                                                       <img src={data} alt=""/>
                                                            </div>
                                                            
                                                        )
                                                  })      
                                               }
                                           </Slider>
                                   
                                        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="">
                                                <a className="data-productimage-small"> <img src={this.props.stock.imageData[0]} alt=""/></a>
                                                
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="">
                                                <a className="data-productimage-small"> <img src={this.props.stock.imageData[1]} alt=""/></a>
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active">
                                                <a className="data-productimage-small">    <img src={this.props.stock.imageData[2]} alt=""/> </a>
                                                </li>
                                            
                                            </ol>
                                            <div class="carousel-inner">
                                            
                                                <div class="carousel-item data-productimage" >
                                                    <img class="d-block w-100" src={this.props.stock.imageData[0]} alt="First slide" width="20"/>
                                                </div>
                                                <div class="carousel-item data-productimage">
                                                    <img class="d-block w-100" src={this.props.stock.imageData[1]} alt="Second slide" width="20"/>
                                                </div>
                                                <div class="carousel-item active data-productimage">
                                                    <img class="d-block w-100" src={this.props.stock.imageData[2]} alt="Third slide" width="20"/>
                                                </div>
                                            
                                            </div>
                                        </div> */}
                                    </div>
                                    :
                                <div> LOADING ......  </div>
                            }
                            
                                

                            </div>
                            <div class="col-lg-5 offset-lg-1">
                                
                                    <div class="s_product_text">
                                    <h3>{this.props.stock.name}</h3>
                                    {
                                        this.props.stock.discountprice ? 
                                        <div>
                                             <h2>{this. geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.stock.discountprice).toFixed(2)}</h2>
                                        <h5 className="fullprice"> {this.props.stock.originalprice}</h5>
                                        </div>
                                       
                                        :
                                        <h3></h3>
                                    }
                                
                                    <ul class="list">
                                        <li><a class="active" ><span>Category</span> :  {this.props.stock.category}</a></li>
                                        <li><a ><span>Available</span> : In Stock</a></li>
                                    </ul>
                                    <p>   {this.props.stock.description}</p>
                                    <div class="product_count">
                                        <label for="qty">Quantity:</label>
                                        <div class="min-add-button">
                                                <div class="input-group">
                                                        {
                                                            this.state.stopdecrement ?
                                                            <a  class="input-group-addon minus increment" style={{ cursor: 'not-allowed'}} ><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                            :
                                                            <a  class="input-group-addon minus increment"  onClick={this.decrement} ><i class="fa fa-minus" aria-hidden="true"></i></a>

                                                        }
                                                
                                                <input type="text" class="form-control" id="adults" size="10" value={this.state.countCart}/>
                                                {
                                                    this.state.stopincrement ?
                                                    <a  class="input-group-addon plus increment" style={{ cursor: 'not-allowed'}}  ><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                    :
                                                    <a  class="input-group-addon plus increment"  onClick={ this.increment}><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                }
                                                
                                                </div>
                                            </div>
                                       
                                    </div>
                                    <div class="card_area">
                                         {
                                                    !this.state.hideAddcart?
                                                      <a class="main_btn  CartAdd-product CartAdd-product-costom" data-param={this.props.stock.id}  onClick={this.addToCart}  >Add to Cart</a>
                                                  :
                                                    ""
                                                }
                                          
                                          {
                                                    !this.state.hideAddcart?
                                                 
                                                          <a class="gray_btn" href="/shop">Continue Shopping</a>
                                                               
                                                               
                                          
                                                  :
                                                    <div>
                                                    <a class="gray_btn" href="/shop">Continue Shopping</a>
                                                            
                                                            <a class="main_btn" href="/checkout">Proceed to checkout</a>
                                                    </div>
                                                }
                                                   
                                    </div>
                                   
                                   
                                    

                                   
                                </div>
                                {/* :
                                <div></div>

                                } */}
                                
                            </div>
                        </div>
                     :
                        <div className="productcart-cartshow">
                            <div className="productcart-cartshow-head"> 
                            <div class="product_top_bar">
                                <div class="left_dorp productcart-cartshow-left_dorp">
                                  <i class="fas fa-check"></i>  Item added to cart
                                </div>
        					<div class="right_page ml-auto productcart-cartshow-right_page ">
                            <a class="main_btn" href="/checkout"> <i class="fas fa-shopping-cart "></i> Check out </a>
        					</div>
        				</div>
                            </div>
                             <div className="productcart-cartshow-body">
                             {
                                this. props.stock.imageData ?
                                 <img src={this.props.stock.imageData[1]} alt=""/>
                               :
                                    "loading ...."
                             }
                             <hr></hr>
                             {/* {this.state.totalmoney} */}
                             <h5>{this.props.stock.name}</h5>
                              {
                                this.state.totalmoney === 0 ? 
                          
                                 <h2>{this.geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.stock.discountprice).toFixed(2)}</h2>
                                 :
                                 <h2> {this.geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.stock.discountprice).toFixed(2)} </h2>
                              }
                                {/* <p>  {this.props.stock.name}</p>   */}

                                <div class="row">
                                    <div class="col productcart-cartshow-row">
                                   
                                    {
                                        this.state.totalmoney === 0 ? 
                                
                                        <h5><b>Total : </b> {this.geticom(this.props.currency)} {this.getRates(this.props.currency,  this.props.stock.discountprice).toFixed(2)}</h5>
                                        :
                                        <h5><b>Total : </b>  {this.geticom(this.props.currency)} {this.getRates(this.props.currency,  this.state.totalmoney).toFixed(2)} </h5>
                                    }
                                    </div>
                                    <div class="col">
                                        <div class="min-add-button">
                                 

                                            <div class="input-group">
                                                    {
                                                        this.state.stopdecrement ?
                                                        <a  class="input-group-addon minus increment" style={{ cursor: 'not-allowed'}} ><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                        :
                                                        <a  class="input-group-addon minus increment"  onClick={this.decrement} ><i class="fa fa-minus" aria-hidden="true"></i></a>

                                                    }
                                            
                                            <input type="text" class="form-control" id="adults" size="10" value={this.state.countCart}/>
                                            {
                                                this.state.stopincrement ?
                                                <a  class="input-group-addon plus increment" style={{ cursor: 'not-allowed'}}  ><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                :
                                                <a  class="input-group-addon plus increment"  onClick={ this.increment}><i class="fa fa-plus" aria-hidden="true"></i></a>
                                            }
                                            
                                            
                                            </div>

                                        </div>

                                    </div>
                                    
                                </div>
                                
                                 
                                        
                                <a class="main_btn" href="/checkout"> <i class="fas fa-shopping-cart "></i> Check out </a>
                              <a href="#" class="gray_btn  small" style={{marginLeft:"10px"}} onClick={this.closeShowCart}><i class="fas fa-times"></i> Back</a>                     
                                                            
                                 
                                 
                             </div>   
                             

                            
                            
                        </div>

                }
                
            </div>
        </div>
  
  );
 } 
}

export default ProductImageArea;

const SelectList = (props) => {

    const optionsItem  =  props.categories.map( (category) => 

        <OptionItem   key={ category._id}  id={category._id} name={category.make_display} />
    )

        return (
                <select style={{"font-weight": "bold","color":"red"}} onChange={props.handlechangecategory} defaultValue={props.value} className="form-control  font-size-10">
                <option   selected value="None" >MAKE </option>

                   { optionsItem }                                                         
                                                                            
                </select>
                        
                
        )
}

const HelloWorld = () => (
    <button onClick={() => {
      toaster.notify('Hello world', {
        duration: 2000
      })
    }}>
      Say hello
    </button>
  )

const OptionItem = (props) => {
    //console.log("available props", props);

    return (
            <option  className="landing-page-font-select" value={props.id} > {props.name} </option>

    )
}