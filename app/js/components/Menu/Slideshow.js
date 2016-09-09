import React from 'react'
import Image from '../Image'
require('./Slideshow.scss')

export class Slideshow extends React.Component {
	defaultProps() {
		return {
			borderSrc: '',
			src: []
		}
	}

	render() {
		var images = this.props.src.map((item, key) => {
			var style = {opacity: key == 0 ? 1 : 0}
			return (
				<Image
					key = {key}
					src = {item}
					style = {style}
				/>
			)
		})

		return (
			<div className="slideshow subcomponent">
				<div className="border">
					<img src = {this.props.borderSrc} />
				</div>

				<div className="images">
					{images}
				</div>
			</div>
		)
	}
}