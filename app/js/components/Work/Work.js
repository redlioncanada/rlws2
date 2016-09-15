import React from 'react'
import {WorkEntry} from './WorkEntry'
import {WorkExpanded} from './WorkExpanded'
require('./Work.scss')
import Service from '../../services/Service'

export class Work extends React.Component {
	render() {
		var count = 0, count2 = 1, expanded = [], entries = []
		for (var key in this.props.work) {
			var item = this.props.work[key],
				every = Service.Device().isPhone() ? 2 : 3 //insert a workexpanded section for every 2 works on mobile, and every 3 on desktop

			count++

			entries.push((
				<WorkEntry
					{...item}
					index = {count-1}
					key = {count}
					isHeader = {false}
					isSelected = {count-1 == this.props.currentlySelectedWork}
					entryClicked = {this.props.entryClicked}
				/>
			))

			expanded.push({
				...item,
				index: count-1,
			})

			if (++count2 % every === 0) {
				var count3 = 0,
					hasOpen = false

				expanded = expanded.map((item1, key1) => {
					let selected = this.props.currentlySelectedWork == item1.index
					if (selected) hasOpen = true

					return (
						<WorkExpanded
							{...item1}
							key = {count3++}
							shouldOpen = {selected}
							closeClicked = {this.props.closeClicked}
						/>
					)
				})

				var className = 'workexpanded-wrapper'
				if (hasOpen) className += ' selected'

				entries.push((
					<div key={++count} className={className}>{expanded}</div>
				))
				expanded = []
			}
		}

		entries.splice(0, 0,
			(
				<WorkEntry
					key = '0'
					backgroundColor = '#000'
					title = {this.props.title}
					className = {this.props.title.replace(/\s/, '-').toLowerCase()}
					arrowSrc = {this.props.arrowSrc}
					isHeader = {true}
				/>
			)
		)

		return (
			<div id={this.props.id} className="work component">
				<div className="wrapper">{entries}</div>
			</div>
		)
	}
}