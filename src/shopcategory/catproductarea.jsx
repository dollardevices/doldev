import React , {Component} from 'react';
import Countdown from 'react-countdown-now';
import Slider from "react-slick";
import axios from 'axios';
import List from "./categorylist"

class CatProductArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            testarray: ['1', '2', '3', '4', '5'],
            testjson: {
                "name": "nonso"
            },
            cart : ['cart1'],
            current_page : 1,
            items_per_page : 9,
            current_items : [],
            no_of_pages : "",
            index_of_first_item:'',
            index_of_last_item:'',
            render_items : [],
            codename : "",
            currency : "",
            rate : [],

            // domain: 'http://localhost:4000/api',   
            domain: 'https://dollardeviceback.herokuapp.com/api',
        }
        
        this.addcart = this.addcart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sort = this.sort.bind(this);
        this.next = this.next.bind(this);
    }
    componentDidMount(){

        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
        };
        // var email = "admin@peppement.com";
        fetch(this.state.domain+"/getproducts/", requestOptions )
              .then(res => res.json())
              .then(res => {
    
                this.setState({
                  products : res.data
                })
        //   console.log("error state this.state.items==----===----> ", this.state.products)
        })
        // fetch("https://endshop.herokuapp.com/api/getip/", requestOptions )
        fetch(this.state.domain+"/getip2/", requestOptions )
        .then(res => res.json())
        .then(res => {
                 console.log("ress--==--=--=-===>   region ", res.result.currency)
            this.setState({
                currency : res.result.currency, 

            })
        }).catch(err => err);

        fetch(this.state.domain+'/getmoney', requestOptions)
        .then(res => res.json())
        .then((res)=>{
            console.log("data -------> setGlobalpayer--->2", res)
            
               this.setState({
                  rate:res.data.rates
               })
        //    this.props.history.push("/product-checkout")
         }).catch( (error) => {
        })  



       
        
      
        // axios ({
        //     method : "GET",
        //     url :"https://restcountries.eu/rest/v2/all"  ,
        // }).then( response => { 
        
        //      console.log("data  response ---->",response)
            
        //        res.send({"data" : response.data});
               
            
        //     }).catch( err => {
        //         console.log("data  response error ---->",  err  )
        // });

        // fetch('https://api.exchangeratesapi.io/latest', requestOptions)
        // .then(res => res.json())
        // .then((result)=>{
        //     console.log("data -------> setGlobalpayer--->4", result)
        //     // Auth.setToken2(result.accessToken) ;
        //     //    this.state({
        //     //    paymentItem:result
        //     //    })
        //    this.props.history.push("/product-checkout")
        //  }).catch( (error) => {
        // })  
       
      }
    addcart = (id) =>{
        // this.setState({ cart : this.state.cart.});
        // console.log("items in cart : " + this.state.cart);
        // console.log("Item with this index added : " + id);
        // j
    }


    handleSubmit(e){
    
        this.setState({
            current_items : [],
            current_page: e.target.name,
        });
        // console.log( "e.value" + e.target.name  );
        // console.log("Current Page from 1 , 2, 3 btns " + this.state.current_page);
    };
    next = e => {
        const pageno = e.target.name;
        if (this.state.current_page < pageno ) {
            this.setState({
                current_page: parseInt(this.state.current_page) + 1
            });
        }
        // console.log("", parseInt(this.state.current_page) + 1);
        // console.log("no of pages " + pageno);
        // console.log("next buttton" + this.state.current_page + "id =>" + e.target.name);
    };
    back = e => {
        const pageno = e.target.name;
        if (this.state.current_page > 1){
            this.setState({
                current_page: this.state.current_page - 1
            });
        }
        // console.log("no of pages " + this.state.no_of_pages);
        // console.log("back buttton" + this.state.current_page + "id =>" + e.target.name);
    }
    sort(e){
        // console.log('men them : ' + e.target.name);
        
        const selected = [] ;
        for( var i=0 ; i < this.state.products.length; i++){
            if (this.state.products[i]['category'] === e.target.name){
                selected.push(this.state.products[i]);
            }
        }
        this.setState({
            current_items: selected
        });
        // console.log("category selected : " + selected);
        // console.log("category current selected : " + this.state.current_items);
    }

    checkChart=(data)=>{
        this.props.checkChart(data)
      }
     


    render() {
        let { products, current_page, render_items, current_items, no_of_pages, items_per_page, index_of_first_item, index_of_last_item} = this.state;
        //logic for displaying items 
        index_of_last_item = current_page * items_per_page;
        index_of_first_item = index_of_last_item - items_per_page;
        current_items = products.slice(index_of_first_item,index_of_last_item);
        if (this.state.current_items.length === 0) {
            render_items = current_items;
        } else if (this.state.current_items.length > 0) {
            render_items = this.state.current_items;
        } else {
            render_items = current_items;
        }
     
        // console.log("current items : " + render_items);
        // console.log("last index of item : " + index_of_last_item);
        // console.log("first index of item : " + index_of_first_item);
        // Logic for displaying page numbers 
        const page_number = [];
        // console.log("no of items : " + render_items.length );
        // console.log("no of items for pages : " + items_per_page);
        // const pages = Math.ceil(products.length / items_per_page);
        for (let i = 1 ; i <= Math.ceil(products.length / items_per_page); i++){
            page_number.push(i);
        };
        
        no_of_pages = Math.ceil(products.length / items_per_page);
        

         
        // console.log("pages_numbers : " + no_of_pages);
        const render_page_numbers = page_number.map((number) =>{
            return (
                <li class="page-item" key={number} id={number}>
                    <button class="page-link" name={number} onClick={this.handleSubmit} href="#">
                        {number}
                    </button>
                </li>
                
            );
        });
       
        return ( 
            <react-fragment>
                
                <section class="cat_product_area p_120">
                    <div class="container">
                        <div class="row flex-row-reverse">
                            <div class="col-lg-9">
                                <div class="product_top_bar">
                                    <div class="left_dorp">
                                        {/* <select class="sorting" style={{ display: "none" }}>
                                            <option value="1">Default sorting</option>
                                            <option value="2">Default sorting 01</option>
                                            <option value="4">Default sorting 02</option>
                                        </select> */}
                                        {/* <div class="nice-select sorting" tabindex="0"><span class="current">Default sorting</span>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">Default sorting</li>
                                                <li data-value="2" class="option">Default sorting 01</li>
                                                <li data-value="4" class="option">Default sorting 02</li>
                                            </ul>
                                        </div> */}
                                        {/* <select class="show" style={{ display: "none" }}>
                                            <option value="1">Show 12</option>
                                            <option value="2">Show 14</option>
                                            <option value="4">Show 16</option>
                                        </select> */}
                                        {/* <div class="nice-select show" tabindex="0"><span class="current">Show 12</span>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">Show 12</li>
                                                <li data-value="2" class="option">Show 14</li>
                                                <li data-value="4" class="option">Show 16</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div class="right_page ml-auto">
                                        <nav class="cat_page" aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <button class="page-link" name={no_of_pages} onClick={this.back}>
                                                        <i class="fa fa-long-arrow-left" aria-hidden="true"></i> back
                                                    </button>
                                                </li>
                                                {/* <li class="page-item active"><a class="page-link" href="#">1</a></li> */}
                                                {/* i will add the buttons here  */}
                                                {render_page_numbers}
                                                {/* <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item blank"><a class="page-link" href="#">...</a></li>
                                                <li class="page-item"><a class="page-link" href="#">6</a></li> */}
                                                <li class="page-item">
                                                    <button class="page-link" name={no_of_pages} onClick={this.next}>
                                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i> next
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="latest_product_inner row">
                                    {/* judge */}
                                    {/* {render_items} */}
                                   
                                   {/* //items goes here                                                            */}
                                    {render_items.map(item =>
                                      <List   currency={this.state.currency} rate={this.state.rate}   data={item}  checkChart={this.checkChart}  />
                                    )}   
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="left_sidebar_area">
                                    <aside class="left_widgets cat_widgets">
                                        <div class="l_w_title">
                                            <h3>Browse Categories</h3>
                                        </div>
                                        <div class="widgets_inner">
                                            <ul class="list">
                                                {/* <i>
                                                <label  for='pay1' style={{'width': '350px;'}} class="radion_btn">
													<input class="active radio-lab" type='radio' id='pay1' name='payoption'  onClick={this.sort} name="ipad"  checked={this.state.checked} value='paystack' required />
													<span class="radio-lab"> </span> <b style={{color:"black"}}> ipad</b>
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a>
													<div class="check"></div>
												</label>
                                                </i>
                                                <i>
                                                <label  for='pay1' style={{'width': '350px;'}} class="radion_btn">
													<input class="active radio-lab" type='radio' id='pay1' name='payoption'  onClick={this.sort} name="phone"   value='paystack' required />
													<span class="radio-lab"> </span> <b style={{color:"black"}}> Phone</b>
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a>
													<div class="check"></div>
												</label>
                                                </i> */}
                                                <li><button className="btn btn-block page-link" onClick={this.sort} name="ipad"> Ipad</button></li>
                                                <li>
                                                    <button className="btn btn-block page-link" onClick={this.sort} name="phone">Phone</button>
                                                    
                                                </li>
                                                <li><button className="btn btn-block page-link" onClick={this.sort} name="laptop"> Laptop</button></li>
                                                <li><button className="btn btn-block page-link" onClick={this.sort} name="desktop"> Desktop</button> 
                                                    {/* <ul class="list">
                                                        <li><a href="#">Frozen Fish</a></li>desktop
                                                        <li><a href="#">Dried Fish</a></li>
                                                        <li><a href="#">Fresh Fish</a></li>
                                                        <li><a href="#">Meat Alternatives</a></li>
                                                        <li><a href="#">Meat</a></li>
                                                    </ul> */}
                                                </li>
                                                {/* <li><a href="#">Beverages</a>
                                                    <ul class="list">
                                                        <li><a href="#" >Frozen Fish</a></li>
                                                        <li><a href="#">Dried Fish</a></li>
                                                        <li><a href="#">Fresh Fish</a></li>
                                                        <li><a href="#">Meat Alternatives</a></li>
                                                        <li><a href="#">Meat</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Home and Cleaning</a></li> */}
                                            </ul>
                                        </div>
                                    </aside>
                                    {/* <aside class="left_widgets p_filter_widgets">
                                        <div class="l_w_title">
                                            <h3>Product Filters</h3>
                                        </div>
                                        <div class="widgets_inner">
                                            <h4>Brand</h4>
                                            <ul class="list">
                                                <li><a href="#">Apple</a></li>
                                                <li><a href="#">Asus</a></li>
                                                <li class="active"><a href="#">Gionee</a></li>
                                                <li><a href="#">Micromax</a></li>
                                                <li><a href="#">Samsung</a></li>
                                            </ul>
                                        </div>
                                        <div class="widgets_inner">
                                            <h4>Color</h4>
                                            <ul class="list">
                                                <li><a href="#">Black</a></li>
                                                <li><a href="#">Black Leather</a></li>
                                                <li class="active"><a href="#">Black with red</a></li>
                                                <li><a href="#">Gold</a></li>
                                                <li><a href="#">Spacegrey</a></li>
                                            </ul>
                                        </div>
                                        <div class="widgets_inner">
                                            <h4>Price</h4>
                                            <div class="range_item">
                                                <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                                    <div class="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "2%", width: "98%" }}></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "2%" }}></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "100%" }}></span></div>
                                                <div class="row m0">
                                                    <label for="amount">Price : </label>
                                                    <input type="text" id="amount" readonly="" />
                                                </div>
                                            </div>
                                        </div>
                                    </aside> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </react-fragment>
         );
    }
}
 
export default CatProductArea;
// function CatProductArea() {
    
//   return (
    
//   );
// }

// export default CatProductArea;
