import React from 'react';
import PropTypes from 'prop-types';
import TabButton from 'rsg-components/TabButton';

var CodeTabButton = function CodeTabButton(props) {
	return React.createElement(
		TabButton,
		props,
		'Code'
	);
};

CodeTabButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	active: PropTypes.bool
};

export default CodeTabButton;