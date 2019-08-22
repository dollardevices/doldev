import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Slider from "react-slick";
class TimerArea extends Component {
   
    // handleClick=(e)=>{
    //     e.preventDefault();
    //   this.props.clickCart(this.props.data)
    // }
    
	constructor(props) {
		super(props);
		this.state = {
            quantity: 1,
            
		}
    }

    
    

  render(){
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }  
    
    return (
        <react-fragment> 
            <section class="timer_area">
                <div class="container">
                {/* <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                                <img src="https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg" />
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                     </Slider> */}
                    <div class="main_title">
                        <h2>Exclusive Hot Deal Ends Soon!</h2>
                        <p>Who are in extremely love with eco friendly system.</p>
                        <a class="main_btn" href="#">Shop Now</a>
                    </div>
                   
{/* 
                    <Countdown
    date={Date.now() + 1000000000000000000000}
    renderer={renderer} */}

                    <div class="timer_inner">
                     
                        <div id="timer" class="timer" style={{opacity: "1"}}>
                            <div class="timer__section days">
                                <div class="timer__number">09</div>
                                <div class="timer__label">days</div>
                            </div>
                            <div class="timer__section hours">
                                <div class="timer__number">17</div>
                                <div class="timer__label">hours</div>
                            </div>
                            <div class="timer__section minutes">
                                <div class="timer__number">13</div>
                                <div class="timer__label">Minutes</div>
                            </div>
                            <div class="timer__section seconds">
                                <div class="timer__number">11</div>
                                <div class="timer__label">seconds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </react-fragment>
      );
  }  
 
}

export default TimerArea;



const Completionist = () => <span>You are good to go!</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} :{hours}:{minutes}:{seconds}</span>;
  }
};