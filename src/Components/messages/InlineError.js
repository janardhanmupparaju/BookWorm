import React from 'react';
import PropTypes from 'prop-types';
const InlineError = ({ text }) => <span style={{ color: "#ae5856"}}>{text}</span>;
console.log("this is is InLine Component")
InlineError.PropTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError;