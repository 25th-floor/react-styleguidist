import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'rsg-components/Pathline';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
	var color = _ref.color,
	    fontSize = _ref.fontSize,
	    space = _ref.space;
	return {
		root: {
			marginBottom: space[6]
		},
		header: {
			marginBottom: space[3]
		},
		tabs: {
			marginBottom: space[3]
		},
		tabButtons: {
			marginBottom: space[2]
		},
		docs: {
			color: color.base,
			fontSize: fontSize.text
		}
	};
};

export function ReactComponentRenderer(_ref2) {
	var classes = _ref2.classes,
	    name = _ref2.name,
	    heading = _ref2.heading,
	    pathLine = _ref2.pathLine,
	    description = _ref2.description,
	    docs = _ref2.docs,
	    examples = _ref2.examples,
	    tabButtons = _ref2.tabButtons,
	    tabBody = _ref2.tabBody;

	return React.createElement(
		'div',
		{ className: classes.root, id: name + '-container' },
		React.createElement(
			'header',
			{ className: classes.header },
			heading,
			pathLine && React.createElement(
				Pathline,
				null,
				pathLine
			)
		),
		(description || docs) && React.createElement(
			'div',
			{ className: classes.docs },
			description,
			docs
		),
		tabButtons && React.createElement(
			'div',
			{ className: classes.tabs },
			React.createElement(
				'div',
				{ className: classes.tabButtons },
				tabButtons
			),
			tabBody
		),
		examples
	);
}

ReactComponentRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	heading: PropTypes.node.isRequired,
	pathLine: PropTypes.string,
	tabButtons: PropTypes.node,
	tabBody: PropTypes.node,
	description: PropTypes.node,
	docs: PropTypes.node,
	examples: PropTypes.node,
	isolated: PropTypes.bool
};

export default Styled(styles)(ReactComponentRenderer);