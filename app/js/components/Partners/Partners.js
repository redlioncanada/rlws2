import React from 'react'
require('./Partners.scss')

export class Partners extends React.Component {
	render() {
		var partners = this.props.partners.map((item,key) => {
			var classNames = `partner ${item.name.replace(/\s/g, '-').toLowerCase()}`
			return (
				<div key={key} className={classNames}>
					<img src={item.imageSrc} alt ={item.name} />
				</div>
			)
		})

		return (
			<div id={this.props.id} className="partners component">
				{partners}
			</div>
		)
	}
}