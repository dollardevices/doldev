import React from 'react';
// import Header from './statics/header';
import Banner from './register/banner';
import FormArea from './register/formarea';

// import Footer from './statics/footer';
  
class Register extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        domain: "https://dollardeviceback.herokuapp.com/api", 
        isAuthenticated : false,
        country : [],
        region : [],
        products : [],
        total : "",
        noerorrpage :true
        }
    }  

componentDidMount(){
 this.props.noerorrpage(this.state.noerorrpage)
   // console.log("url===--->", this.state.domain)
   
   
  }

  // rederet=()=>{
  //   this.props.history.push("/checkout")
  // }

  setGlobalwallet=(data)=>{
    this.props.setGlobalwallet(data)
    this.props.history.push("/checkout")
    // console.log("data--=-0--0000==---> register", data)
  }



  render(){
    return (
        <react-fragment>
            {/* <Header/>   */}
            <Banner />
            <FormArea setGlobalwallet={this.setGlobalwallet} rederet={this.rederet}/>
            
            {/* <Footer/> */}
        </react-fragment>
    );
  }
}

export default Register;
