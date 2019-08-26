import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import Header from './statics/header';
import { getCartProducts  } from './api/repository';
import Footer from './statics/footer';
import Home from './home/home';
import ShopCategory from './shopcategory';
import ProductDetails from './productdetails/productdetails';
import ProductCheckout from './productcheckout';
import ShoppingCart from './shoppingcart'; 
import OrderConfirm from './orderconfirm';
import Blog from './blog';
import BlogDetails from './blogdetails';
import Login from './login';
import Register from './register';
import Tracking from './tracking';
import Page404  from './page/page404';
// import Elements from './elements';
import Contact from './contact';
import  AuthService  from "./api/authentication.js";
import Proof from "./poof/proof.js"
import Exmple  from "./text/exmple"
import Profile from "./profile/profile"
import About from "./about/about.js"
import ItemContainer from "./text/item"
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import './App.css';
// import Profile from './profile/profile';

const Auth = new AuthService();
class App extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      // domain: "http://localhost:4000/api", 
      domain: "https://dollardeviceback.herokuapp.com/api",
      isAuthenticated : false,
      errorAuth : false,
       noerorrpage : false,
     
      //  lists:[]
       
    }


  }


  componentDidMount(){
     this.setState({
      pageLoading : true,
      ifChart : false
      // items : initialState.stock
      
    })
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*'  },   
    };

    if(Auth.loggedIn()){
      // console.log("check if error state isAuthenticated--->3", this.state.isAuthenticated)
        if (!this.state.isAuthenticated && !this.state.errorAuth){
          // console.log("check if error state isAuthenticated--->4", this.state.isAuthenticated)
          this.setState({
            pageLoading : false
          })
          // console.log("  getProfile()",  Auth.getProfile())
          const requestOptions = {
              method: 'GET',
              headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken() },   
          };
         fetch(this.state.domain+"/users/"+ Auth.getProfile().id, requestOptions )
          .then(res => res.json())
          .then(res => {
            // console.log("login--=---->",res)
            this.setState({
              isAuthenticated : true,
              pageLoading : true,
              errorAuth : false,
              // platform_admin : res.is_platform_admin,
            
              user : res,
        
            })
           
            const requestOptions1 = {
              method: 'GET',
              headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken2() },   
          };
          // var email = "admin@peppement.com"
           fetch(this.state.domain+"/users/"+Auth.getProfile2().userId, requestOptions1 )
              .then(ress => ress.json())
              .then(ress => {
                  // console.log("res getProfile2() ===----->", ress)

                  this.setState({
                  
                    // platform_admin : res.is_platform_admin,
                    userW:ress,
                  
              
                  })
                })  
           
              // console.log("check if error state isAuthenticated--->4",this.state.user, this.state.userW, this.state.isAuthenticated)
          }).catch(err => err);
      }
    }else{
      //  console.log("check if error state is call")
      this.setState({
        isAuthenticated : false,
        errorAuth : true,
      })
      // console.log("error state", this.state.errorAuth)
      
    }
  
    // var email = "admin@peppement.com"
     fetch(this.state.domain+"/getproducts/", requestOptions )
    .then(res => res.json())
    .then(res => {
      this.setState({
        items : res.data
      })
      // console.log("error state this.state.items==----===----> ", this.state.items)
    }).catch(err => err);

