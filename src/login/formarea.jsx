import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import  AuthService  from "../api/authentication.js";
import "./login.css"

// function Banner() {

  const Auth = new AuthService();
export default class FormArea extends React.Component {
    constructor(props){
        super(props)
        this.state ={
           domain: 'http://localhost:4000/api',    
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
    // this.props.noerorrpage(this.state.noerorrpage)
     // console.log("url===--->", this.state.domain)
     
    }
  
   
     signIn = (event)=>{
        this.setState({
            loading : true
        })
         event.preventDefault()
         console.log("headchange", this.email.value, this.password.value )
         console.log("data to string")
           var email =    this.email.value.toLowerCase();
           var emailString = email.toString()
       
         const login ={
             username :  emailString ,
             password :this.password.value,
             "strategy":"local"
  
         }
         const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
             body: JSON.stringify(login),
         };
         console.log("requestOptions",requestOptions)
         fetch(this.state.domain+"/login", requestOptions)
         .then(res => res.json())
         .then((result)=>{
              console.log("res", result)
             if(result.status === "error"){
                 console.log("res", result.code)    
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
              console.log("data" , requestOptions1,)
              return fetch(this.state.domain+"/users/"+ Auth.getProfile().id, requestOptions1 )
              .then(res => res.json())
              .then(res => {
                 //  console.log("res getting user data", res);
                  if(res){
                    if(res){
                        const login ={
                            email :  res.email,
                            password : res.givename,
                            "strategy":"local"
                  
                        }
                            const requestOptions1 = {
                              method: 'POST',
                              headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken() }, 
                              body: JSON.stringify(login),  
                          };
                          // console.log("data -------> setGlobalpayer--->1", result)
                          fetch("http://localhost:3030/authentication", requestOptions1)
                              .then(res => res.json())
                              .then((res)=>{
                                 console.log("data -------> setGlobalpayer--->4", res)
                                 Auth.setToken2(res.accessToken) ;
                                  this.props.setGlobalwallet(res);
                                    this.state({
                                    paymentItem:res
                                  })
                                //  this.props.history.push("/checkout")
                              }).catch( (error) => {
                          })  
                        //   this.props.rederet()
                        // this.props.history.push('/product-checkout');
                        // this.props.history.replace('/product-checkout');
                 
                      }
                     // console.log("res getting user data 2", res);
                    //   this.props.rederet()
                     // this.props.history.push('/product-checkout');
                     // this.props.history.replace('/product-checkout');
                    //  this.props.history.push("/product-checkout")
                   }
               })
           }
        
         }).catch( (error) => {
             //  console.log("errro", error);
             //  console.log("error load", error )
         });
       
 }
  
     handleChange=(event)=>{
         console.log("user !", event.target.value)
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
        this.state.isLoggedIn || this.props.isAuthenticated ?
            
        <Redirect to={{    pathname: `${'/profile'}`  }}/>

    :
  
       !this.props.isAuthenticated ? (
        <react-fragment>
           <section class="login_box_area p_120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="login_box_img">
                                <img class="img-fluid" src="img/login.jpg" alt=""/>
                                <div class="hover">
                                <h4 style={{textTransform:"uppercase"}}>New to our Dollar devices?</h4>
                                    {/* <p>There are advances being made in science and technology everyday, and a good example of this is the</p> */}
                                    <Link to={`/register`} className="nav-link main_btn">Create an Account</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="login_form_inner">
                                <h3>Log in to enter</h3>
                                <form onSubmit={this.signIn}  class="row login_form"  id="contactForm" novalidate="novalidate">
                                    <div class="col-md-12 form-group">
                                        <input type="email" class="form-control" 
                                          ref={input=>this.email = input}
                                          onChange={this.handleChange}
                                        id="name" name="email" placeholder="Email"/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input type="password" class="form-control" id="name" name="name"
                                           ref={input=>this.password = input}  onChange={this.handleChange}
                                         placeholder="Password"/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <div class="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                            <label for="f-option2">Keep me logged in</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        {
                                            this. loading ?
                                               <div class="spinner"></div>
                                            :
                                            <button type="submit" value="submit" class="btn submit_btn">Log In</button>
                                        }
                                      
                                         {/* <a href="#">Forgot Password?</a> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </react-fragment>
    )
    :
    <div></div>
    
    );
  }
}

// export default FormArea;
