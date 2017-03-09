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
			content: '',
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

		var main = undefined

		if (!!this.props.content && this.props.content.length) {
			main = this.props.content.map((value, key) => {
				let cta = !!value.link ? (
					<p>{value.description} {value.cta.replace(' here', '')} <a href={value.link} target="_blank" ref="noreferrer nofollow">here</a>.</p>
				) : (
					<p>{value.description} {value.cta}</p>
				)

				let content = undefined

				switch(value.contentType) {
					case 'image':
						content = (<Image className="image main" src={value.content} hiddenOnLoad={true} defer={true} />)
						break
					case 'video':
						let shouldAutoplay = key == 0 ? 1 : 0
						content = (<Video className="video main" src={value.content + `?rel=0&autoplay=${shouldAutoplay}`} hide={this.open?false:true} />)
						break
				}

				return (
					<div key={key}>
						{cta}
						{content}
					</div>
				)
			})
		}

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
							{main}
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