import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import  AuthService  from "../api/authentication.js";

import Banner from './banner';
import BlogArea from './blogarea';

const Auth = new AuthService();
class  Profile extends Component {


    constructor(props){
        super(props)
        this.state ={
           domain: 'https://shopend007.herokuapp.com/api',  
           noerorrpage :true  
            
        }
        
    }

    
  componentDidMount(){
    // console.log("dash users=====================", this.props.user)
    this.props.noerorrpage(this.state.noerorrpage)
      this.setState({
        user : this.props.user,
        image : this.props.image,
        disableLink : this.props.disable,
        loadingTuition :true,
        Tk:"",
        Fm:"",
        isActive:true,
      })
   
      this.props.noerorrpage(this.state.noerorrpage)
        const requestOptions = {
            method: 'GET', 
            headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,'Authorization': Auth.getToken()  },
        };

    
    this.setState({
     loading:true
    })
  
  }

    



    render(){  
        console.log("data->>.",this.props.isAuthenticated )
        return (
            // <div></div>
            !this.props.isAuthenticated ? (
                //   <div className="hero is-bold is-fullheight">
                //   <div className="level-item">
                //     <a className="button is-loading is-large is-light">Loading</a>
                //   </div>
                //   <div className="level-item">
                //     <span>Trying to login...</span>
                //   </div>
                // </div>
                   <Redirect to={{    pathname: `${'/login'}`  }}/>
                  ) : (

                    <div>
                    <react-fragment>
                                <Banner />
                                <BlogArea />
                            </react-fragment>
                    </div>
                  )

             
        )
    }







}

export default Profile;
