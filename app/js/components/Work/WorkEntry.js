import React from 'react'
require('./WorkEntry.scss')
import Sizzle from 'sizzle'
import Utils from '../../services/Utils'
var Velocity = require('velocity-animate')
import Service from '../../services/Service'

export class WorkEntry extends React.Component {
	defaultProps() {
		return {
			backgroundColor: '#FFF',
			title: 'Red Lion ravages competition',
			description: 'as a Red Lion should',
			link: false,
			cta: false,
			isHeader: false,
			iconSrc: false,
			hoverSrc: false,
			entryClicked: false,
			isSelected: false,
			loaded: false
		}
	}

	constructor() {
		super()
		this.resizeRef = Utils.debounce(this.handleResize.bind(this), 50)
		window.addEventListener('resize', this.resizeRef)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.loaded === false && this.props.loaded === true) {	//loaded
			this.handleResize()
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeRef)
	}

	render() {
		var innerContent

		let showHoverContainer = Service.Device().isMobile() ? 'none' : 'block'

		if (!!this.props.isHeader) {
			innerContent = (
				<div className="header">
					<div className="title">{this.props.title}</div>
					<div className="divider"></div>
				</div>
			)
		} else {
			innerContent = (
				<div className="content" onClick={()=>{this.handleClick()}}>
					<div className="title">{this.props.title}</div>
					<img className="icon" src={this.props.iconSrc} />
					<div className="hover-container" style={{display: showHoverContainer}}>
						<img className="hover" src={this.props.hoverSrc} />
					</div>
				</div>
			)
		}

		var style = {backgroundColor: this.props.backgroundColor}

		return (
			<div ref="this" className="workentry subcomponent">
				<div ref="inner">
					<div style={style}>{innerContent}</div>
				</div>
			</div>
		)
	}

	handleClick() {
		if (!!this.props.entryClicked) this.props.entryClicked(this.props.index)
	}

	handleResize() {
		var padding = {
			left: Number(window.getComputedStyle(this.refs.inner, null).getPropertyValue('padding-left').replace('px','')) || 0,
			right: Number(window.getComputedStyle(this.refs.inner, null).getPropertyValue('padding-right').replace('px','')) || 0
		}
		var width = this.refs.this.offsetWidth
		if (this.lastWidth && this.lastWidth == width) return

		if (!(typeof width === 'undefined' || width == 0)) {
			if (!!this.resizeTimeout) clearTimeout(this.resizeTimeout)
			// width -= padding.left && padding.right ? Math.max(padding.left, padding.right) : padding.left || padding.right
			this.lastWidth = width
			Velocity(this.refs.this, {height: width-1}, {duration: 0})
		} else {
			if (!this.resizeTimeout) {
				this.resizeTimeout = setTimeout(this.handleResize.bind(this), 50)
			}
		}
	}
}