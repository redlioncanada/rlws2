import React from 'react'
import {Position} from './Position'
import Utils from '../../services/Utils'
require('./Jobs.scss')

export class Jobs extends React.Component {
	constructor() {
		super()
		window.addEventListener('resize', Utils.debounce(this.handleResize.bind(this), 50))
	}

	componentDidUpdate(prevProps) {
		if (prevProps.loaded === false && this.props.loaded === true) {	//loaded
			this.handleResize()
		}
	}

	render() {
		var positions = this.props.jobs.map((item, key) => {
			return (
				<Position
					key = {key}
					backgroundColor = {item.backgroundColor}
					link = {this.props.email.address}
					title = {item.title}
					description = {item.description}
					subject = {this.props.email.subject}
				/>
			)
		})

		return (
			<div className="jobs thinkdifferent component">
				<div className="hash" id={this.props.id}></div>
				<div ref="header" className="header">
					<div className="title">{this.props.title}</div>
					<div className="divider"></div>
				</div>

				<div className="positions">
					{positions}
				</div>
			</div>
		)
	}

	handleResize() {
		var width = this.refs.header.offsetWidth
		if (this.lastWidth && this.lastWidth == width) return

		if (!(typeof width === 'undefined' || width == 0)) {
			if (!!this.resizeTimeout) clearTimeout(this.resizeTimeout)
			this.lastWidth = width

			Velocity(this.refs.header, {height: width}, {duration: 0})
		} else {
			if (!this.resizeTimeout) {
				this.resizeTimeout = setTimeout(this.handleResize.bind(this), 300)
			}
		}
	}
}