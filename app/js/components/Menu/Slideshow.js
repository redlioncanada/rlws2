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

		var border = !!this.props.borderSrc ? (
			<div className="border">
				<img src = {this.props.borderSrc} />
			</div>
		) : ''

		return (
			<div className="slideshow subcomponent">
				{border}

				<div className="images">
					{images}
				</div>
			</div>
		)
	}
}