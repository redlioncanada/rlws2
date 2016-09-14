import React from 'react'
import {Anchor} from '../Anchor/Anchor'
require('./Preloader.scss')

export class Preloader extends React.Component {
	static defaultProps = {
		loaded: false
	}

	constructor() {
		super()
		window.addEventListener('DOMContentLoaded', this.onDocumentLoad.bind(this))
	}

	render() {
		var className = 'component preloader'
		if (this.props.loaded) className += ' loaded'

		return (
			<div className={className}>
				<div className="overlay">
					<Anchor {...this.props} />
				</div>
				<div className="content">
					{this.props.content}
				</div>
			</div>
		)
	}

	onDocumentLoad() {
		window.removeEventListener('DOMContentLoaded', this.onDocumentLoad, false)
		console.log('loaded')
		if (typeof this.props.handleAppLoaded === 'function') this.props.handleAppLoaded()
	}
}