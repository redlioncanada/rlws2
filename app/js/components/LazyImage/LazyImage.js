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

    var src = this.props.hiddenOnLoad ?  'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' : this.props.src

    if (src.indexOf('.gif') > -1) src = src.replace(/\.gif/g, '.jpg') //replace gifs with static jpegs to start

    return (
      <img src={src} style={style} className={this.props.loaded ? 'fadeout' : ''} />
    )
  }
}

LazyImage.defaultProps = {
  blurRadius: 4,
  width: '100%',
  height: undefined,
  loaded: false,
  hiddenOnLoad: false
};

export default LazyImage