// console.log("data----====---->", this.state.items)
    let cart = localStorage.getItem('cart');
    if (!cart) return; 
    getCartProducts(cart).then((products) => {
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price * products[i].qty;
      }
            this.setState({
              // items:products, 
              products,
               total });
            // console.log("data prod cart----0---->", this.state.items)
     });
  
   

        

        
    
    
       
  }

  isEmpty=(val)=>{
    return (val === undefined || val === null || val.length <= 0) ? true : false;
}

  check_Gloupdate=(data)=>{
    // console.log("login  ======----> ", data)
    this.setState({
      platform_admin :data
    })
  }

  organizers404=(data)=>{
    this.setState({
      organizers404 : data
    })
  }

  setGlobalorganizers=(data)=>{
    this.setState({
     organizers:data,
     organizers404 :true
    })
    // this.setGlobalpayer(data)
    // console.log("data -------> setGlobalpayer--->", data)
  }

  

  getUser = ( userData) => {
      // console.log("recieved user users ====", userData)
      this.setState({
        user: userData,
        // platform_admin : userData.is_platform_admin
      }) 
      // console.log("recieved user data disble ===", this.state.platform_admin)
    }
    
  setGlobalpayer=(data)=>{
      const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken()  },
        
      };
      fetch(this.state.domain+"/payment-item?organizers_id="+data, requestOptions)
      .then(res => res.json())
      .then((result)=>{
    
   
    
        this.state({
          paymentItem:result
        })
           
      }).catch( (error) => {

 });
      // console.log("data -------> setGlobalpayer--->", data)
    }

   setGlobalAuthState = () => {

    const auth = Auth.getToken();

    if(auth){
      this.setState({
        isAuthenticated: true
      }) 
   }
  }


  setGlobalwallet=(data)=>{
    //  console.log("data login place======---->",data)
      const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken()  },
        
      };
    //     fetch("http://localhost:3030"+data, requestOptions)
    //     .then(res => res.json())
    //     .then((result)=>{
    //       console.log("data login place wallet======---->", result)
    //       const auth = Auth.getToken();

    //         if(auth){
    //           this.setState({
    //             userW:result,
    //             isAuthenticated:true,
    //           }) 
    //       }
    //     }).catch( (error) => {

    // });
  }


  removeChart=()=>{
    let cart = localStorage.getItem('cart');
    //  if (!cart) return; 
    
      getCartProducts(cart).then((products) => {
        // products.forEeach(element => console.log(element));
         
        // console.log("data prod cart---a-0----> appa total"+ [1].length+" lenght",products, products.length )
        toaster.notify(<div css={{ padding: "1rem","width": "200px", "height": "200px" }}>
        {/* <Text variant="h5">Did you know?</Text> */}
        <h5 css={{ display: "block" }}>
       <b style={{color:"red"}}>  <i class="lnr lnr lnr-cart" style={{marginLeft:"20px", color:"red"}}></i>  Delete for cart</b>
        </h5>
      </div>, {
            duration: 5000,
            })
        if(products.length === 0){
          this.setState({
            // items:products, 
            ifChart : false,
            products :products,
          });
          // console.log("data prod cart----0----> appa yes", products.length)
        }{
          this.setState({
            // items:products, 
            ifChart : true,
            products :products,
          });
          // console.log("data prod cart----0----> appa no")
        }
        
             
            
       });
  }


  noerorrpage = (data) =>{
    //  console.log("=====================================",data)
     if(data){
      // console.log("yes=====================================",data)
      this.setState({
        noerorrpage : true
       })
     }else{
      // console.log(" no=====================================",data)
      this.setState({
        noerorrpage : false
       })
     }
     
     
  }

  handleAddToCart=(book)=> {
    // let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		// let id = this.props.product.id.toString();
		// cart[id] = (cart[id] ? cart[id]: 0);
		// let qty = cart[id] + parseInt(this.state.quantity);
		// if (this.props.product.available_quantity < qty) {
		// 	cart[id] = this.props.product.available_quantity; 
		// } else {
		// 	cart[id] = qty
		// }
		// localStorage.setItem('cart', JSON.stringify(cart));
      //  const cartItem = this.state.cart.find(x => x.id === book.id);
      // console.log("app ---cartItem --> found", cartItem)
      // !cartItem && book.count > 0 && this.setState({cart: [...this.state.cart, book]})
    
      // console.log("this.state.cart ---===-->",this.state.cart)
}

checklook = ()=>{
  let cart = localStorage.getItem('cart');
  getCartProducts(cart).then((products) => {
    // products.forEeach(element => console.log(element));
     
    // console.log("data prod cart---a-0----> appa total"+ [1].length+" lenght",products, products.length )
    if(products.length === 0){
      this.setState({
        // items:products, 
        ifChart : false,
        products :products,
      });
      // console.log("data prod cart----0----> appa yes", products.length)
    }{
      this.setState({
        // items:products, 
        ifChart : true,
        products :products,
      });
      // console.log("data prod cart----0----> appa no")
    }
  })
}

