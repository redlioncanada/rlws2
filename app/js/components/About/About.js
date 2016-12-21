import React from 'react'
require('./About.scss')

export class About extends React.Component {
	render() {
		return (
			<div className="about component">
				<div id={this.props.id} className="hash"></div>
				<div className="wrapper">
						<div className="header">
							<div className="title">{this.props.title}</div>
							<div className="divider"></div>
						</div>
					<div className="text-container">
						<p className="text"><span className="strong">{this.props.textPrefix}</span> {this.props.text}</p>
						<br/>
						<p className="text-continued">{this.props.text2}</p>
					</div>
				</div>
			</div>
		)
	}
}