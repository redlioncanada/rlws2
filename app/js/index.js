"use strict"
import React from 'react';
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import {appdata} from './appdata.js'

import {Wallpaper} from './components/Wallpaper/Wallpaper'
import {Jobs} from './components/Jobs/Jobs'
import {Menu} from './components/Menu/Menu'
import {Anchor} from './components/Anchor/Anchor'
import {Slogan} from './components/Slogan/Slogan'

require('../../node_modules/normalize.scss/normalize.scss')
require('../css/index.scss')

class RedLion extends React.Component {
	state = appdata.Data()

	componentDidMount() {
		//fetch jobs.json
		fetch(this.state.Jobs.endpoint)
			.then(res => {
				return res.json()
			}).then(json => {
				this.setState({Jobs: {...this.state.Jobs, jobs: json}})
			}).catch(e => {
				console.error('Failed to fetch jobs.json', e)
			})

		//every 1 second, change the current slide of the slideshow in the menu component
		setInterval(() => {
			let menuState = this.state.Menu,
				slideshowState = menuState.slideshow,
				numberOfSlides = slideshowState.src.length,
				currentSlide = slideshowState.currentSlide+1 > numberOfSlides-1 ? 0 : slideshowState.currentSlide+1,
				updatedSlideshowState = {...slideshowState, currentSlide: currentSlide},
				updatedMenuState = {...this.state.Menu, slideshow: updatedSlideshowState}
			this.setState({Menu: updatedMenuState})
		},1000)
	}

	render() {
		return (
			<div>
				<Wallpaper />
				<Jobs {...this.state.Jobs} />
				<Menu {...this.state.Menu} />
				<Anchor {...this.state.Anchor} />
				<Slogan {...this.state.Slogan} />
			</div>
		)
	}
}

ReactDOM.render(
	<RedLion></RedLion>,
	document.getElementById("app")
)