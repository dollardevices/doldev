// import React from 'react';
import React, { Component } from 'react';
import Banner from './banner';
import ProductImageArea from './productimagearea';
import ProductDescriptionArea from './productdescriptionarea';
import MostProductArea from './mostproductarea';

class ShopCategory extends Component {

    constructor(props){
        super(props)
        this.state ={
            noerorrpage :true,
            stock :[],
            id : "",
            // domain: 'http://localhost:4000/api',   
            domain: 'https://shopend007.herokuapp.com/api', 
            reviws:[],
            currency : "",
            rate : [],
            loanData :true
        }
        // this.myRef = React.createRef() 
      }

  

      componentDidMount(){
        this.props.noerorrpage(this.state.noerorrpage)
        // this.myRef.current.scrollTo(0, 0);
        const { match: { params } } = this.props;
        // console.log("params.userId",params.id, "params all", params, this.state.stock )
        this.setState({
         pageLoading : true,
         ifChart : false
         // items : initialState.stock
         
       })
       const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
       };
     
       fetch(this.state.domain+"/details/"+params.id, requestOptions )
       .then(res => res.json())
       .then(res => {
             console.log("error state this.state. getreview==----===----> ", res )
            fetch(this.state.domain+"/getreview/"+params.id, requestOptions )
            .then(res => res.json())
            .then(res => {
              // console.log("error state this.state. getreview==----===----> ", res )
              this.setState({
                reviws: res.data,
                loanData : false
               })
             })
         this.setState({
          stock: res.data
         })

          // console.log("error state this.state. stock==----===----> ", this.state.stock)
       })

      
       fetch(this.state.domain+"/getip2/", requestOptions )
       .then(res => res.json())
       .then(res => {
                // console.log("ress--==--=--=-===>   region ", res.result.currency)
           this.setState({
               currency : res.result.currency, 

           })
       }).catch(err => err);

       fetch(this.state.domain+'/getmoney', requestOptions)
       .then(res => res.json())
       .then((res)=>{
          //  console.log("data -------> setGlobalpayer--->2", res)
           
              this.setState({
                 rate:res.data.rates,
                
              })
       //    this.props.history.push("/product-checkout")
        }).catch( (error) => {
       })  


       
    }


    checkChart=(data)=>{
      this.props.checkChart(data)
    }
   

      sendcartItem = (data)=>{
        //  console.log("data ----->2 data", data)
         this.props.sendcartItem(data)
      }
    render() {
      // console.log("data render ---->", this.state.id, this.state.stock )
      // const cartItem = this.state.stock.find(x => console.log( Number(x.id)) === Number(this.state.id))
      // console.log("data ---get id", cartItem)
      return(
      <div>
             <Banner />
         {this.state.loanData?
                //   <Leader/>
             <div class="pre-loader">
		        	<div class="loader"></div>
		        </div> 
                  :
             <div>
              
                <ProductImageArea currency={this.state.currency} rate={this.state.rate} stock={this.state.stock }   checkChart={this.checkChart} id={this.state.id} sendcartItem={this.sendcartItem}  />
                <ProductDescriptionArea  stock={this.state.stock }  reviwes={this.state.reviws}/>
            </div>
           }
      
            {/* <MostProductArea/> */}
      </div>
     
   );
 }
}


export default ShopCategory ;


