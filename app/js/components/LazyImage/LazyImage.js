import React from 'react'
const StackBlur = require('./stackblur');

class LazyImage extends React.Component {
  render() {
    const { style, width, height } = this.props;

    if (!!this.props.blurRadius) {
      style.filter = `blur(${this.props.blurRadius}px)`
      style.WebkitFilter = style.filter
    }
    style.width = this.props.width
    style.height = this.props.height

    return (
      <img src={this.props.src} style={style} className={this.props.loaded ? 'fadeout' : ''} />
    )
  }
}

LazyImage.defaultProps = {
  blurRadius: 4,
  width: '100%',
  height: undefined,
  loaded: false
};

export default LazyImage
