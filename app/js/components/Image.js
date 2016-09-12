import React from 'react'
import LazyImageWrapper from './LazyImage/index'

class Image extends React.Component {
	defaultProps() {
		return {
			src: '',
			width: 0,
			height: 0,
			style: {},
			className: ''
		}
	}

	render() {
		var parent = this.getParentSize()
		var props = {
			...this.props,
			low: this.getLowResUrl(),
			width: !!parent ? parent.width : this.props.naturalWidth,
			height: !!parent ? parent.height : this.props.naturalHeight
		}
		
		return (
			<LazyImageWrapper {...props} style={this.props.style} className={this.props.className} />
		)
	}

	getParentSize() {
		var w = !!this.props.containerWidth ? this.props.containerWidth : undefined
		var h = !!this.props.containerHeight ? this.props.containerHeight : undefined
		var aspect = this.props.naturalWidth / this.props.naturalHeight

		if (!w) return false
		h = w / aspect

		return {
			width: w,
			height: h
		}
	}

	getLowResUrl() {
		var index = this.props.src.lastIndexOf('.')
		return this.props.src.slice(0, index) + "@lowres" + this.props.src.slice(index)
	}
}

export default Image