checkChart=(data)=>{
  // console.log("call prod cart----0----> app  all")
  // let cart = localStorage.getItem('cart');
//  if (!cart) return; 
  let cart = localStorage.getItem('cart');
//  if (!cart) return; 

  getCartProducts(cart).then((products) => {
    // products.forEeach(element => console.log(element));
     
    // console.log("data prod cart---a-0----> appa total"+ [1].length+" lenght",products, products.length )
    toaster.notify(<div css={{ padding: "1rem","width": "200px", "height": "200px" }}>
    {/* <Text variant="h5">Did you know?</Text> */}
    <h5 css={{ display: "block" }}>
   <b>  <i class="lnr lnr lnr-cart" style={{marginLeft:"20px"}}></i>  Item Added</b>
    </h5>
  </div>, {
        duration: 5000,
        })
    if(products.length === 0){
      this.setState({
        // items:products, 
        ifChart : false,
        products :products,
      });
      // console.log("data prod cart----0----> appa yes", products.length)
    }{
      this.setState({
        // items:products, 
        ifChart : true,
        products :products,
      });
      // console.log("data prod cart----0----> appa no")
    }
    
         
        
   });
}

// logout = () =>{
//   console.log("judge love")
//   this.props.logout()
// }

  logout =()=>{
    const auth = Auth.getToken();
    Auth.logout()
    //  console.log("app view", ) 
    if(!auth){
      this.setState({
        isAuthenticated: false,
        errorAuth : true
      }) 
   }
  //  console.log("app view check auth", this.state.isAuthenticated, this.state.errorAuth ) 
  }



