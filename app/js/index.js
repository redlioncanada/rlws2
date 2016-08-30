"use strict"
import React from 'react';
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import {appdata} from './appdata.js'

import {Wallpaper} from './components/Wallpaper/Wallpaper'
import {Jobs} from './components/Jobs/Jobs'
import {Menu} from './components/Menu/Menu'

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
	}

	render() {
		return (
			<div>
				<Wallpaper />
				<Jobs {...this.state.Jobs} />
				<Menu {...this.state.Menu} />
			</div>
		)
	}
}

ReactDOM.render(
	<RedLion></RedLion>,
	document.getElementById("app")
)