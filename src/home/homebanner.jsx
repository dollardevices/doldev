import React from 'react';


function HomeBanner() {
  return (
    <react-fragment>  
        <section className="home_banner_area">
            <div className="banner_inner d-flex align-items-center" style={{background:"#e5ecee"}}>
                <div className="container">
                    <div className="banner_content row">
                        <div className="col-lg-5">
                            <h3>SHOP  WITH US<br /></h3>
                            {/* <p> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> */}
                            <a className="white_bg_btn" href="/shop">View Collection</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="halemet_img">
                                <img src="https://res.cloudinary.com/easywaya/image/upload/v1563704384/logo-do1_ypouxu.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </react-fragment>
  );
}

export default HomeBanner;
