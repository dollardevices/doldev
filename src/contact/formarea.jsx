import React, { Component } from 'react';
import "./contect.css"


class  FormArea extends Component {


    constructor(props) {
		super(props);
		this.state = {
          quantity: 1,
          loanData:false,
          message : "",
         ifmessege : false
        }
        
    }

    makePayment = (event)=>{

        event.preventDefault()
    
            this.setState({ 
                loanData:true,
                ifmessege:true,
                message : "Message has be sent"
            });
         this.timeout()
        }  

        timeout() {
            // console.log("data---====--==> 1",data)
            setTimeout(function() {
                this.setState({
                    loanData:false,
                    ifmessege:false,
                })
            //    console.log(this.state.noticeshow);
            }.bind(this), 2300);
        }
    

    render(){
        return (
            <react-fragment>
                <section class="contact_area p_120">
                {this.state.loanData?
                //   <Leader/>
                 <div class="pre-loader">
		        	<div class="loader"></div>
		         </div> 
                  :
                  <div></div>
               }
                    <div class="container contact-body-full" >
                    
                  <h1 class="bd-title" id="content">About</h1>
                            <p class="bd-lead">
                            Dollar Devices was founded in 2008.  
    
                                We are a leading enterprise and purchasing agent of mobile phones and laptops including latest Apple devices.
    
                                We are located in, Guangzhou City, China.The largest market for mobile phone spare parts is nearby, so we can get the latest information in the markets everyday. 
    
                                This year, we decided to launch our products into North American market (U.S and Canada) as well as some european countries (Ireland, U.K) and also Australia! Our goal is to sell brand new and refurbished Apple products at competitive market prices!
    
                                Our used products are tested individually before shipping and new devices remain in pristine condition. All of our products have our stamp (JX). This makes sure all the items you buy from us have a warranty. We offer replacements or full money back guarantee on all of our products.
    
                                If you have any question, feel free to send us an email on. 
                            </p>
    
            
                        {/* <div id="mapBox" class="mapBox" data-lat="40.701083" data-lon="-74.1522848" data-zoom="13" data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia." data-mlat="40.701083" data-mlon="-74.1522848">
                        </div> */}
                        <div class="row contact_info-body">
                            <div class="col-lg-3">
                                <div class="contact_info ">
                                    <div class="info_item">
                                        <i class="lnr lnr-home"></i>
                                        <h6>
                                        7c, Baisha technology industrial park, No.3011 Shahe west road, Nanshan district.

                                            ShenZhen,Guangdong

                                            China (Mainland)
                                        </h6>
                                        {/* <p>Santa monica bullevard</p>/ */}
                                    </div>
                                    <br/>
                                    <div class="info_item">
                                        {/* <i class="lnr lnr-phone-handset"></i> */}
                                        {/* <h6><a href="#">00 (440) 9865 562</a></h6> */}
                                        {/* <p>Mon to Fri 9am to 6 pm</p> */}
                                           <h6>Store Hours</h6>
                                              Sunday: 7AM - 10PM
                                              Monday : 7AM - 10PM
                                            Tuesday: 7AM - 10PM
                                           Wednesday: 7AM - 10PM
                                            Thursday: 7AM - 10PM
                                            Friday: 7AM - 10PM
                                            Saturday : 7AM - 10PM

                                    </div>
                                    <div class="info_item">
                                        <i class="lnr lnr-envelope"></i>
                                        <h6><a href="#">admin@dollardevices.com</a></h6>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <form class="row contact_form" onSubmit={this.makePayment}  method="post" id="contactForm" novalidate="novalidate" required>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email" name="email"  placeholder="Enter email address" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" id="message" rows="1" placeholder="Enter Message" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-right">
                                        {
                                          this.state.ifmessege ? 
                                            <p> { this.state.message }</p>
                                            :
                                            <button class="btn submit_btn">Send Message</button>
                                        }
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </react-fragment>
        );
    }    
    
}

export default FormArea;
