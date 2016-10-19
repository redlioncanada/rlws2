import React from 'react'
require('./Partners.scss')

export class Partners extends React.Component {
	render() {
		var partners = this.props.partners.map((item,key) => {
			var classNames = `partner ${item.name.replace(/\s/g, '-').toLowerCase()}`
			return (
				<div key={key} className={classNames}>
					<img src={item.imageSrc} alt={item.name} />
				</div>
			)
		})

		// if (partners.length % 2 !== 0) partners.push((
		// 	<div key={partners.length} className="partner">
		// 	</div>
		// ))

		return (
			<div id={this.props.id} className="partners component">
				<div className="wrapper">
					<div className="header-wrapper">
						<div className="header">
							<div className="title">{this.props.title}</div>
							<div className="divider"></div>
							<img className="rotate-se arrow" src={this.props.arrowSrc} />
						</div>
					</div>
					{partners}
					</div>
			</div>
		)
	}
}