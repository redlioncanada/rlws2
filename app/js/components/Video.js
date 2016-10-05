import React from 'react'
require('./Video.scss')

class Video extends React.Component {
	defaultProps() {
		return {
			src: '',
			width: '100%',
			hide: false,
			className: ''
		}
	}

	render() {
		var style = {
			width: !!this.props.width ? this.props.width : '100%'
		}
		return (
			<div className={this.props.className}>
			{ this.props.hide ? null : <iframe title="video" style={style} src={this.props.src} frameBorder="0" allowFullScreen></iframe> }
			</div>
		)
	}
}

export default Video