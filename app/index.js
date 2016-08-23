"use strict"
import React from 'react';
import ReactDOM from 'react-dom'
import Fetch from 'whatwg-fetch'
import _ from 'lodash'

import {DataList} from './components/DataList/DataList'
import {AddData} from './components/DataList/AddData'

require('../node_modules/normalize.scss/normalize.scss')

class RedLion extends React.Component {
	state = {
		data: [],
		formVisible: false
	}

	componentDidMount() {
		fetch('./data.json')
			.then((res) => {
				return res.json()
			})
			.then((json) => {
				this.setState({
					data: json
				})
			})
			.catch((error) => {
				console.error(`Failed to fetch json`)
			})
	}

	deleteListItem(item) {
		this.setState({
			data: _.without(this.state.data, item)
		})
	}

	render() {
		let dataList = this.state.data.map((item, index) => {
			return (
				<DataList
					key = {index}
					source = {item}
					onDelete = { (item) => this.deleteListItem(item) }
				/>
			)
		})

		return (
		  <div>
			{dataList}
			<AddData
				visible = { this.state.formVisible }
				handleVisibilityChange
			/>
		  </div>
		)
	}
}

ReactDOM.render(
	<RedLion></RedLion>,
	document.getElementById("app")
)