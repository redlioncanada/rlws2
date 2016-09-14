import React from 'react'
require('./WorkEntry.scss')

export class WorkEntry extends React.Component {
	defaultProps() {
		return {
			backgroundColor: '#FFF',
			title: 'Red Lion ravages competition',
			description: 'as a Red Lion should',
			isHeader: false,
			iconSrc: false,
			hoverSrc: false,
			entryClicked: false,
			isSelected: false
		}
	}

	render() {
		var innerContent
		if (!!this.props.isHeader) {
			innerContent = (
				<div className="header">
					<div className="title">{this.props.title}</div>
					<div className="divider"></div>
					<img className="rotate-sw arrow" src={this.props.arrowSrc} />
				</div>
			)
		} else {
			innerContent = (
				<div className="content" onClick={()=>{this.handleClick()}}>
					<div className="title">{this.props.title}</div>
					<img className="icon" src={this.props.iconSrc} />
					<div className="hover-container">
						<img className="hover" src={this.props.hoverSrc} />
					</div>
				</div>
			)
		}

		var style = {backgroundColor: this.props.backgroundColor}

		return (
			<div className="workentry subcomponent">
			<div>
				<div style={style}>{innerContent}</div>
			</div>
		</div>
		)
	}

	handleClick() {
		if (!!this.props.entryClicked) this.props.entryClicked(this.props.index)
	}
}