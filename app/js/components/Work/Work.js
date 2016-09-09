import React from 'react'
import {WorkEntry} from './WorkEntry'
import {WorkExpanded} from './WorkExpanded'
require('./Work.scss')

export class Work extends React.Component {
	render() {
		var count = 0, count2 = 1, expanded = [], entries = []
		for (var key in this.props.work) {
			var item = this.props.work[key]

			if (++count2 % 4 !== 0) {
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
			} else {
				var count3 = 0
				expanded = expanded.map((item1, key1) => {
					return (
						<WorkExpanded
							{...item1}
							key = {count3++}
							shouldOpen = {this.props.currentlySelectedWork == item1.index}
							closeClicked = {this.props.closeClicked}
						/>
					)
				})

				entries.push((
					<div key = {++count}>{expanded}</div>
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