import React from 'react'
import FullImage from './FullImage'
import LazyImage from './LazyImage'

class LazyImageWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  handleLoaded() {
    this.setState({
      loaded: true
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

    var style = {position: 'absolute', zIndex: 2}

    return (
      <div style={this.props.style}>
        <LazyImage
          src={low}
          width={width}
          height={height}
          loaded={this.state.loaded}
          style={style}
          blurRadius={this.props.blurRadius}
        />
        <FullImage
          src={src}
          onLoad={this.handleLoaded}
        />
      </div>
    )
  }
}

LazyImageWrapper.propTypes = {
  blurRadius: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number
 };

LazyImageWrapper.defaultProps = {
  blurRadius: 10,
  width: 600,
  height: 190
};


module.exports = LazyImageWrapper
