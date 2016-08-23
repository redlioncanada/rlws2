import React from 'react'
import {Image} from '../Image'

export class DataList extends React.Component {
	render() {
		return (
			<div>
				<button className="button" onClick={ () => this.handleDelete() }></button>
				<div className="name">{this.props.source.name}</div>
				<div className="id">{this.props.source.id}</div>
				<Image alt="t" src="images/test.jpg" />
			</div>
		)
	}//render

	handleDelete() {
		this.props.onDelete(this.props.source)
	}//handleDelete
}