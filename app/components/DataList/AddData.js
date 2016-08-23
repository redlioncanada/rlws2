import React from 'react'

export class AddData extends React.Component {
  render() {
  	var displayBody = {
  		display: this.props.visible ? 'block' : 'none'
  	}

    return (
      <div className="wrapper" style={displayBody} onClick={ this.toggleVisibility }>
      	<input type="text" className="id" placeholder="id"/>
      	<input type="text" className="name" placeholder="name"/>
      	<button className="submit"/>
      </div>
    )
  }//render

  toggleVisibility() {
  	this.props.handleVisibilityChange()
  }//toggleVisibility
}
