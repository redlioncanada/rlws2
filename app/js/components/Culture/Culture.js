import React from 'react'
import {Social} from './Social'
import Image from '../Image'
require('./Culture.scss')
import Service from '../../services/Service'
import {Carousel} from '../Carousel/Carousel'

export class Culture extends React.Component {
	constructor() {
		super()
	}
	render() {
		var topSection = !Service.Device().isPhone() ? (
			<div className="columns top desktop">
				<div className="column1">
					<Social {...this.props.social} />
					<div className="art1 item">
						<Image src="./images/OfficeArt-1.jpg" />
						<p className="caption">{this.props.captions.Art1}</p>
					</div>
					<div className="cacti item">
						<Image src="./images/Cacti.jpg" />
					</div>
					<div className="carousel-outer item">
						<Carousel {...this.props.carousel} />
					</div>
					<div className="coin-icon-group">
						<div className="coin1 item">
							<div>
								<Image src="./images/RL_Coin-3-inner.png" />
								<Image src="./images/RL_Coin-3-outer.jpg" />
							</div>
						</div>
					</div>
				</div>
				<div className="column2">
					<div className="pillowfight item">
						<Image src="./images/Pillow_GIF.gif" />
					</div>
					<div className="art2 item">
						<Image src="./images/OfficeArt-2.jpg" />
						<p className="caption">{this.props.captions.Art2}</p>
					</div>
					<div className="coin-icon-group">
						<div className="ec-logo item">
							<div><img src="./images/Logo-Extracurriculars.svg" /></div>
						</div>
					</div>
				</div>
			</div>
		) : (
			<div className="columns top mobile">
				<div className="column1">
					<Social {...this.props.social} />
					<div className="art1 item">
						<Image src="./images/OfficeArt-1.jpg" />
						<p className="caption">{this.props.captions.Art1}</p>
					</div>
					<div className="pillowfight item">
						<Image src="./images/Pillow_GIF.gif" />
					</div>
					<div className="cacti item">
						<Image src="./images/Cacti.jpg" />
					</div>
					<div className="art2 item">
						<Image src="./images/OfficeArt-2.jpg" />
						<p className="caption">{this.props.captions.Art2}</p>
					</div>
					
				</div>
				<div className="column2">
					<div className="coin-icon-group">
						<div className="coin1 item">
							<div>
								<Image src="./images/RL_Coin-3-inner.png" />
								<Image src="./images/RL_Coin-3-outer.jpg" />
							</div>
						</div>
						<div className="ec-logo item">
							<div><img src="./images/Logo-Extracurriculars.svg" /></div>
						</div>
					</div>
					<div className="carousel-outer item">
						<Carousel {...this.props.carousel} />
					</div>
				</div>
			</div>
		)

		var classes = "culture component"
		classes += Service.Device().isMobile() ? " mobile" : " desktop"

		var video = this.props.showLightbox ? (
			<iframe id="ytplayer" width="100%" src={"//www.youtube.com/embed/" + this.props.videos.redlion + '?rel=0&autoplay=1'} frameBorder="0" allowFullscreen></iframe>
		) : ''

		return (
			<div id={this.props.id} className={classes}>
				{topSection}
				<div className="rl-sign item" onClick={() => {this.props.toggleLightbox()}}>
					<div className="play" style={{display: this.props.showLightbox ? 'none' : 'block'}}></div>
					<div className="video-outer" style={{opacity: this.props.showLightbox ? 1:0}}>
						<div className="video-wrapper">
							<div className="video-container">
								{video}
							</div>
						</div>
					</div>
					<div className="sign"><Image src="./images/RL_NeonSign.jpg" /></div>
				</div>
				<div className="columns bottom">
					<div className="column1">
						<div className="pride-card item">
							<div><a href="http://greetingsfromthecloset.com" rel="noreferer nofollow" target="_blank"><Image src="./images/Pride_Card.jpg" /></a></div>
							<p className="caption">{this.props.captions.Closetcards}</p>
						</div>
						<div className="coin2 item">
							<div>
								<Image src="./images/RL_Coin-1-inner.png" />
								<Image src="./images/RL_Coin-1-outer.jpg" />
							</div>
						</div>
					</div>
					<div className="column2">
						<div className="coin3 item">
							<div>
								<Image src="./images/RL_Coin-2-inner.png" />
								<Image src="./images/RL_Coin-2-outer.jpg" />
							</div>
						</div>
					</div>
				</div>
				<div className="influence copy">
					<p>{this.props.copyPrefix} {this.props.copy}</p>
				</div>
			</div>
		)
	}
}