import React from 'react'
require('./Lightbox.scss')

export class Lightbox extends React.Component {
	defaultProps() {
		return {
			show: false,
			videoId: undefined
		}
	}

	render() {
		var classes = "lightbox component"
		if (!!this.props.show) classes += " show"
		return (
			<div className={classes}>
				<div className="video-wrapper">
					<div className="video-container">
						<iframe id="ytplayer" type="text/html" width="100%" src={"https://www.youtube.com/embed/" + this.props.videoId} frameBorder="0"></iframe>
					</div>
				</div>
				<div className="background" onClick={() => this.props.toggle()}></div>
			</div>
		)
	}
}