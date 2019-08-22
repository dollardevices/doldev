import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
class ProductDescriptionArea  extends Component {

    constructor(props){
        super(props)
        this.state ={
            rating: 1
          
        }
        // this.data1()
       
    }

    onStarClick=(nextValue, prevValue, name)=> {
        this.setState({rating: nextValue})
        // console.log("rating page", this.state.rating)
      }
     
  render(){
    // console.log("data review ===--->", this.props.reviwes.reviewcommet)
    const { rating } = this.state;

  return (
    <react-fragment>
       <section class="product_description_area">
       {/* <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <StarRatingComponent 
          name="rate2" 
          editing={false}
        
          starCount={10}
          value={8}
        />
      </div> */}

       {
            this.props.stock ?
            <div class="container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                        
                            {
                                this.props.stock.description ?
                                 <p>  {this.props.stock.description}</p>
                              :
                                <p></p>
                            }
                      
                        
                        
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="table-responsive">
                            
                        {
                                this.props.stock.features ?
                                 <p>  {this.props.stock.features}</p>
                              :
                                <p></p>
                            }
                      
                        </div>
                    </div>
                    {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="comment_list">
                                    <div class="review_item">
                                        <div class="media">
                                            <div class="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt=""/>
                                            </div>
                                            <div class="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a class="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                    <div class="review_item reply">
                                        <div class="media">
                                            <div class="d-flex">
                                                <img src="img/product/single-product/review-2.png" alt=""/>
                                            </div>
                                            <div class="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a class="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                    <div class="review_item">
                                        <div class="media">
                                            <div class="d-flex">
                                                <img src="img/product/single-product/review-3.png" alt=""/>
                                            </div>
                                            <div class="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a class="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="review_box">
                                    <h4>Post a comment</h4>
                                    <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Full name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="number" name="number" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 text-right">
                                            <button type="submit" value="submit" class="btn submit_btn">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row total_rate">
                                    <div class="col-6">
                                        <div class="box_total">
                                            <h5>Overall</h5>
                                            <h4>5.0</h4>
                                            <h6>(03 Reviews)</h6>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="rating_list">
                                            <h3>Based on 3 Reviews</h3>
                                            <ul class="list">
                                                <li><a href="#">5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                <li><a href="#">4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                <li><a href="#">3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                <li><a href="#">2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                                <li><a href="#">1 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {
                                   this.props.reviwes.reviewcomment ?
                                        <div class="review_list">
                                         {
                                                this.props.reviwes.reviewcomment.map(data => {
                                                    return (
                                                        <div class="review_item">
                                                            <div class="media">
                                                                <div class="d-flex">
                                                                    {/* <img src="img/product/single-product/review-1.png" alt=""/> */}
                                                                    <i class="fas fa-user puduct-commet-font" ></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    <h4>{data.name}</h4>
                                                                    <StarRatingComponent 
                                                                    name="rate2" 
                                                                    editing={false}
                                                                    
                                                                    starCount={data.star}
                                                                    value={8}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p> {data.comment}</p>
                                                        </div>

                                                    )
                                                })
                                            }
                                            
                                        
                                      
                                        
                                    </div>
                                    :
                                    <div></div>

                              }
                               
                            </div>
                            <div class="col-lg-6">
                                <div class="review_box">
                                    <h4>Add a Review</h4>
                                    <p>Your Rating:</p>
                                    <ul class="list">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                    </ul>
                                    <p>Outstanding</p>
                                    <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Full name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="number" name="number" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" name="message" id="message" rows="1" placeholder="Review"></textarea>
                                            </div>
                                        </div>
                                        {/* <div class="col-md-12 text-right">
                                            <button type="submit" value="submit" class="btn submit_btn">Submit Now</button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
               
            </div>
             :
             <p></p>
             }
        </section>
    </react-fragment>
  );
 }
}

export default ProductDescriptionArea;
