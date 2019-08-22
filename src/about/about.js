import React, { Component } from 'react';

class  About extends Component {

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
              <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                        <div class="banner_content text-center">
                            <h2>About us</h2>
                            {/* <div class="page_link">
                                <a href="index.html">Home</a>
                                <a href="contact.html">Contact Us</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact_area p_120">
                <div class="container">
                
            <h1 class="bd-title" id="content">About</h1>
            <p class="bd-lead">
            Dollar Devices was founded in 2008.  

                We are a leading enterprise and purchasing agent of mobile phones and laptops including latest Apple devices.

                We are located in, Guangzhou City, China.The largest market for mobile phone spare parts is nearby, so we can get the latest information in the markets everyday. 

                This year, we decided to launch our products into North American market (U.S and Canada) as well as some european countries (Ireland, U.K) and also Australia! Our goal is to sell brand new and refurbished Apple products at competitive market prices!

                Our used products are tested individually before shipping and new devices remain in pristine condition. All of our products have our stamp (JX). This makes sure all the items you buy from us have a warranty. We offer replacements or full money back guarantee on all of our products.

                If you have any question, feel free to send us an email on. 
            </p>
          {/* <script async="" src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&amp;placement=getbootstrapcom" id="_carbonads_js"></script><div id="carbonads"><span><span class="carbon-wrap"><a href="https://srv.carbonads.net/ads/click/x/GTND42QNCEYIP2Q7CAB4YKQMCYBD4K3UCW7DTZ3JCWSDVK3MC6SIVKQKC6BIK23JCAYI6K3EHJNCLSIZ?segment=placement:getbootstrapcom;" class="carbon-img" target="_blank" rel="noopener"><img src="https://cdn4.buysellads.net/uu/1/41369/1551198561-Adobe_Stock_260x200.jpg" alt="ads via Carbon" border="0" height="100" width="130" style="max-width: 130px;"/></a><a href="https://srv.carbonads.net/ads/click/x/GTND42QNCEYIP2Q7CAB4YKQMCYBD4K3UCW7DTZ3JCWSDVK3MC6SIVKQKC6BIK23JCAYI6K3EHJNCLSIZ?segment=placement:getbootstrapcom;" class="carbon-text" target="_blank" rel="noopener">Limited time offer: Get 10 free Adobe Stock images.</a></span><a href="http://carbonads.net/?utm_source=getbootstrapcom&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener">ads via Carbon</a></span></div> */}

             <h2 id="team"><span class="bd-content-title">Team<a class="anchorjs-link " href="#team" aria-label="Anchor" data-anchorjs-icon="#" style={{paddingLeft: "0.375em"}}></a></span></h2>

                        <p> 
                        [Last Updated July 23, 2019]
                        Welcome to Dollar Devices. The dollardevices.com website, Dollar Devices mobile website site is the "Dollar Devices property”.  By using any Dollar Devices Property and its related services, products, and software, you agree to be bound by these terms and conditions ("Terms"). You also accept the Terms when you create an account, make a purchase as a guest, or log in to any Dollar Devices Property. Additional or separate terms may apply to your interactions with other Dollar Devices websites, Dollar Devices or Dollar Devices® locations, and to your use of individual services or features available on a Dollar Devices Property, such as reviews. To the extent that the provisions of any additional terms conflict with these Terms, the provisions of the additional terms will govern. References to "Dollar Devices," "Dollar Devices," “Magnolia,” “Magnolia Home Theater,” “Magnolia Design Center,” "our," "we," or "us" may refer to Dollar Devices Co., Inc., BestBuy.com, LLC, Dollar Devices Stores, L.P., BBY Solutions, Inc., Dollar Devices Enterprise Services, Inc., Magnolia Hi-Fi, LLC, and their affiliates, subsidiaries, and designees. We may make changes to any Dollar Devices Property and the Terms. It is your responsibility to review the Terms for updates or changes. If you do not agree with the Terms, you should not use the Dollar Devices Properties.
                        Use of the Dollar Devices Properties
                        You may use the Dollar Devices Properties for your personal, noncommercial use only. You may not use any Dollar Devices Property if you are under the age of 13. If you are between the ages
                        </p>
             
