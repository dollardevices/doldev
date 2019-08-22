import React, { Component } from 'react';
import "./proof.css"
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
// import  AuthService  from "../api/authentication.js";
import { getCartProducts  } from '../api/repository';
// const Auth = new AuthService();
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import { QRCode } from "react-qr-svg";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api';
let images = [];
class Proof extends Component {

  constructor(props){
    super(props)
    this.state = {
        noerorrpage:true,
        showAdd:false,
        count : 0,
        disabled : false,
        photos : [],
        images: [],
        imageUrls : [],
        message: '',
        ifImage :false,
        checked: false ,
        wallet :"1DXJDSMUTkuHFn2rADps45ExRUUn2fvVWh",
        checkedbtc : false,
        checkedtrans : false,
        domain: "https://dollardeviceback.herokuapp.com/api", 
        loanData : false,
        products :[],
        getId : "",
        inBTC :0,
        rate :0,
        total:0,
        number: '',
          name: '',
          expiry: '',
          cvc: '',
          focused: '',
       }
      //  5d3cf6edc0024c0004a10b7c
    
    }


    
        
componentDidMount(){
  this.props.noerorrpage(this.state.noerorrpage)
  const { match: { params } } = this.props;
  

  // this.props.checklook()
  // console.log("params.userId",params.id, "params all", params)
         
  const requestOptions = {
      method: 'GET', 
      headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },
  };
  this.setState({
   loading:true,
   getId:params.id
  })
  // console.log("public users param", params.id, this.props.location.state, this.props.location.state.message)
  fetch(this.state.domain+"/orderpay/"+params.id, requestOptions)
  .then(res => res.json())
  .then(res => {
    let total = 0;
          for (var i = 0; i < res.product.length; i++) {
            total += res.product[i].discountprice * res.product[i].available_quantity;
          }

          // this.setState({ products, total });
    this.setState({
      products : res,
      total :  total
    })
    //  console.log("error state this.state.items==----===----> ",  this.state.total)
  }).catch(err => err);
  const requestOptions3 = {
    method: 'GET',
    headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
};


        const btc_usd_url = 'https://api.cryptonator.com/api/ticker/btc-usd';

        const url = btc_usd_url;
    
        axios.get(url).then(res => {
            // console.log ("res.data naira data-==-->", res.data);
            if (!res.data.success) {
                return
            }
    
            const price = Number(res.data.ticker.price);
            const timestamp = res.data.ticker.timestamp;
    
            const curr_pair = 'BTC_USD';
    
            this.setState({
                [curr_pair]: price,
                Btctotal :res.data.ticker
            });
            
            // console.log("data this.curr_pair--->", this.state.curr_pair)
    
        }).catch(err => {
    
    });
  fetch(this.state.domain+"/getcountry/", requestOptions )
        .then(res => res.json())
        .then(res => {
                // console.log("ress--==--=--=-===> 33 getcountry", res)
                this.setState({
                  country  : res.data,
                 
                  loanPage : true,
              })
              this.gettimeout()
              
    }).catch(err => err);

     

}


