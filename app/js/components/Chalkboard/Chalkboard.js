import React from 'react'
import {Slideshow} from './Slideshow'
import Image from '../Image'
require('./Chalkboard.scss')

export class Chalkboard extends React.Component {
	render() {
		return (
			<div className="chalkboard component">
				<div className="background">
					<Image {...this.props.background} />
				</div>
				<div className="gif">
					<Image className="gif-background" src={this.props.gif.src} />
					<Image className="border" src={this.props.border.src} />
				</div>
			</div>
		)
	}
}