import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  AuthService  from "../api/authentication.js";
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";


const Auth = new AuthService();
 class FormArea extends React.Component {
        constructor(props){
            super(props)
            this.state ={
            //    domain: 'https://dollardeviceback.herokuapp.com/api', 
                domain:'https://dollardeviceback.herokuapp.com/api',   
                 isLoggedIn:false,
                 errormessage : "",
                 erorrDiv : false,
                 loading : false,
                 submitIftrue : true,
                 noerorrpage :  true,
                 organizers404 : false,
                 passwordcom : "",
                 errormesage :false
            }
            
        }
      
       
        componentDidMount(){
            if(Auth.loggedIn()){
                if (!this.setState.isAuthenticated ){
                  this.setState({
                    pageLoading : false
                  })
                  this.setState({
                    isAuthenticated : true,
                    pageLoading : true,
                    errorAuth : false,
                    // platform_admin : res.is_platform_admin,
               
              
                  })
    
                  // console.log("  getProfile()",  Auth.getProfile())
                  const requestOptions = {
                      method: 'GET',
                      headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken() },   
                  };
                  // var email = "admin@peppement.com"
                  return fetch(this.state.domain+"/users/"+ Auth.getProfile().id, requestOptions )
                  .then(res => res.json())
                  .then(res => {
        
                      this.setState({
                        isAuthenticated : true,
                        pageLoading : true,
                        errorAuth : false,
                        // platform_admin : res.is_platform_admin,
                        user : res,
                  
                      })
        
                    return res;
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
        
         
        }
      
       
         signIn = (event)=>{
            this.setState({
                loading : true
            })
             event.preventDefault()
            //  console.log("headchange", this.email.value, this.password.value )
            //  console.log("data to string")
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
             fetch("http://localhost:4000/api"+"/login", requestOptions)
             .then(res => res.json())
             .then((result)=>{
                //   console.log("res", result)
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
                //   console.log("data" , requestOptions1,)
                     return fetch(this.state.domain+"/users/"+ Auth.getProfile().id, requestOptions1 )
                     .then(res => res.json())
                     .then(res => {
                        //  console.log("res getting user data", res);
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
                             this.props.rederet()
                            // this.props.history.push('/product-checkout');
                            // this.props.history.replace('/product-checkout');
                     
                          }
                      })
                  }
               
                }).catch( (error) => {
                 //  console.log("errro", error);
                 //  console.log("error load", error )
             });
           
     }
      
         handleChange=(event)=>{
            //  console.log("user !", event.target.value)
             this.setState({
                     model: event.target.value
             })
      
         }

         passwordconfirChange =(event)=>{
            this.setState({value: event.target.value});
            // console.log("com", this.passwordconfir.value, "password",this.password.value)
            if(this.passwordconfir.value === this.password.value){
                // console.log("conform")
                this.setState({
                    errormesage:false,
                    passwordcom:""
                })
            }else{
                // console.log("not correct")
                this.setState({
                    errormesage:true,
                    passwordcom:"Passwords  confirmation do not match"
                })
                // console.log("not correct" , this.state. passwordcom)
        
            }
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
        if(this.state.isAuthenticated){
            return <Redirect to={'/checkout'} />;
        }else{
            return (
           
                <section class="login_box_area p_120">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="login_box_img">
                                    <img class="img-fluid" src="img/login.jpg" alt=""/>
                                    <div class="hover">
                                        <h4 style={{textTransform:"uppercase"}}>New to our Dollar devices?</h4>
                                        {/* <p>There are advances being made in science and technology everyday, and a good example of this is the</p> */}
                                        <Link to={`/login`} class="main_btn" href="#">Already have an acccount? </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="login_form_inner reg_form">
                                    <h3>Create an Account</h3>
                                    <form onSubmit={this.signIn}  class="row login_form" id="contactForm" novalidate="novalidate">
                                        <div class="col-md-12 form-group">
                                            <input type="text" class="form-control" id="name"
                                                 ref={input=>this.username = input}
                                                 onChange={this.handleChange}
                                            name="name" placeholder="Username" required/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <input type="email" class="form-control" id="email" name="email" 
                                              ref={input=>this.email = input}
                                              onChange={this.handleChange}
                                            placeholder="Email Address" required/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                        <span  className="error-span" style={{"color":"red"}}>{this.state.passwordcom}</span>
                                            <input type="password" class="form-control" id="password"   
                                            ref={input=>this.password = input}  onChange={this.handleChange}
                                            name="password" placeholder="Password" required/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <input type="password" class="form-control" id="pass"
                                              ref={input => this.passwordconfir = input }  
                                              onChange={this.passwordconfirChange}  
                                          
                                             name="pass" placeholder="Confirm password" required/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <div class="creat_account">
                                                <input type="checkbox" id="f-option2" name="selector"/>
                                                <label for="f-option2">Keep me logged in</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            {
                                                    this.state. loading ?
                                                     <div class="spinner"></div>
                                                    :
                                                    <button type="submit" value="submit" class="btn submit_btn">Register</button>
                                            }
                                            
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
          );
        }

    
   }
}


// export default ProductCheckout;
export default FormArea ;
