import React from 'react'
import {Social} from './Social'
import Image from '../Image'
import {Slideshow} from '../Chalkboard/Slideshow'
require('./Culture.scss')
import Service from '../../services/Service'

export class Culture extends React.Component {
	render() {
		var slideshowSrc = [
			'./images/SC-1.jpg',
			'./images/SC-2.jpg',
			'./images/SC-3.jpg',
			'./images/SC-4.jpg',
			'./images/SC-5.jpg',
			'./images/SC-6.jpg',
			'./images/SC-7.jpg',
			'./images/SC-8.jpg',
			'./images/SC-9.jpg',
			'./images/SC-10.jpg',
			'./images/SC-11.jpg'
		]

		var topSection = !Service.Device().isPhone() ? (
			<div className="columns top desktop">
				<div className="column1">
					<Social {...this.props.social} />
					<div className="art1">
						<Image src="./images/OfficeArt-1.jpg" />
					</div>
					<div className="cacti">
						<Image src="./images/Cacti.jpg" />
					</div>
					<div className="slideshow">
						<a href="http://instagram.com/social_calories" rel="noreferer nofollow"><Slideshow src={slideshowSrc} /></a>
					</div>
					<div className="squarefaces">
						<a href="http://instagram.com/squarefaces" rel="noreferer nofollow"><Image src="./images/SquareFace.jpg" /></a>
					</div>
				</div>
				<div className="column2">
					<div className="pillowfight">
						<Image src="./images/Pillow_GIF.gif" />
					</div>
					<div className="art2">
						<Image src="./images/OfficeArt-2.jpg" />
					</div>
					<div className="coin-icon-group">
						<div className="coin1">
							<div><Image src="./images/RL_Coin-3.jpg" /></div>
						</div>
						<div className="ec-logo">
							<div><img src="./images/Logo-Extracurriculars.svg" /></div>
						</div>
					</div>
				</div>
			</div>
		) : (
			<div className="columns top mobile">
				<div className="column1">
					<Social {...this.props.social} />
					<div className="art1">
						<Image src="./images/OfficeArt-1.jpg" />
					</div>
					<div className="pillowfight">
						<Image src="./images/Pillow_GIF.gif" />
					</div>
					<div className="cacti">
						<Image src="./images/Cacti.jpg" />
					</div>
					<div className="art2">
						<Image src="./images/OfficeArt-2.jpg" />
					</div>
					<div className="slideshow">
						<a href="http://instagram.com/social_calories" rel="noreferer nofollow"><Slideshow src={slideshowSrc} /></a>
					</div>
				</div>
				<div className="column2">
					<div className="coin-icon-group">
						<div className="coin1">
							<div><Image src="./images/RL_Coin-3.jpg" /></div>
						</div>
						<div className="ec-logo">
							<div><img src="./images/Logo-Extracurriculars.svg" /></div>
						</div>
					</div>
					<div className="squarefaces">
						<div><a href="http://instagram.com/squarefaces" rel="noreferer nofollow"><Image src="./images/SquareFace.jpg" /></a></div>
					</div>
				</div>
			</div>
		)

		return (
			<div id={this.props.id} className="culture component">
				{topSection}
				<div className="rl-sign">
					<div><Image src="./images/RL_NeonSign.jpg" /></div>
				</div>
				<div className="columns bottom">
					<div className="column1">
						<div className="pride-card">
							<div><a href="http://greetingsfromthecloset.com" rel="noreferer nofollow"><Image src="./images/Pride_Card.jpg" /></a></div>
						</div>
						<div className="coin2">
							<div><Image src="./images/RL_Coin-1.jpg" /></div>
						</div>
					</div>
					<div className="column2">
						<div className="coin3">
							<div><Image src="./images/RL_Coin-2.jpg" /></div>
						</div>
						<div className="bird">
							<img src="./images/Bird.svg" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}