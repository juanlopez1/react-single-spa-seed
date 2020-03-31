import React from 'react';
import PropTypes from 'prop-types';

const AppError = ({message}) => (
    <div className="app-error">
        <div className="message">
            {message}
        </div>
    </div>
);

AppError.propTypes = {
    message: PropTypes.string
};

AppError.defaultProps = {
    message: 'An app has an error'
};

export default AppError;