                   <p><b>* </b>Privacy :
                   Your use of the Dollar Devices Properties is subject to our Privacy Policy. Please review the policy for more on how we collect and use information.
                    Information on Our Site
                    We try to be as accurate as possible with the information we present on the Dollar Devices Properties. We will make reasonable efforts to accurately display the attributes of the products we sell. We do not warrant that product descriptions or other content is accurate, complete, or error free. Prices and promotions are subject to change, and may vary from those offered in our stores. We cannot confirm the availability or price of an item until you place your order. Despite our best efforts, sometimes an item in our catalog may not be available, the offer may have been misstated, or an item may be mispriced. For any of these reasons, we may cancel your order or we may contact you for instructions on the order.
                    Paying for Your Order
                    Generally, we'll charge your payment method for an item when we ship the item to you or confirm its availability in store. However, we may preauthorize your order amount with your credit card, credit account, or debit card issuer at the time you place the order, which may have an effect on your available credit line. When you pre-order with a debit card, we'll debit your card when you place the pre-order. For special delivery items, we'll charge your payment method when you confirm a delivery time. For digital items, we'll charge your payment method when you initiate the download of the product or the product is placed in your account and available for use.
                   </p>

                   
                   <p><b>* </b>Order Confirmation :  
                     Our order confirmation to you does not signify our acceptance of your order, nor does it constitute confirmation of our offer to sell. At any time after receipt of your order, we may accept, decline, or place quantity or other limits on your order for any reason. We may impose these limits on a per-person, per-household, per-order, or any other basis. If we reject, limit, or otherwise modify your order, we will attempt to notify you using the email address you provide to us. If we cancel an order or part of an order that we've already charged you for, we'll refund you the full amount of the canceled portion of the order.
                    My Dollar Devices® Program
                    When you create an account on a Dollar Devices Property, we will automatically enroll you in the My Dollar Devices program. The My Dollar Devices program is a free program in which you receive points toward reward certificates, which are coupons for discounts on future purchases at Dollar Devices. See My Dollar Devices program terms.
                   </p>

                   <p><b>* </b> Proprietary Rights :
                    All content included on or comprising the Dollar Devices Properties, including information, data, software, photographs, graphs, videos, typefaces, graphics, music, sounds and other material (collectively "Content") is protected by copyright, trademark, patent or other proprietary rights, and these rights are valid and protected in all forms, media and technologies existing now or developed in the future. All Content is protected as a collective work under U.S. and international copyright laws, and Dollar Devices owns, to the fullest extent allowed by such laws, the copyright in the selection, coordination, arrangement, and enhancement of all Content. You may not remove or modify any copyright, trademark or other proprietary notice contained in any Content you use, and you may not modify or alter the Content, copy or post the Content on any network computer, or broadcast the Content in any media. You may not copy, scrape, frame, modify, remove, delete, augment, add to, publish, transmit, participate in the transfer or sale, lease or rental of, create derivative works from or in any way exploit any of the Content, in whole or in part. The Dollar Devices and Dollar Devices logos and other trademarks on the Dollar Devices Properties are the property of their respective owners and are owned by, licensed to, or, where required, used with permission by Dollar Devices and may not be reproduced, copied, or manipulated in any manner without the express, written approval of the trademark owner.
                    User Generated Content: Reviews, Comments, Communications, and Other Content
                    You may interact with the Dollar Devices Properties in numerous ways, including Reviews and Ratings, videos, Questions and Answers, Community Forums, testimonials, and email communication. You hereby grant Dollar Devices a perpetual, irrevocable, royalty-free, transferable right and license to use, modify, reproduce, transmit, publish, display, delete, and distribute any information (except order information sent via email or phone) or materials you share with us throughout the world in any media, including when you allow Dollar Devices to feature text, images and videos shared through social media (e.g., Facebook™, Twitter™, Instagram™, Pinterest™) or submitted through our Reviews and Ratings. You also grant us the right to use the name and social media handle that you use when you share content with us in connection with that content. When you share content to us, you will disclose any affiliation you have and you will not share anything that contains harmful computer code, references other websites, or is false, misleading, illegal, defamatory, libelous, hateful, racist, biased, threatening, or harassing.
                    Notification of Copyright Infringement Under the Digital Millennium Copyright Act (DMCA)
                    If you believe that your copyrighted material may have been infringed, please provide the Dollar Devices Copyright Agent with the following information in writing:
                    A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed
                    Identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site
                    Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material
                    Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and if available, your email address
                    A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law
                    A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed
                    The Dollar Devices designated agent to receive notifications of claimed infringement can be reached by email
                   </p>

