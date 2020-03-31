import {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

const childrenPropTypes = PropTypes.oneOfType([
    PropTypes.instanceOf(Component),
    PropTypes.instanceOf(PureComponent),
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.instanceOf(PureComponent),
        PropTypes.object,
        PropTypes.node,
        PropTypes.func,
        PropTypes.element
    ]))
]);

export default childrenPropTypes;
