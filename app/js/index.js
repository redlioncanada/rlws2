"use strict"
import React from 'react';
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import Fetch from 'whatwg-fetch'
import _ from 'lodash'

import {DataList} from './components/DataList/DataList'
import {AddData} from './components/DataList/AddData'

require('../../node_modules/normalize.scss/normalize.scss')

const defaults = [
	{
		"name": "A",
		"id": 0
	},
	{
		"name": "B",
		"id": 1
	},
	{
		"name": "C",
		"id": 2
	},
	{
		"name": "D",
		"id": 3
	}
]

const dataReducer = (state=defaults, action) => {
	switch(action.type) {
		case "inc":
			state = state.map(item => {return {...item, id: item.id+action.payload}})
			break
		case "dec":
			state = state.map(item => {return {...item, id: item.id-action.payload}})
			break
	}
	return state
}

const reducers = combineReducers({
	data: dataReducer
})

const store = createStore(reducers)

store.subscribe(() => {
	console.log('store changed', store.getState())
})
store.dispatch({type: 'inc', payload: 1})

class RedLion extends React.Component {
	state = {
		data: [],
		formVisible: false
	}

	componentDidMount() {
		// fetch('./data.json')
		// 	.then((res) => {
		// 		return res.json()
		// 	})
		// 	.then((json) => {
		// 		this.setState({
		// 			data: json
		// 		})
		// 	})
		// 	.catch((error) => {
		// 		console.error(`Failed to fetch json`)
		// 	})
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