                   <p><b>* </b>Disclaimers and Limitation of Liability : 
                      Dollar Devices PROVIDES THE Dollar Devices PROPERTIES AND ALL INFORMATION, CONTENT, AND OTHER MATERIAL MADE AVAILABLE THROUGH THE Dollar Devices PROPERTIES ON AN “AS IS” AND “AS AVAILABLE” BASIS. WE MAKE NO REPRESENTATION OR WARRANTY THAT ANY Dollar Devices PROPERTY WILL MEET YOUR REQUIREMENTS, OR THAT IT WILL BE UNINTERRUPTED, SECURE, OR ERROR FREE.
                        ANY WARRANTY ON ANY PRODUCT SOLD THROUGH A Dollar Devices PROPERTY IS PROVIDED BY THE MANUFACTURER OF THAT PRODUCT. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, Dollar Devices WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ATTRIBUTABLE TO YOUR USE OF ANY Dollar Devices PROPERTY OR ANY PRODUCT OR SERVICE PURCHASED THROUGH A Dollar Devices PROPERTY. THE LIMITATIONS SET FORTH IN THIS SECTION WILL NOT LIMIT OR EXCLUDE LIABILITY FOR PERSONAL INJURY OR PROPERTY DAMAGE CAUSED BY PRODUCTS YOU PURCHASE THROUGH A Dollar Devices PROPERTY OR Dollar Devices GROSS NEGLIGENCE, INTENTIONAL, WILLFUL, RECKLESS OR MALICIOUS MISCONDUCT, OR FRAUD.
                        Links to Third-Party Websites
                        The Dollar Devices Properties contain links to other sites operated by third parties ("Third-Party Site(s)"). These links are available for your convenience and are intended only to enable access to these Third-Party Sites and for no other purpose. Dollar Devices does not warrant or make any representation about the 
                   </p>

                   <p><b>* </b> Export :
                   Certain software or other materials ("Software") that you may obtain through the Dollar Devices Properties may be further subject to export controls. You will comply with all applicable export and re-export restrictions, laws, and regulations, and you will not transfer, or encourage, assist, or authorize the transfer of any Software to a prohibited country or otherwise in violation of any restriction, law, or regulation.
                   </p>

                   <p><b>* </b>Security :
                   You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to not share your account credentials with others. You may use the Dollar Devices Properties only for lawful purposes. Activities including, but not limited to, tampering with any Dollar Devices Property, misrepresenting the identity of a user, and using buying agents or conducting fraudulent activities, on the Dollar Devices Properties are prohibited.
                        You may not violate or attempt to violate the security of the Dollar Devices Properties, including by, without limitation, (a) accessing data not intended for you or logging on to a server or an account which you are not authorized to access; (b) using any Dollar Devices Property for unintended purposes or trying to change the behavior of any Dollar Devices Property; (c) attempting to probe, scan or test the vulnerability of a system or network or breach security or authentication measures without proper authorization; (d) attempting to interfere with service to any user, host or network, including without limitation via means of submitting a virus to any Dollar Devices Property, overloading, "flooding," "spamming," "mailbombing" or "crashing"; (e) forging any TCP/IP packet header or any part of the header information in any email or newsgroup posting; or (f) forging communications on behalf of Dollar Devices (impersonating Dollar Devices) or to any Dollar Devices Property (impersonating as a legitimate user). You may not send unsolicited or unauthorized email on behalf of Dollar Devices, including promotions and/or advertising of products or services. We may prosecute you to the full extent of the law for any violation of these Terms. You may not use any device, software or routine or data to interfere or attempt to interfere with the proper working of any Dollar Devices Property or any activity being conducted on any Dollar Devices Property. You may not use or attempt to use any engine, software, tool, agent, data or other device or mechanism (including without limitation browsers, spiders, robots, avatars or intelligent agents) to navigate or search any Dollar Devices Property other than the search engine and search agents we provide and generally publicly available browsers.
                   </p>

