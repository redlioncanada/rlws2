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
import {Partners} from './components/Partners/Partners'
import {Work} from './components/Work/Work'
import {Contact} from './components/Contact/Contact'

require('../../node_modules/normalize.scss/normalize.scss')
require('../css/index.scss')

class RedLion extends React.Component {
	state = appdata.Data()

	componentDidMount() {
		fetch(this.state.Jobs.endpoint)
			.then(res => {
				return res.json()
			}).then(json => {
				this.setState({Jobs: {...this.state.Jobs, jobs: json}})
			}).catch(e => {
				console.error('Failed to fetch jobs.json', e)
			})

		fetch(this.state.Work.endpoint)
			.then(res => {
				return res.json()
			}).then(json => {
				this.setState({Work: {...this.state.Work, work: json}})
			}).catch(e => {
				console.error('Failed to fetch work.json', e)
			})
	}

	render() {
		var workProps = {
			...this.state.Work,
			entryClicked: this.workEntryClicked.bind(this),
			closeClicked: this.workCloseClicked.bind(this)
		}

		return (
			<div>
				<Wallpaper />
				<Jobs {...this.state.Jobs} />
				<Menu {...this.state.Menu} />
				<Anchor {...this.state.Anchor} />
				<Slogan {...this.state.Slogan} />
				<Work {...workProps} />
				<Partners {...this.state.Partners} />
				<Contact {...this.state.Contact} />
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
}

ReactDOM.render(
	<RedLion></RedLion>,
	document.getElementById("app")
)