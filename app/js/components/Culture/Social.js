import React from 'react'
import Image from '../Image'
require('./Social.scss')

export class Social extends React.Component {
	render() {
		var icons = Object.keys(this.props).map((value, index) => {
			var item = this.props[value]
			return (
				<a href={item.link} key={index} target='_blank' rel='nofollow noopener noreferrer'>
					<div className={value + ' social-icon'}>
						<img src={item.normalSrc} className="normal"/>
						<img src={item.hoverSrc} className="hover"/>
					</div>
				</a>
			)
		})
		return (
			<div className="social subcomponent">
				{icons}
			</div>
		)
	}
}