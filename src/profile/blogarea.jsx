import React, { Component } from 'react';
import "./profile.css"
class  BlogArea extends Component {


  render(){  
    return (
       
           <section class="blog_area single-post-area p_120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 posts-list">
                            <div class="row">
                                <div class="col-md-6">
                                    <div className="profile-page-details">
                                        <div className="profile-page-details-title">
                                          <i class="fas fa-pen profile-page-details-font"></i> <h4 >ACCOUNT DETAILS</h4>
                                        </div>
                                        
                                          
                                          <h4>chuks judge </h4> 
                                        <hr/>
                                          <h5> judgechuks@gmail.com</h5>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                  <div className="profile-page-details">
                                     <div className="profile-page-details-title">
                                          <i class="fas fa-pen profile-page-details-font"></i> <h4 >ADDRESS BOOK</h4>
                                     </div>

                                     Your default shipping address:
                                        judge chuks

                                        location gt bank. PORTHARCOURT-ADA GEORGE Rivers

                                        GT BANK LOCATION

                                        PORTHARCOURT-BORI CAMP, Rivers

                                        +234 8139582152
                                    </div>    
                                </div>
                            </div>
                        </div>
                           
                        <div class="col-lg-4">
                            <div class="blog_right_sidebar">
                         
                               
                               
                                <aside class="single_sidebar_widget post_category_widget">
                                    {/* <h4 class="widget_title">Post Catgories</h4> */}
                                    <ul class="list cat-list">
                                        <li>
                                            <a  class="d-flex justify-content-between">
                                                <p>Wallet</p>
                                                <p>jnu8g04589h9045u0g9nu4gh9</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a  class="d-flex justify-content-between">
                                                <p><i class="fab fa-btc"></i></p>
                                                <p>59.484948859094</p>
                                            </a>
                                        </li>
                                       
                                        {/* <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Fashion</p>
                                                <p>59</p>
                                            </a>
                                        </li>
                                        */}
                                      
                                    </ul>
                                    {/* <div class="br"></div>/ */}
                                </aside>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
    
    );
  }
}

export default BlogArea;
