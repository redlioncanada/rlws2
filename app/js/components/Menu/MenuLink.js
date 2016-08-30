import React from 'react'
require('./MenuLink.scss')

export class MenuLink extends React.Component {
	defaultProps() {
		return {
			text: '',
			link: '#'
		}
	}

	render() {
		return (
			<div className="menulink subcomponent">
				<a href={this.props.link}>
					<div className="text">{this.props.text}</div>
				</a>
			</div>
		)
	}
}