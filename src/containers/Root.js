import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import Routes from '../routes';
import {AppError} from '../components';

// 20-04-2020
// Main component of an application must be a 'Component' or 'PureComponent' for implement 'componentDidCatch'.
// Because, at the moment there are no Hook equivalents to the uncommon 'componentDidCatch'.
// https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
class Root extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // It's best practice to have each single-spa application's root application implement componentDidCatch in order
    // to avoid the entire application unmounting unexpectedly when an error occurs.
    // eslint-disable-next-line no-unused-vars
    componentDidCatch(error, info) {
        this.setState(() => ({hasError: true}));
    }

    render() {
        const {store} = this.props;
        const {hasError} = this.state;
        return hasError ? (
            <AppError message="Root app has an error"/>
        ) : (
            <Provider store={store}>
                <Fragment>
                    <Routes/>
                </Fragment>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.shape({}).isRequired
};

export default Root;
