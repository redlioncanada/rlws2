import React from 'react'
require('./Position.scss')

export class Position extends React.Component {
	constructor() {
		super()
		this.open = false
	}

	defaultProps() {
		return {
			backgroundColor: '#FFF',
			link: '#',
			title: 'Lion Tamer',
			description: '',
			subject: '',
		}
	}

	render() {
		var style = {
			backgroundColor: this.props.backgroundColor
		}
		var link = `${this.props.link}?subject=${encodeURIComponent(this.props.subject)}`
		var classes = "position subcomponent"
		if (this.open) classes += " open"

		return (
			<div className={classes} style={style}>
					<div>
						<div className="toggle" onClick={() => this.toggleOpen()} style={{display: !!this.props.description ? 'block' : 'none'}}>
							<img src="./images/jobs-arrow.png"/>
						</div>
						<a className="click-background" href={link} rel="noopener noreferrer">
							<div></div>
						</a>
						<div className="content">
							<div className="title">{this.props.title.replace(/\s/g, '\n')}</div>
							<div className="description-wrapper" style={{display: this.open ? 'block' : 'none'}}>
								<p className="description">{this.props.description}</p>
								<p className="submit">{this.props.submit}</p>
							</div>
						</div>
					</div>
			</div>
		)
	}

	toggleOpen() {
		if (!this.props.description) return
		this.open = !this.open
		this.forceUpdate()
	}
}