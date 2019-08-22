import React from 'react';


function Banner() {
  return (
    <react-fragment> 
        <div class="banner_area banner_edit" >
            <div class="banner_inner d-flex align-items-center " style={{backgroundImage: "url(" +  "https://png.pngtree.com/thumb_back/fw800/back_pic/04/31/17/295842344eb2749.jpg" + ")"}}   >
				<div class="container">
					<div class="banner_content text-center">
						<h2>Product Checkout</h2>
						{/* <div class="page_link">
							<a href="index.html">Home</a>
							<a href="checkout.html">Checkout</a>
						</div> */}
					</div>
				</div>
            </div>
        </div>
        {/* <section class="banner_area banner_edit" style={{background:"red"}}>
            <div class="banner_inner d-flex align-items-center">
                <div class="container">
                    <div class="banner_content text-center">
                        <h2>Product Checkout</h2>
                        <div class="page_link">
                            <a href="index.html">Home</a>
                            <a href="checkout.html">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </react-fragment>
  );
}

export default Banner;