render(){
    //  console.log("app view check auth", this.state.isAuthenticated, this.state.errorAuth ) 

  return (
   
    <Router>
        <div >
          < Header    isAuthenticated={this.state.isAuthenticated}  logout={this.logout} ifChart={this.state.ifChart}  cart={this.state.products}/>
         
          <Route path="/"  exact  render={ props => {

            return  <Home {...props } noerorrpage={this.noerorrpage} 
                items={this.state.items}   checkChart={this.checkChart}
                user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                cart={this.state.cart}       organizers404={this.state.organizers404}
                />
                
            }} />
            
            <Route path="/profile"  exact  render={ props => {
              // console.log("is this suthenticated?", this.state.isAuthenticated);
                  if(!this.state.errorAuth || this.state.isAuthenticated ){
                  return  <Profile  {...props } noerorrpage={this.noerorrpage} organizer={this.state.organizers}
                      user={this.state.user} logout={this.logout} isAuthenticated={this.state.isAuthenticated}  
                      paymentItem={this.state.paymentItem}    organizers404={this.state.organizers404}
                      />
                  }else{
                    return    <Redirect to={{    pathname: `${'/login'}`  }}/>
                  }
            }} />



          {/* <Route exact path="/" component={Home} /> */}
             <Route path="/blog" component={Blog} />
            <Route path="/contact-us"  exact  render={ props => {
                return  <Contact {...props } noerorrpage={this.noerorrpage}  />
              }} />

             <Route path="/about-us"  exact  render={ props => {
                return  <About {...props } noerorrpage={this.noerorrpage}  />
              }} />
         
          {/* <Route path="/category" component={ShopCategory} /> */}
          {/* <Route path="/product-details" component={ProductDetails} /> */}
          
          {/* <Route path="/shopping-cart" component={ShoppingCart}/> */}
          {/* <Route path="/confirm-order" component={OrderConfirm}/> */}

            <Route path="/confirm-order/:id"  exact  render={ props => {

              return  <OrderConfirm {...props } noerorrpage={this.noerorrpage} 
                  items={this.state.items}   checklook={this.checklook}
                  user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                  cart={this.state.cart}       organizers404={this.state.organizers404}
                  />
                  
              }} />

          <Route path="/blog-details" component={BlogDetails}/>

          <Route path="/home"  exact  render={ props => {

              return  <Home {...props } noerorrpage={this.noerorrpage} 
                  items={this.state.items}  checkChart={this.checkChart}
                  user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                  cart={this.state.cart}       organizers404={this.state.organizers404}
                  />
                  
              }} />
        
          <Route path="/shop"  exact  render={ props => {

              return  <ShopCategory {...props } noerorrpage={this.noerorrpage} 
                  items={this.state.items}   checkChart={this.checkChart}
                  user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                  cart={this.state.cart}       organizers404={this.state.organizers404}
                  />
                  
              }} />

            <Route path="/proof/:id"  exact  render={ props => {

            return  <Proof {...props } noerorrpage={this.noerorrpage} 
                items={this.state.items}   checkChart={this.checkChart}
                user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                cart={this.state.cart}       organizers404={this.state.organizers404}
                />
                
            }} />

          <Route path="/checkout"  exact  render={ props => {

            return  <ProductCheckout {...props } noerorrpage={this.noerorrpage} 
                items={this.state.items} 
                user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                cart={this.state.cart} userW={this.state.userW}      organizers404={this.state.organizers404}
                />
                
            }} />

          <Route path="/shopping-cart"  exact  render={ props => {

                  return  <ShoppingCart {...props } noerorrpage={this.noerorrpage} 
                      items={this.state.items} removeChart={this.removeChart}
                      user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                      cart={this.state.cart}       organizers404={this.state.organizers404}
                      />
                      
            }} />

          {/* <Route path="/exmple" component={Exmple}/> */}
          
          <Route path="/exmple"  exact  render={ props => {
                  // console.log("is this suthenticated?", this.state.isAuthenticated);
                 
                      return  <Exmple {...props } noerorrpage={this.noerorrpage} 
                          items={this.state.items}  checkChart={this.checkChart}
                          user={this.state.user} logout={this.logout}  isAuthenticated={this.state.isAuthenticated}  
                           getchat={this.handleAddToCart}            organizers404={this.state.organizers404}
                          />
                      
            }} />
            <Route path="/product/:name/:id"  exact  render={ props => {
                  // console.log("is this suthenticated?", this.state.isAuthenticated);
                 
                      return  <ProductDetails {...props } noerorrpage={this.noerorrpage} 
                          items={this.state.items} sendcartItem={this.handleAddToCart}  checkChart={this.checkChart}
                          user={this.state.user} logout={this.logout} isAuthenticated={this.state.isAuthenticated}  
                          organizers404={this.state.organizers404}
                   />
                      
            }} />
           {/* <Route path='item/:id' component={ItemContainer} /> */}
          {/* <Route path="/login" component={Login}/> */}
              <Route exact path="/login"    render ={props =>{
                  if(this.state.errorAuth || !this.state.isAuthenticated){
                    if(this.state.pageLoading === false){
                        return   <Home     noerorrpage={this.noerorrpage} />
                    }else{
                          return   <Login {...props} isAuthenticated={this.state.isAuthenticated} 
                    error={this.state.error} setGlobalAuthState={this.setGlobalAuthState}
                    checkUsercodition={this.checkUsercodition}
                    noerorrpage={this.noerorrpage}
                    organizers404={this.organizers404} 
                    setGlobalUser={this.getUser} 
                    setGlobalorganizers={this.setGlobalorganizers}
                    setGlobalpayer={this.setGlobalpayer}
                    />
                    }
                  
                    
                  }else
                    return    <Redirect to={{    pathname: `${'/profile'}`  }}/>
                  } }/>

                    {
                    !this.state.noerorrpage ?
                    <Route  exact path="*" component={Page404}/>
                    :
             <div></div>
                    }

              <Route path="/register"  exact  render={ props => {
                      // console.log("is this suthenticated?", this.state.isAuthenticated);
                          return  <Register {...props } noerorrpage={this.noerorrpage} 
                                     organizers404={this.state.organizers404}  setGlobalwallet={ this.setGlobalwallet}
                              />      
                  }} />
         
          <Route path="/tracking" component={Tracking}/>

        </div>
        <Footer/>
      </Router>

    
  
   );
  }
}

export default App;