handleInputFocus = ({ target }) => {
  this.setState({
    focused: target.name,
  });
};
toggleChange = () => {
  this.setState({
    isChecked: !this.state.isChecked,
  });
  // console.log("true---000---->",this.state.isChecked)
}
handleInputChange = ({ target }) => {
  if (target.name === 'number') {
    this.setState({
      [target.name]: target.value.replace(/ /g, ''),
    });
  }
  else if (target.name === 'expiry') {
    this.setState({
      [target.name]: target.value.replace(/ |\//g, ''),
    });
  }
  else {
    this.setState({
      [target.name]: target.value,
    });
  }
};

    onChange = e =>{
        let files = e.target.files;
        this.setState({
          images : [images.push(files)],
          count : this.state.count + 1
        });
        // console.log("iamge -------->", files)
        if (images.length  < 3) {
          this.setState({
            count: images.length
          })
          // console.log(images.length + 1);
          // console.warn(images.FileList);
          return false;
        }
      }

      
      getRates = (fromCurr, amount) => {
        // console.log("data prod cart----3---->",   fromCurr,   amount)  
        const rate = this.state.BTC_USD ? this.state.BTC_USD : 0;

        if (fromCurr === "USD" ) {
        
            return amount / rate;
        }
        

        if (fromCurr === "BTC") {

        
            return amount * rate;
        
        }
    };
      



showInput=(e)=>{
    e.preventDefault()
  this.setState({
    showAdd:true
  })
    // console.log(w)

}

selectImages = (event) => {
  let images = []
  let photos  = []
  // for (var i = 0; i < event.target.files.length  i++) {
  // images[i] = event.target.files.item(i);
  // photos[i] =  URL.createObjectURL(event.target.files.item(i));
  // }
  for (var i = 0; i <  event.target.files.length && i < 2 ; i++) {
      images[i] = event.target.files.item(i);
      photos[i] =  URL.createObjectURL(event.target.files.item(i))
  
   }
  if(event.target.files.length  !== 0){
   this.setState({
     ifImage :true
   })
  }else{
    this.setState({
      ifImage :false
    })
  }
  // console.log("iamge -------->rt", photos)
  
  images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
  let message = `${images.length} valid image(s) selected`

  // this.setState({
  //   photos:images
  // })
  this.setState({ images, message , photos})
  }
   
  uploadImages = () => {
   this.setState({
    loanData : true
   }) 
  const uploaders = this.state.images.map(image => {
  const data = new FormData();
  data.append("file", image, image.name);
   
  // Make an AJAX upload request using Axios
  return axios.post(this.state.domain + '/upload', data)
  .then(response => {
        // console.log("response", response.data.result)
        this.setState({
          imageUrls: [response.data.result, ...this.state.imageUrls ]
          });
        
      })
     
  });

  // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      this.forceUpdate(this.state.imageUrls)
        // console.log('done');
        }).catch(err => alert(err.message));
  }
    
  
  forceUpdate=(data)=>{
    // console.log("data==------->",data)
    var body2 = {
      url :data
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(body2),
  };
  // console.log("requestOptions",requestOptions)
     fetch(this.state.domain +"/paymentupdate/" +this.state.getId, requestOptions)
      .then(res => res.json())
      .then((res)=>{
        this.timeout2(this.state.getId)

          // console.log("data --====---- > ",result)
          // if(result.status === "true"){
          //      this.props.callHistory(result.data._id)
          //     // console.log("data --====---- > id yes",result.data._id)
          // }
          //  this.props.callHistory(re)
          // this.props.history.replace({
          //     pathname: '/events/'+ result._id,
          //     // state: { detail: res}
          //     state: { notice: "true" , message:"Create Event" }
          //   })
      })
  }


 checkChart=(data)=>{
   this.props.checkChart(data)
 }

 handleChangebybtc=(e)=>{
         
    
  this.setState({ 
      loanData:true,
      // checkedbtc : e,
      // checked : false,
      // checkedtrans:false,
   });
   var data={
      checkedbtc:true,
      checked : false,
      checkedtrans:false,
  }
  // console.log("data--===------ BTC")
   this.timeout(data)  
}
handleChangepayment=(checked)=> {

this.setState({
  loanData:true,
  //  checked:checked ,
  //  checkedbtc : false,
  //  checkedtrans : false
  });
  var data={
      checkedbtc : false,
      checked:true,
      checkedtrans : false
  }
   this.timeout(data) 
}
handleChangetrans=(e)=>{
// console.log("data--===------> transts")
this.setState({
  loanData:true,
  // checkedtrans : e,
  // checked:false ,
  // checkedbtc : false
 });
 var data={
  checked:false ,
  checkedbtc : false,
  checkedtrans : true,
}
this.timeout(data) 
}
selectChange = (e)=>{
this.setState({
  select: e.target.value
})
//  console.log("data--===------> contry", e.target.value)
}
timeout2(data) {
  //  console.log("data---====--==> 1",data)
  setTimeout(function() {
    // this.props.callHistory(data.id)
    this.props.history.replace({
      pathname: '/confirm-order/'+ data,
      // state: { detail: res}
      // state: { notice: "true" , message:"Create Event" }
    })
  //    console.log(this.state.noticeshow);
  }.bind(this), 2300);
}

