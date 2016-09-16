import React from 'react'
import {Anchor} from '../Anchor/Anchor'
require('./Preloader.scss')
import Sizzle from 'sizzle'
var Velocity = require('velocity-animate')

export class Preloader extends React.Component {
	static defaultProps = {
		loaded: false
	}

	constructor() {
		super()
		window.addEventListener('load', this.onDocumentLoad.bind(this))
		this.animationCompleted = false
	}

	componentDidUpdate(prevProps) {
		if (this.props.loaded && !prevProps.loaded) {
			this.refs.this.className += ' loaded'
			var anchorElement = Sizzle('.preloader > .content .anchor')[0],
				scrollTop = anchorElement.offsetTop + anchorElement.offsetHeight/2 - window.innerHeight/2,
				delayInterval = setInterval(() => {
				if (this.animationCompleted) {
					clearInterval(delayInterval)
					window.scrollTo(0, scrollTop)
					this.refs.this.className += ' fadein'
				}
			}, 50)
		}
	}

	componentDidMount() {
		//track when the animation loops
		var logoElement = Sizzle('.preloader > .overlay .logo')[0]
		logoElement.addEventListener('onanimationiteration', this.onLoadingAnimationComplete.bind(this), false)
		logoElement.addEventListener('animationiteration', this.onLoadingAnimationComplete.bind(this), false)
		logoElement.addEventListener('webkitAnimationIteration', this.onLoadingAnimationComplete.bind(this), false)
	}

	render() {
		var className = 'component preloader'

		return (
			<div ref="this" className={className}>
				<div ref="overlay" className="overlay">
					<Anchor {...this.props} />
				</div>

				<div ref="content" className="content">
					{this.props.content}
				</div>
			</div>
		)
	}

	onDocumentLoad() {
		window.removeEventListener('load', this.onDocumentLoad, false)
		if (typeof this.props.handleAppLoaded === 'function') this.props.handleAppLoaded()
	}

	onLoadingAnimationComplete() {
		if (this.props.loaded) {
			Sizzle('.preloader > .overlay .logo')[0].className += ' complete'
			this.animationCompleted = true
		}
	}
}