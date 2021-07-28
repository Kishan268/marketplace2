import {Component} from 'react' 
import AwesomeSlider from 'react-awesome-slider'; 
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'; 
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
     { original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/', }, 
      { original: 'https://picsum.photos/id/1015/1000/600/', 
      thumbnail: 'https://picsum.photos/id/1015/250/150/', }, 
      { original: 'https://picsum.photos/id/1019/1000/600/', 
      thumbnail: 'https://picsum.photos/id/1019/250/150/', },
       ];
       
       
class SlidebarSection extends Component{
     render()
     { return (
<>
<div className="popular-search_area">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="popular-search">
						<label>Popular Search:</label> <a href="javascript:void(0)">Brakes &amp; Rotors,</a> <a href="javascript:void(0)">Lighting,</a> <a href="javascript:void(0)">Perfomance,</a> <a href="javascript:void(0)">Wheels &amp; Tires</a> </div>
				</div>
			</div>
		</div>
	</div>
	
	<div className="uren-slider_area">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="main-slider slider-navigation_style-2 slick-initialized slick-slider slick-dotted">
						<button className="slick-prev slick-arrow" style={{display: 'block'}}> <i className="ion-ios-arrow-back"></i> </button>
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
						<button className="slick-next slick-arrow" style={{display: 'block'}}> <i className="ion-ios-arrow-forward"></i></button>
						<ul className="slick-dots" style={{display: 'block'}} role="tablist">
							<li className="slick-active" role="presentation">
								<button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabindex="0" aria-selected="true">1</button>
							</li>
							<li role="presentation" className="">
								<button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabindex="-1">2</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
     ) 
    } 
} export default SlidebarSection;