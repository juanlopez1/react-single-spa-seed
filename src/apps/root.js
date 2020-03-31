import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import Root from '../containers/Root';

const {bootstrap, mount, unmount} = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Root,
    domElementGetter: () => document.getElementById('root'),
    renderType: 'render'
});

export {bootstrap};
export {mount};
export {unmount};
