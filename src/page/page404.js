import React, { Component } from 'react';
  import "./page404.css"
// import  AuthService  from "../api/authentication.js";

// const Auth = new AuthService();
class Page404 extends Component {

    constructor(props){
        super(props)
        
      }
    

    
  componentDidMount(){
   
  }


  
  render() {
      const stylelogo ={
        width:"10px"
      }
    return (
      <div className="">
         <section class="banner_area">
                <div class="banner_inner d-flex align-items-center banner_edit">
                    <div class="container">
                        <div class="banner_content text-center">
                            <h2>Page not found</h2>
                            {/* <div class="page_link">
                                <a href="index.html">Home</a>
                                <a href="cart.html">Cart</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="paga404body">
                <p className="para-page-error">This page isn't available</p>
                <br/>
                
                <p>The link you followed may be broken, or the page may have been removed.</p>

                 <img src="http://res.cloudinary.com/easywaya/image/upload/v1538167691/404_lly1qq.jpg" width="500" />

                 <br/>
                 <br/>
                 <br/>
                 <a href="/home" class="btn submit_btn">Back to home page </a>
            </div>
       
    
      </div>
    );
  }
}

export default Page404 ;




