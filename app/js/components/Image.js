import React from 'react'

export class Image extends React.Component {
	constructor() {
		super()
		this.hiresFiletypes = ['jpg', 'png']
	}

	render() {
		return (
			<img className="image" src={this.getSrcUrl()} srcSet={this.getSrcUrl() +", " + this.props.src+ " 600w"} alt={this.props.alt} />
		)
	}//render

	getSrcUrl() {
		if (this.hasHiRes()) {
			var index = this.props.src.lastIndexOf('.')
			return this.props.src.slice(0, index) + "@2x" + this.props.src.slice(index)
		} else {
			return this.props.src
		}
	}

	hasHiRes() {
		return this.hiresFiletypes.filter((item) => {
			return this.props.src.indexOf(item) > -1
		}).length
	}
}