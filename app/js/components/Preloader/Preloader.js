import React from 'react'
import {Anchor} from '../Anchor/Anchor'
require('./Preloader.scss')
import Sizzle from 'sizzle'
var Velocity = require('velocity-animate')
import {MobileMenu} from '../MobileMenu/MobileMenu'
import {MobileButton} from '../MobileButton/MobileButton'
import Service from '../../services/Service'

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
			var innerHeight = window.innerHeight,
				anchorElement = Sizzle('.preloader > .content .anchor')[0],
				delayInterval = setInterval(() => {
					if (this.animationCompleted) {
						clearInterval(delayInterval)
						var scrollTop = anchorElement.offsetTop + anchorElement.offsetHeight/2 - innerHeight/2
						window.scrollTo(0, scrollTop)
						this.refs.this.className += ' fadein'

						Velocity(this.refs.overlay, {height: 0}, {duration: 0, delay: 1500})
						setTimeout(() => {
							document.body.style.overflow = "initial"	//allow scrolling after fadeout completes
						},1500)
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
		// document.body.style.overflow = "hidden"
	}

	render() {
		var className = 'component preloader'

		var menu = Service.Device().isMobile() ? (
			<MobileMenu {...this.props.mobileProps} />
		) : undefined

		var mobileButton = Service.Device().isMobile() ? (
			<MobileButton {...this.props.mobileProps} />
		) : undefined

		return (
			<div ref="this" className={className}>
				<div ref="overlay" className="overlay">
					<Anchor {...this.props} />
				</div>

				<div ref="mobile-menu" className="menu">
					{mobileButton}
					{menu}
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

			//trigger a resize event
			//necessary for elements to size properly on initial load
			//since display:none prevents js from getting element dimensions
			var evt = window.document.createEvent('UIEvents')
			evt.initUIEvent('resize', true, false, window, 0)
			window.dispatchEvent(evt)

			this.animationCompleted = true
		}
	}
}