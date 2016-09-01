import React from 'react'
require('./Position.scss')

export class Position extends React.Component {
	defaultProps() {
		return {
			backgroundColor: '#FFF',
			link: '#',
			title: 'Lion Tamer',
			description: '',
			subject: ''
		}
	}

	render() {
		var style = {
			backgroundColor: this.props.backgroundColor
		}
		var link = `${this.props.link}?subject=${encodeURIComponent(this.props.subject)}`

		return (
			<div className="position subcomponent" style={style}>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<div>
						<div className="title">{this.props.title.replace(/\s/g, '\n')}</div>
					</div>
				</a>
			</div>
		)
	}
}