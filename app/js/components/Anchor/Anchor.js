import React from 'react'
require('./Anchor.scss')

export class Anchor extends React.Component {
	render() {
		return (
			<div className="anchor component">
				<span className="anchor-container">
					<img className="left-arrow arrow" src={this.props.arrowSrc} />
					<img className="logo" src={this.props.logoSrc} />
					<img className="right-arrow arrow rotate-s" src={this.props.arrowSrc} />
				</span>
			</div>
		)
	}
}