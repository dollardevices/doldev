import React, { Component } from 'react';

// import Header from './statics/header';
import HomeBanner from './homebanner';
import ProductFeature from './productfeature';
import TimerArea from './timerarea';
import Latestproduct from './latestproduct';
import ClientLogoArea from './clientlogoarea';
import MostProductArea from './mostproductarea';
import More from './more';
// import Footer from './statics/footer';


class  Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ifChart :true,
        noerorrpage : true,
        domain: 'https://shopend007.herokuapp.com/api', 
        currency : "",
        rate : [],
        loanData :true
        }
      }

      componentDidMount(){
        this.props.noerorrpage(this.state.noerorrpage)
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
        };
      
         fetch(this.state.domain+"/getphone/", requestOptions )
        .then(res => res.json())
        .then(res => {
    
          this.setState({
            phones : res.data,
            loanData:false
          })
          // console.log("error state this.state.items==----===----> ", this.state.items)
        }).catch(err => err);

        fetch(this.state.domain+"/getip2/", requestOptions )
        .then(res => res.json())
        .then(res => {
                //  console.log("ress--==--=--=-===>   region ", res.result.currency)
            this.setState({
                currency : res.result.currency, 
                
 
            })
        }).catch(err => err);
 
        fetch(this.state.domain+'/getmoney', requestOptions)
        .then(res => res.json())
        .then((res)=>{
            // console.log("data -------> setGlobalpayer--->2", res)
            
               this.setState({
                  rate:res.data.rates
               })
        //    this.props.history.push("/product-checkout")
         }).catch( (error) => {
        })  

        
   }

      checkChart=(data)=>{
        this.props.checkChart(data)
      }
     
    

 render(){
    return (
        <react-fragment>
           {this.state.loanData?
                //   <Leader/>
                 <div class="pre-loader">
		        	<div class="loader"></div>
		         </div> 
                  :
                  <div></div>
               }
          <div style={{  background: "#0dda8b"}}>
            <HomeBanner />

            <ProductFeature  currency={this.state.currency} rate={this.state.rate}   checkChart={this.checkChart} />
            {/* <TimerArea/> */}

            < More  currency={this.state.currency} rate={this.state.rate}   checkChart={this.checkChart} />

            <Latestproduct  currency={this.state.currency} rate={this.state.rate}  checkChart={this.checkChart} />

          </div>
            {/* <Header/>   */}
         
            
            {/* <ClientLogoArea/> */}
            {/* <MostProductArea/> */}
            {/* <Footer/> */}
        </react-fragment>
    );

 }     
    
}

export default Home;
