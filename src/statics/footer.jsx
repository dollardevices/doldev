import React from 'react';


function Footer() {
  return (
    <react-fragment> 
        <footer class="footer-area" style={{background: "#0dda8b" }}>
            <div class="container" >
                <div class="row" >
                    <div class="col-lg-3  col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">About Us</h6>
                            <p>
                                    Dollar Devices was founded in 2008.  

                                    We are a leading enterprise and purchasing agent of mobile phones and laptops including latest Apple devices.

                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6 class="footer_title">Newsletter</h6>
                            <p>Stay updated with our latest trends</p>
                            <div id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative" novalidate="true">
                                    <div class="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email" />
                                        <button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button>
                                    </div>
                                    <div class="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget instafeed">
                            <h6 class="footer_title">Instagram Feed</h6>
                            <ul class="list instafeed d-flex flex-wrap">
                                <li><img src="img/instagram/Image-01.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-02.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-03.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-04.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-05.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-06.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-07.jpg" alt=""/></li>
                                <li><img src="img/instagram/Image-08.jpg" alt=""/></li>
                            </ul>
                        </div>
                    </div> */}
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget f_social_wd">
                            <h6 class="footer_title">Follow Us</h6>
                            <p>Let us be social</p>
                            <div class="f_social">
                                <a href="https://web.facebook.com/dollardevices/" target="_blank"><i class="fa fa-facebook"></i></a>
                                 <a href="https://twitter.com/devices_dollar" target="_blank"><i class="fa fa-twitter"></i></a>
                                {/*<a href="#"><i class="fa fa-dribbble"></i></a>
                                <a href="#"><i class="fa fa-behance"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row footer-bottom d-flex justify-content-between align-items-center">
                    <p class="col-lg-12 footer-text text-center">
                        
                        Copyright ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>2018 All rights reserved 
                    
                    </p>
                </div>
            </div>
        </footer>
    </react-fragment>
  );
}

export default Footer;
