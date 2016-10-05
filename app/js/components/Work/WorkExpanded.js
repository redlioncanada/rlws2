import React from 'react'
import Image from '../Image'
import Video from '../Video'
var Velocity = require('velocity-animate')
require('./WorkExpanded.scss')

export class WorkExpanded extends React.Component {
	constructor() {
		super()
		this.open = false
	}

	defaultProps() {
		return {
			backgroundColor: '#000',
			description: '',
			link: '',
			cta: '',
			content: '',
			type: 'image'
		}
	}

	render() {
		var contentStyle = {
			borderTop: `2px solid ${this.props.backgroundColor}`,
			borderBottom: `2px solid ${this.props.backgroundColor}`
		}

		var closeStyle = {
			background: this.props.backgroundColor
		}

		var main
		switch(this.props.contentType) {
			case 'image':
				main = (
					<Image className="image main" src={this.props.content} hiddenOnLoad={true} defer={true} />
				)
				break
			case 'video':
				main = (
					<Video className="video main" src={this.props.content} hide={this.open?false:true} />
				)
				break
		}

		var ctaElement = !!this.props.link ? (
			<p>{this.props.cta.replace(' here', '')} <a href={this.props.link} target="_blank" ref="noreferrer nofollow">here</a>.</p>
		) : (
			<p>{this.props.cta}.</p>
		)

		return (
			<div ref="this" className="workexpanded subcomponent">
				<div className="padding-wrapper">
					<div style={contentStyle}>
						<div className="close">
							<div className="close-button" style={closeStyle} onClick={()=>{this.handleCloseClick()}}>
								<img src={this.props.closeSrc} />
							</div>
						</div>
						<div className="content">
							<p>{this.props.description}</p>
							{main}
							{ctaElement}
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.shouldOpen) {
			this.animateOpen()
		} else {
			this.animateClose()
		}
	}

	handleCloseClick() {
		if (typeof this.props.closeClicked === 'function') this.props.closeClicked()
	}

	animateOpen() {
		this.open = true
		if (!this.height) this.height = this.refs.this.scrollHeight
		// if (!this.scrollTop) this.refs.this.getBoundingClientRect().top

		Velocity(this.refs.this, {stop: true})
		Velocity(this.refs.this, {'max-height': this.height, easing: 'linear'}, {duration: 400, complete: () => {
			if (typeof this.props.didOpen === 'function') this.props.didOpen()
		}})
		// Velocity(window, {'scroll': this.scrollTop, easing: 'linear'}, {timeout: 400})
	}

	animateClose() {
		Velocity(this.refs.this, {stop: true})
		Velocity(this.refs.this, {'max-height': 0, easing: 'linear'}, {duration: 400, complete: () => {
			// Velocity(this.refs.this, {'max-height': 'auto'}, 0)
			if (typeof this.props.didClose === 'function') this.props.didClose()
			setTimeout(() => {
				this.open = false
				this.forceUpdate()
			},200)
		}})
	}
}