import React from 'react'

export class DataList extends React.Component {
	render() {
		return (
			<div>
			test
				<button className="button" onClick={ () => this.handleDelete() }></button>
				<div className="name">{this.props.source.name}</div>
				<div className="id">{this.props.source.id}</div>
				<img src={require("../../assets/images/test.jpg")} alt=""/>
			</div>
		)
	}//render

	handleDelete() {
		this.props.onDelete(this.props.source)
	}//handleDelete
}