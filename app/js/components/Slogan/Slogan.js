import React from 'react'
require('./Slogan.scss')

export class Slogan extends React.Component {
	render() {
		return (
			<div className="slogan component">
				<div className="brain-outer">
					<div className="brain-container brain-container-left">
						<span className="brain">
							<div className="text rotate-e">{this.props.brainLeftText}</div>
							<img className="" src={this.props.brainSrc} />
						</span>
					</div>
					<div className="brain-container brain-container-right">
						<span className="brain">
							<img src={this.props.brainSrc} />
							<div className="text rotate-w">{this.props.brainRightText}</div>
						</span>
					</div>
				</div>
				<div className="text-container">
					<div className="text">{this.props.text}</div>
				</div>
			</div>
		)
	}
}