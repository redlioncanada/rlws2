import React from 'react'
import {Position} from './Position'
require('./Jobs.scss')

export class Jobs extends React.Component {
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
				<div className="header">
					<p>{this.props.title}</p>
					<div className="divider"></div>
					<img className="rotate-sw arrow" src={this.props.arrowSrc} />
				</div>

				<div className="positions">
					{positions}
				</div>
			</div>
		)
	}
}