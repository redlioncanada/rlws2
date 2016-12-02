import React from 'react'
require('./MobileButton.scss')

export class MobileButton extends React.Component {
	constructor() {
		super()
	}

	defaultProps() {
		return {
			open: false
		}
	}

	render() {
		var classes = "mobilebutton component"
		if (this.props.open) classes += " open"

		return (
			<div className={classes} onClick={() => this.props.mobileMenuClicked()}>
				<div className="toggle">
					<div className="toggle-icon">
					  <span></span>
					  <span></span>
					  <span></span>
					  <span></span>
					</div>
				</div>
			</div>
		)
	}
}