gettimeout(){
  setTimeout(function() {
    this.setState({
      inBTC : this.getRates("USD", this.state.total),
    })
    // console.log("data prod cart----2---->",    this.getRates("USD", this.state.total)) 
}.bind(this), 2300);
}

 timeout(data) {
  // console.log("data---====--==> 1",data)
  setTimeout(function() {
      this.setState({
        submitIftrue : false,
        loanData:false,
        checkedbtc : data.checkedbtc,
        checked:data.checked,
        checkedtrans : data.checkedtrans

      })
  //    console.log(this.state.noticeshow);
  }.bind(this), 2300);
}

  
  render() {
    const { name, number, expiry, cvc, focused } = this.state;
    let fileUpload;
    let alert;
    let imageCount = this.state.count;
    let imageShow;
    if(imageCount < 3){
      fileUpload =  <input type="file" class="form-control " name="file" onChange={this.onChange} multiple disabled={this.state.disabled}/>;
    }else{
      fileUpload = <input type="file" class="form-control " name="file" onChange={this.onChange} multiple disabled={!this.state.disabled}/>;
      alert = < span class = "alert alert-info" > Only 3 images are allowed </span>;
    }

    switch (imageCount) {
      case 1:
          imageShow = images.map((link, index) => <li key={index}>{link[0].name}</li> )
        break;
      case 2 : 
        imageShow = images.map((link, index) => <li key={index}>{link[0].name}</li>)
        break;
      case 3: 
        imageShow = images.map((link, index) => <li key={index}>{link[0].name}</li>)
      default:
        break;
    }

    return (
             <div >
               <section class="banner_area">
                <div class="banner_inner d-flex align-items-center banner_edit">
                    <div class="container">
                        <div class="banner_content text-center">
                            <h2>Proof of  pament</h2>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section class="checkout_area p_120">
               {this.state.loanData?
                //   <Leader/>
                    <div class="pre-loader">
                  <div class="loader"></div>
                </div> 
                      :
                      <div></div>
                  }
                  
                  <div class="container">
                    <div className="new-proof-payment">
                    
                          <div class="order_details_table">
                            <h2>Order Details</h2>
                            {
                                this.state.products.product ?
                                <div class="table-responsive">
                                {
                                    this.state.products.product.length > 0 ? (
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                        
                                                    {
                                                        this.state.products.product.map(data => {
                                                        return  (
                                                           <tr>
                                                                <td>
                                                                    <p>{data.name}</p>
                                                                </td>
                                                                <td>
                                                                    <h5>x {data.available_quantity}</h5>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                    {/* {this. geticom(this.props.currency)} {this.getRates(this.props.currency,   data.available_quantity * data.discountprice).toFixed(2) } */}
                                                                   $  { (data.available_quantity * data.discountprice).toFixed(2) }
                                                                         
                                                                 </p>
                                                                </td>
                                                            </tr>
                                                        )
                                                        })
                                                    }
                                           
                                        </tbody>
                                        
                                    </table>
                                   )
                                    :
                                    <div></div>
                                 }
                                 <div> 
                                   <hr/>
                                   <div className="proof-payment-total">
                                       <b>Sub total</b>: ${this.state.total }
                                   </div>
                                 
                                   {/* <div className="proof-payment-total">   
                                      <b>In BTC</b>:     { this.state.inBTC}
                                    </div> */}
                                 </div>

                                </div>
                                :
                                <div></div>
                            }
                         </div>

                         <div class="wrapper-proof-left">
                          <div class="panel panel-default">
                                <h5>Select payment</h5>
                                <div class="panel-heading">
                                  <h4 class="panel-title payment_item radio-lab">
                                    <label  for='pay1' style={{'width': '350px;'}} class="radion_btn">
                                      <input class="active radio-lab" type='radio' id='pay1' name='payoption' onChange={this.handleChangepayment}  checked={this.state.checked} value='paystack' required />
                                      <span class="radio-lab">PAY WITH  DEBIT CARD  </span>
                                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a>
                                      <div class="check"></div>
                                    </label>
                                  </h4>
                                  <img src="./../img/bitcoin.png" alt="bitcoin logo" class="paylogo float-right"></img>
                                </div>
                                  {
                                  this.state.checked ?
                                      <div id="collapseOne" class="panel-collapse collapse-show body-el">
                                          <div class="panel-body body-con">
                                         <p class="body-p text-center">Input card data</p>
                                         <Cards
                                                number={number}
                                                name={name}
                                                expiry={expiry}
                                                cvc={cvc}
                                                focused={focused}
                                                required
                                              
                                            />
                                            <form   onSubmit={this.makePayment}>
                               <div className="card-body-payment-sub">
                               <div class="form-group mb-3">
                                      <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input 
                                           className="form-control"
                                              type="number"
                                              name="number"
                                              placeholder="Card Number"
                                              onKeyUp={this.handleInputChange}
                                              onFocus={this.handleInputFocus}
                                              ref={input=>this.number = input}
                                              required
                                              
                                          />
                                        
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input
                                              className="form-control"
                                                type="tel"
                                                name="expiry"
                                                placeholder="Valid Thru"
                                                onKeyUp={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                                ref={input=>this.expiry = input}
                                                required
                                            /> 
                                            {/* <input class="form-control"
                                        ref={input=>this.password = input}  onChange={this.handleChange}
                                          placeholder="Password" type="password"/> */}
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input
                                          className="form-control"
                                          type="tel"
                                          name="cvc"
                                          placeholder="CVC"
                                          ref={input=>this.cvc = input}
                                          onKeyUp={this.handleInputChange}
                                          onFocus={this.handleInputFocus}
                                          required
                                        />
                                
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input
                                               className="form-control"
                                              type="text"
                                              name="name"
                                              placeholder="Name"
                                              onKeyUp={this.handleInputChange}
                                              onFocus={this.handleInputFocus}
                                              // pattern="[a-z]{1,15}"
                                              ref={input=>this.name = input}
                                              // pattern="[a-z]{1,15}"
                                              required
                                        />
                                          
                                      </div>
                                    </div>
                                    {/* <div class="custom-control custom-control-alternative custom-checkbox">
                                      <input class="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                      <label class="custom-control-label" for=" customCheckLogin">
                                        <span class="text-muted">Remember me</span>
                                      </label>
                                    </div> */}
                                    <div class="text-center">
                                   {
                                     this.state. submitIftrue ?
                                     <div class="spinner"></div>
                                       
                                     :
                                     <button  class="btn btn-primary my-4">Enter </button>
                                   }
                                     
                                      
                               </div>

                               </div>
                  </form>
                                   
                                     </div>
                                  </div>
                                  :
                                    <div></div>
                                  }
                                                    
                              </div>
                              <div class="panel panel-default">
									
                                      
								 
								                 	</div>

                                   <div class="panel panel-default">
                                      <div class="panel-heading">
                                        <h4 class="panel-title payment_item radio-lab">
                                          <label  for='pay3' style={{'width': '350px;'}} class="radion_btn">
                                            <input type='radio'   required id='pay3' onChange={this.handleChangetrans}  checked={this.state.checkedtrans }/> 
                                            <span class="radio-lab">PAYMENT WITH PAYPAL </span>
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"></a>
                                            <div class="check"></div>
                                          </label>
                                        </h4>
                                        <img src="./../img/paypal.png" alt="paypal logo" class="paylogo float-right"></img>
                                      </div>
                                      {
                                          this.state.checkedtrans ?
                                      <div id="collapseOne" class="panel-collapse collapse-show body-el">
                                        <div class="panel-body body-con">
                                          <p class=" body-p text-center">Chat with us to find out how to pay using Paypal</p>
                                        </div>
                                      </div>
                                        :
                                        <div></div>
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

export default Proof ;



