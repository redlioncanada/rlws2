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
				<Slideshow {...this.props.slideshow} />
			</div>
		)
	}
}