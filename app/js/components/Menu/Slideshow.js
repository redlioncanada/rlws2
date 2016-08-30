import React from 'react'
import Image from '../Image'
require('./Slideshow.scss')

export class Slideshow extends React.Component {
	defaultProps() {
		return {
			borderSrc: '',
			src: [],
			naturalWidth: 0,
			naturalHeight: 0
		}
	}

	render() {
		var images = this.props.src.map((item, key) => {
			var style = {zIndex: key+1}
			return (
				<Image
					key = {key}
					src = {item}
					style = {style}
					naturalWidth = {this.props.naturalWidth}
					naturalHeight = {this.props.naturalHeight}
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