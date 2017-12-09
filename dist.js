'use strict';

var React = require('react');
var qrImage = require('qr-image');
var PropTypes = require('prop-types');

var ReactQR = function ReactQR() {
  var pngBuffer = qrImage.imageSync(undefined.props.text, { type: 'png', margin: 1 });
  var dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64');
  return React.createElement('img', { className: 'react-qr', src: dataURI });
};
ReactQR.propTypes = {
  text: PropTypes.string.isRequired
};

module.exports = ReactQR;

