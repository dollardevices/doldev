import React from 'react';
import  AuthService  from "../api/authentication.js";

// function Banner() {

  const Auth = new AuthService();

  export default class Banner extends React.Component {
    constructor(props){
      super(props)
      this.state ={
         domain: 'https://dollardeviceback.herokuapp.com/api',    
           isLoggedIn:false,
           errormessage : "",
           erorrDiv : false,
           loading : false,
           submitIftrue : true,
           noerorrpage :  true,
           organizers404 : false
      }
      
  }

 
  componentDidMount(){
  //  this.props.noerorrpage(this.state.noerorrpage)
   // console.log("url===--->", this.state.domain)
   
  }

 
   signIn = (event)=>{
       event.preventDefault()
    //    console.log("headchange", this.email.value, this.password.value )
       this.setState({
           loading : true
       })
       const login ={
           username : this.email.value,
           password :this.password.value,
           "strategy":"local"

       }
       const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
           body: JSON.stringify(login),
       };
    //    console.log("requestOptions",requestOptions)
       fetch(this.state.domain+"/login", requestOptions)
       .then(res => res.json())
       .then((result)=>{
            // console.log("res", result)
           if(result.status === "error"){
            //    console.log("res", result.code)    
               this.setState({
                   errormessage:"Invalid Email or Password ",
                   erorrDiv : true,
                   loading : false
               })
               this.timeout()
           }else if(Auth.loggedIn){
                Auth.setToken(result.token) ;
               const requestOptions1 = {
                   method: 'GET',
                   headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization':   Auth.getToken() },
                   
               };
            // console.log("data" , requestOptions1,)
               return fetch(this.state.domain+"/users/"+ Auth.getProfile().id, requestOptions1 )
               .then(res => res.json())
               .then(res => {
                //    console.log("res getting user data", res);
                   if(res.code !== 400){
                               this.props.setGlobalAuthState();
                               this.props.setGlobalUser(res);
                               this.props.organizers404(this.state.organizers404)
                               this.props.history.replace('/dashboard');
                       }
                })
            }
         
       }).catch( (error) => {
           //  console.log("errro", error);
           //  console.log("error load", error )
        });
     
   }

   handleChange=(event)=>{
    //    console.log("user !", event.target.value)
       this.setState({
               model: event.target.value
       })

   }

   timeout() {
       setTimeout(function() {
           this.setState({
               erorrDiv : false
           })
       //   console.log(this.state.noticeshow);
       }.bind(this), 4000);
   }

   isEmpty=(val)=>{
       return (val === undefined || val === null || val.length <= 0) ? true : false;
   
 
    }
    render(){  
        return (
          <react-fragment> 
              <div class="banner_area banner_edit" >
                    <div class="banner_inner d-flex align-items-center " style={{backgroundImage: "url(" +  "https://png.pngtree.com/thumb_back/fw800/back_pic/04/31/17/295842344eb2749.jpg" + ")"}}   >
                        <div class="container">
                            <div class="banner_content text-center">
                                <h2>Product Checkout</h2>
                                {/* <div class="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="checkout.html">Checkout</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            {/* <section class="banner_area">
              <div class="banner_inner d-flex align-items-center">
                  <div class="container">
                      <div class="banner_content text-center">
                          <h2>Shop Category Page</h2>
                          <div class="page_link">
                              <a href="index.html">Home</a>
                              <a href="category.html">Shop</a>
                              <a href="category.html"></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}

          </react-fragment>
        );
      }
  }

// export default Banner;
