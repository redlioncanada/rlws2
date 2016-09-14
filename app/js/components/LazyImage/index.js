import React from 'react'
import FullImage from './FullImage'
import LazyImage from './LazyImage'

class LazyImageWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      hiddenOnLoad: false
    }
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  handleLoaded() {
    this.setState({
      loaded: true,
    })
  }
  render() {
    const { src, low, width, height, blurRadius } = this.props;

    const styles = {
      width,
      height,
      padding: 0,
      margin: 0,
      top: 0,
    }

    if (!this.props.low) {
      return <img src={src} style={styles} />
    }

    var parentStyle = {...this.props.style, overflow: 'hidden', position: 'relative'}
    var lazyStyle = {position: 'absolute'}
    var fullStyle = {opacity: this.state.loaded ? 1 : 0}

    return (
      <div style={parentStyle} className={this.props.className}>
        <LazyImage className='lores'
          src={low}
          width={width}
          height={height}
          loaded={this.state.loaded}
          style={lazyStyle}
          blurRadius={this.props.blurRadius}
          hiddenOnLoad={this.props.hiddenOnLoad}
        />
        <FullImage className='hires'
          src={src}
          onLoad={this.handleLoaded}
          style={fullStyle}
          defer={this.props.defer}
        />
      </div>
    )
  }
}

LazyImageWrapper.defaultProps = {
  blurRadius: 4,
  width: '100%',
  height: undefined,
  hiddenOnLoad: false
};


module.exports = LazyImageWrapper
