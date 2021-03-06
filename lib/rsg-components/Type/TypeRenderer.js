import React from 'react';
import PropTypes from 'prop-types';
import Code from 'rsg-components/Code';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
	var fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color;
	return {
		type: {
			fontFamily: fontFamily.monospace,
			fontSize: fontSize.small,
			color: color.type
		}
	};
};

export function TypeRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children;

	return React.createElement(
		Code,
		{ className: classes.type },
		children
	);
}

TypeRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default Styled(styles)(TypeRenderer);