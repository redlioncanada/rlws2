import React from 'react'
import Image from '../Image'
var Velocity = require('velocity-animate')
require('./WorkExpanded.scss')

export class WorkExpanded extends React.Component {
	defaultProps() {
		return {
			backgroundColor: '#000',
			description: '',
			content: '',
			type: 'image',
			shouldOpen: false,
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
					<Image className="image main" src={this.props.content} hiddenOnLoad={true} />
				)
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
							<p>{this.props.description}</p>
							{main}
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidUpdate() {
		if (this.props.shouldOpen) {
			this.animateOpen()
		} else {
			this.animateClose()
		}
	}

	handleCloseClick() {
		if (typeof this.props.closeClicked === 'function') this.props.closeClicked()
	}

	animateOpen() {
		if (!this.height) this.height = this.refs.this.scrollHeight

		Velocity(this.refs.this, {stop: true})
		Velocity(this.refs.this, {'max-height': this.height, easing: 'linear'}, {timeout: 400}, () => {
			if (typeof this.props.didOpen === 'function') this.props.didOpen()
		})
	}

	animateClose() {
		Velocity(this.refs.this, {stop: true})
		Velocity(this.refs.this, {'max-height': 0, easing: 'linear'}, {timeout: 400}, () => {
			Velocity(this.refs.this, {'max-height': 'auto'}, 0)
			if (typeof this.props.didClose === 'function') this.props.didClose()
		})
	}
}