                   <p><b>* </b>Disputes : 
                   You and Dollar Devices each agree that, except as otherwise noted below, any dispute or claim arising out of or relating in any way to these Terms, or to any products or services sold or distributed by Dollar Devices, whether in store, in your home, over the phone, or online, including, but not limited to, the advertising of or sales practices relating to such products and services, delivery, installation, and any communication, by whatever means, between you and Dollar Devices, will be resolved by binding, individual arbitration, rather than in court. Disputes and claims that are within the scope of a small claims court’s authority are exempt from this dispute resolution provision, so long as they are brought individually.
                    BY AGREEING TO ARBITRATION, YOU AND Dollar Devices UNDERSTAND THAT EACH IS AGREEING TO WAIVE ITS RIGHT TO SUE OR GO TO COURT TO ASSERT OR DEFEND ITS RIGHTS UNDER THIS CONTRACT. THE RULES IN ARBITRATION ARE DIFFERENT. THERE IS NO JUDGE OR JURY. ALTHOUGH REVIEW IS LIMITED, AN ARBITRATOR CAN AWARD ON AN INDIVIDUAL BASIS THE SAME DAMAGES AND RELIEF AS WOULD BE AVAILABLE IN COURT, AND MUST ENFORCE THE SAME LIMITATIONS STATED IN THESE TERMS AS A COURT WOULD.
                    To begin an arbitration proceeding, you must send a demand to the American Arbitration Association (AAA) describing your claim and serve a copy of the demand on our registered agent CT Corporation System, Inc., 100 South Fifth Street, Suite 1075, Minneapolis, MN 55402. The arbitration will be conducted by the AAA under its rules, including the AAA's Supplementary Procedures for Consumer-Related Disputes. The AAA's rules and the form for filing an arbitration claim are available at www.adr.org. Payment of all filing, administration and arbitrator fees will be governed by the AAA's rules. We will reimburse those fees (but not any attorney's fees) for claims totaling less than $10,000 unless the arbitrator determines your claims are frivolous. Likewise, Dollar Devices will not seek attorneys' fees and costs in arbitration unless the arbitrator determines the claims are frivolous. You may choose to have the arbitration conducted by telephone, based on written submissions, or in person in the county where you live or at another mutually agreed upon location.
                    We each agree that any dispute resolution proceedings of any nature or in any forum will be conducted only on an individual basis and not in a class, consolidated or representative action. This means that you may not purport to act on behalf of a class or any other person. Likewise, an arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding. Any claim that all or part of this class action waiver provision is invalid or unenforceable may be determined only by a court and not by an arbitrator. If a court decides that the limitations of this paragraph are deemed invalid or unenforceable, any putative class or representative action must be brought in a court of proper jurisdiction and not in arbitration. If for any reason a claim proceeds in court rather than in arbitration, we each waive any right to a jury trial, unless such waiver is unenforceable. This means that any claim would be decided by a judge, not a jury.
                   </p>

                   <p><b>* </b> Applicable Law : 
                   THE FEDERAL ARBITRATION ACT AND APPLICABLE FEDERAL LAW (OR IN THE ABSENCE OF APPLICABLE FEDERAL LAW, THEN THE LAWS OF THE STATE OF MINNESOTA), WITHOUT REGARD TO PRINCIPLES OF CONFLICT OF LAWS, WILL GOVERN THESE TERMS AND APPLY TO ANY DISPUTES OR CLAIMS BETWEEN YOU AND Dollar Devices.


 
                   </p>

                   
                   <p><b>* </b>Additional Policies : 
                   The following policies also govern your use of the Dollar Devices Properties and are incorporated by reference into the Terms:
                   </p>

                   
                   <p><b>* </b> Termination of Use :
                   We may, in our sole discretion, terminate your account or your use of the Dollar Devices Properties at any time. You are personally liable for any orders that you place or charges that you incur prior to termination. We may change, suspend or discontinue all or any aspects of any Dollar Devices Property at any time without prior notice.

                   </p>
                
                

                {/* <h2 id="history"><span class="bd-content-title">History<a class="anchorjs-link " href="#history" aria-label="Anchor" data-anchorjs-icon="#" style={{paddingLeft: "0.375em;"}}></a></span></h2>

                <p>Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.</p>

                <p>Bootstrap was created at Twitter in mid-2010 by <a href="https://twitter.com/mdo">@mdo</a> and <a href="https://twitter.com/fat">@fat</a>. Prior to being an open-sourced framework, Bootstrap was known as <em>Twitter Blueprint</em>. A few months into development, Twitter held its <a href="https://blog.twitter.com/engineering/en_us/a/2010/hack-week.html">first Hack Week</a> and the project exploded as developers of all skill levels jumped in without any external guidance. It served as the style guide for internal tools development at the company for over a year before its public release, and continues to do so today.</p>

                <p>Originally <a href="https://blog.twitter.com/developer/en_us/a/2011/bootstrap-twitter.html">released</a> on <time datetime="2011-08-19 11:25">Friday, August 19, 2011</time>, we’ve since had over <a href="https://github.com/twbs/bootstrap/releases">twenty releases</a>, including two major rewrites with v2 and v3. With Bootstrap 2, we added responsive functionality to the entire framework as an optional stylesheet. Building on that with Bootstrap 3, we rewrote the library once more to make it responsive by default with a mobile first approach.</p>

                <p>With Bootstrap 4, we once again rewrote the project to account for two key architectural changes: a migration to Sass and the move to CSS’s flexbox. Our intention is to help in a small way to move the web development community forward by pushing for newer CSS properties, fewer dependencies, and new technologies across more modern browsers.</p>

                <h2 id="get-involved"><span class="bd-content-title">Get involved<a class="anchorjs-link " href="#get-involved" aria-label="Anchor" data-anchorjs-icon="#" style={{paddingLeft: "0.375em;"}}></a></span></h2>

                <p>Get involved with Bootstrap development by <a href="https://github.com/twbs/bootstrap/issues/new">opening an issue</a> or submitting a pull request. Read our <a href="https://github.com/twbs/bootstrap/blob/v4.3.1/.github/CONTRIBUTING.md">contributing guidelines</a> for information on how we develop.</p> */}

        
                    {/* <div id="mapBox" class="mapBox" data-lat="40.701083" data-lon="-74.1522848" data-zoom="13" data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia." data-mlat="40.701083" data-mlon="-74.1522848">
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="contact_info">
                                <div class="info_item">
                                    <i class="lnr lnr-home"></i>
                                    <h6>California, United States</h6>
                                    <p>Santa monica bullevard</p>
                                </div>
                                <div class="info_item">
                                    <i class="lnr lnr-phone-handset"></i>
                                    <h6><a href="#">00 (440) 9865 562</a></h6>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                                <div class="info_item">
                                    <i class="lnr lnr-envelope"></i>
                                    <h6><a href="#">support@colorlib.com</a></h6>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 text-right">
                                    <button type="submit" value="submit" class="btn submit_btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </section>
            
        </react-fragment>
      )
  }  
 
}

export default About;
