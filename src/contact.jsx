import React, { Component } from 'react';

import Banner from './contact/banner';

import FormArea from './contact/formarea';


class   Contact extends Component {


  constructor(props) {
		super(props);
		this.state = {
            quantity: 1,
            noerorrpage:true
	     	}
        }

        componentDidMount(){
         
            this.props.noerorrpage(this.state.noerorrpage)
        }
     

        render(){
          return (
            <react-fragment> 
                <Banner/>
                <FormArea/>
            </react-fragment>
          );

        }
  
}

export default Contact;
