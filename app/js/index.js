"use strict"
import React from 'react';
import ReactDOM from 'react-dom'
import {appdata} from './appdata.js'

import {Preloader} from './components/Preloader/Preloader'
import {Menu} from './components/Menu/Menu'
import {Wallpaper} from './components/Wallpaper/Wallpaper'
import {Jobs} from './components/Jobs/Jobs'
import {Culture} from './components/Culture/Culture'
import {Chalkboard} from './components/Chalkboard/Chalkboard'
import {Anchor} from './components/Anchor/Anchor'
import {Slogan} from './components/Slogan/Slogan'
import {Partners} from './components/Partners/Partners'
import {Work} from './components/Work/Work'
import {Contact} from './components/Contact/Contact'

require('../../node_modules/normalize.scss/normalize.scss')
require('../css/index.scss')

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

		var appContent = (
			<div>
				<Wallpaper />
				<Menu {...this.state.Menu} />
				<Jobs {...jobProps} />
				<Culture {...this.state.Culture} />
				<Chalkboard {...this.state.Chalkboard} />
				<Anchor {...this.state.Anchor} />
				<Slogan {...this.state.Slogan} />
				<Work {...workProps} />
				<Partners {...this.state.Partners} />
				<Contact {...this.state.Contact} />
			</div>
		)

		var preloaderProps = {
			...this.state.Preloader,
			handleAppLoaded: this.appLoaded.bind(this),
			content: appContent
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
}

ReactDOM.render(
	<RedLion></RedLion>,
	document.getElementById("app")
)