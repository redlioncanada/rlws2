import React from 'react'
require('./Carousel.scss')
var Slick = require('react-slick')

export class Carousel extends React.Component {
	render() {
		var slides = this.props.slides.map((item, index) => {
			return (
				<div className="carousel-slide" key={index}>
					<a href={item.link} rel="nofollow noopener" target="_blank">
						<img src={item.image}/>
						<div className="copy">
							<div className="container"><p>{item.copy}</p></div>
							<div className="copy-background"></div>
						</div>
					</a>
				</div>
			)
		})
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: true,
			pauseOnHover: true,
			draggable: false,
			touchMove: false
		}
		return (
			<div ref="this" className="carousel component">
				<h4 className="title">{this.props.title}</h4>
				<Slick ref="slick" {...settings}>
					{slides}
				</Slick>
			</div>
		)
	}

	componentDidMount() {
		this.refs.slick.slickGoTo(0)
	}
}