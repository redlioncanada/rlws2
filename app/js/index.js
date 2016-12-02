"use strict"
import React from 'react';
import ReactDOM from 'react-dom'
import {appdata} from './appdata.js'
import Sizzle from 'sizzle'

import {Preloader} from './components/Preloader/Preloader'
import {Menu} from './components/Menu/Menu'
import {Wallpaper} from './components/Wallpaper/Wallpaper'
import {Jobs} from './components/Jobs/Jobs'
import {Culture} from './components/Culture/Culture'
import {About} from './components/About/About'
import {Chalkboard} from './components/Chalkboard/Chalkboard'
import {Anchor} from './components/Anchor/Anchor'
import {Slogan} from './components/Slogan/Slogan'
import {Partners} from './components/Partners/Partners'
import {Work} from './components/Work/Work'
import {Contact} from './components/Contact/Contact'

import Service from './services/Service'

require('../../node_modules/normalize.scss/normalize.scss')
require('../css/index.scss')
require('../../node_modules/slick-carousel/slick/slick.scss')
require('../../node_modules/slick-carousel/slick/slick-theme.scss')

var workJSON = require('!json!./components/Work/Work.json')
var jobsJSON = require('!json!./components/Jobs/Jobs.json')

class RedLion extends React.Component {
	state = appdata.Data()

	componentWillMount() {
		this.setState({Jobs: {...this.state.Jobs, jobs: jobsJSON}})
		this.setState({Work: {...this.state.Work, work: workJSON}})
	}

	render() {
		var workProps = {
			...this.state.Work,
			entryClicked: this.workEntryClicked.bind(this),
			closeClicked: this.workCloseClicked.bind(this),
			loaded: this.state.Preloader.loaded
		}

		var jobProps = {
			...this.state.Jobs,
			loaded: this.state.Preloader.loaded
		}

		var contactProps = {
			...this.state.Contact,
			loaded: this.state.Preloader.loaded
		}
		var cultureProps = {
			...this.state.Culture,
			carousel: this.state.Carousel,
			toggleLightbox: this.toggleLightbox.bind(this)
		}
		var mobileProps = {
			...this.state.Menu,
			mobileMenuClicked: this.mobileMenuToggle.bind(this)
		}

		var menu = Service.Device().isMobile() ? undefined : (
			<Menu {...mobileProps} />
		)

		var appContent = (
			<div>
				<Wallpaper />
				{menu}
				<Jobs {...jobProps} />
				<Culture {...cultureProps} />
				<Chalkboard {...this.state.Chalkboard} />
				<Anchor {...this.state.Anchor} />
				<Slogan {...this.state.Slogan} />
				<About {...this.state.About} />
				<Work {...workProps} />
				<Partners {...this.state.Partners} />
				<Contact {...contactProps} />
			</div>
		)

		var preloaderProps = {
			...this.state.Preloader,
			handleAppLoaded: this.appLoaded.bind(this),
			content: appContent,
			mobileProps: mobileProps
		}

		return (
			<div>
				<Preloader {...preloaderProps} />
			</div>
		)
	}

	workEntryClicked(index) {
		this.setState({Work: {
			...this.state.Work,
			currentlySelectedWork: index
		}})
	}

	workCloseClicked() {
		this.setState({Work: {
			...this.state.Work,
			currentlySelectedWork: -1
		}})
	}

	appLoaded() {
		this.setState({Preloader: {
			...this.state.Preloader,
			loaded: true
		}})
	}

	mobileMenuToggle() {
		this.setState({
			Menu: {
				...this.state.Menu,
				open: !this.state.Menu.open
			}
		})

		// document.body.style.overflow = !this.state.Menu.open ? "hidden" : "initial"

		if (!this.state.Menu.open) {
			var scrollTop = (window.pageYOffset || window.scrollTop) - (document.clientTop || 0)
			document.body.style.position = "fixed"
			document.body.style.marginTop = -scrollTop+"px"
		} else {
			var scrollTop = Number(document.body.style.marginTop.replace('px','')) * -1
			console.log(scrollTop)
			document.body.style.position = "initial"
			document.body.style.marginTop = "initial"
			window.scrollTo(0, scrollTop)
		}
	}

	toggleLightbox() {
		this.setState({
			Culture: {
				...this.state.Culture,
				showLightbox: !this.state.Culture.showLightbox
			}
		})
	}
}

ReactDOM.render(
	<RedLion></RedLion>,
	document.getElementById("app")
)