import React from 'react'
require('./MobileMenu.scss')

//need to separate into 2 separate components, one for the button, one for the menu

export class MobileMenu extends React.Component {
	render() {
		var links = this.props.links.map((item, key) => {
			return (
				<div key={key} className="menulink">
					<a href={item.link}>
						<div className="text">{item.text}</div>
					</a>
				</div>
			)
		})

		var classes = "mobilemenu component"
		if (this.props.open) classes += " open"

		return (
			<div className={classes} onClick={() => this.props.mobileMenuClicked()}>
				<div className="links-wrapper">
					<div className="links-container">{links}</div>
				</div>
			</div>
		)
	}
}