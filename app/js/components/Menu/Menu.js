import React from 'react'
import {MenuLink} from './MenuLink'
import {Slideshow} from './Slideshow'
import Image from '../Image'
require('./Menu.scss')

export class Menu extends React.Component {
	render() {
		var links = this.props.links.map((item, key) => {
			return (
				<MenuLink
					key = {key}
					text = {item.text}
					link = {item.link}
				/>
			)
		})

		return (
			<div className="menu component">
				<div className="background">
					<Image {...this.props.background} />
				</div>
				<Slideshow {...this.props.slideshow} />
				<div className="links-container">{links}</div>
			</div>
		)
	}
}