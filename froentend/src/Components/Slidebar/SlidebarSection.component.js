import {Component} from 'react' 
// import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    slidesPerRow:1
  };
// import "react-image-gallery/styles/css/image-gallery.css";

// import Slider from "react-slick";
// var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4
//   };

const slides = [
  { image: 'http://localhost:3000/assets/images/slider/1.jpg'},
  { image:'http://uren.demo.towerthemes.com/image/cache/catalog/slider/slider2-store1-1770x617.jpg'}
];
class SlidebarSection extends Component{
     render(){ 
     	return (
			<>

			<div className="popular-search_area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="popular-search">
								<label>Popular Search:</label> <a href="javascript:void(0)">Brakes &amp; Rotors,</a> 
								<a href="javascript:void(0)">Lighting,</a> 
								<a href="javascript:void(0)">Perfomance,</a> 
								<a href="javascript:void(0)">Wheels &amp; Tires</a> 
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<Slider {...settings}>

			<div className="uren-slider_area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="main-slider slider-navigation_style-2 slick-initialized slick-slider slick-dotted">
								
								<div className="slick-list draggable" style={{height: '617px'}}>

									<div className="slick-track" style={{opacity: '1', width: '2588px'}}>
										<div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '100%', position: 'relative', left: '0px', top: '0px', zIndex: '999', opacity: '1'}} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
											
											<div>
												<div className="single-slide animation-style-01 bg-1" style={{width: '100%' ,display: 'inlineBlock'}}>
													<div className="slider-content"> <span>New thinking new possibilities</span>
														<h3>Car interior</h3>
														<h4>Starting at <span>$99.00</span></h4>
														<div className="uren-btn-ps_left slide-btn"> <a className="uren-btn" href="shop-left-sidebar.html" tabindex="0">Read More</a> </div>
													</div>
												</div>
											</div>
										</div>
										<div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '1294px', position: 'relative', left: '-1294px', top: '0px', zIndex: '998' ,opacity: '0' ,transition: 'opacity 1000ms ease 0s'}} role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" tabindex="-1">
											<div>
												<div className="single-slide animation-style-02 bg-2" style={{width: '100%' ,display: 'inlineBlock'}}>
													<div className="slider-content slider-content-2"> <span className="primary-text_color">Car, Truck, CUV &amp; SUV Tires</span>
														<h3>Wheels &amp; Tires</h3>
														<h4>Sale up to 20% off</h4>
														<div className="uren-btn-ps_left slide-btn"> <a className="uren-btn" href="shop-left-sidebar.html" tabindex="-1">Read More</a> </div>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
								
							</div>
						</div>
					</div>
				</div>
                   			 
			</div>
			<div className="uren-slider_area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="main-slider slider-navigation_style-2 slick-initialized slick-slider slick-dotted">
								
								<div className="slick-list draggable" style={{height: '617px'}}>

									<div className="slick-track" style={{opacity: '1', width: '2588px'}}>
										<div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '100%', position: 'relative', left: '0px', top: '0px', zIndex: '999', opacity: '1'}} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
											
											<div>
												<div className="single-slide animation-style-01 bg-1" style={{width: '100%' ,display: 'inlineBlock'}}>
													<div className="slider-content"> <span>New thinking new possibilities</span>
														<h3>Car interior</h3>
														<h4>Starting at <span>$99.00</span></h4>
														<div className="uren-btn-ps_left slide-btn"> <a className="uren-btn" href="shop-left-sidebar.html" tabindex="0">Read More</a> </div>
													</div>
												</div>
											</div>
										</div>
										<div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '1294px', position: 'relative', left: '-1294px', top: '0px', zIndex: '998' ,opacity: '0' ,transition: 'opacity 1000ms ease 0s'}} role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" tabindex="-1">
											<div>
												<div className="single-slide animation-style-02 bg-2" style={{width: '100%' ,display: 'inlineBlock'}}>
													<div className="slider-content slider-content-2"> <span className="primary-text_color">Car, Truck, CUV &amp; SUV Tires</span>
														<h3>Wheels &amp; Tires</h3>
														<h4>Sale up to 20% off</h4>
														<div className="uren-btn-ps_left slide-btn"> <a className="uren-btn" href="shop-left-sidebar.html" tabindex="-1">Read More</a> </div>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
								
							</div>
						</div>
					</div>
				</div>
                   			 
			</div>
			</Slider>
			
		</>
    	 ) 
    } 
} 
export default SlidebarSection;