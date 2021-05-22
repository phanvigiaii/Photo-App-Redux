import React from 'react';
import './NotFound.scss';
NotFound.propTypes = {};

function NotFound(props) {
    return (
        <div className="page-not-found">
            <div className="error">404</div>
            <span className="info">File not found</span>
        </div>
    );
}

export default NotFound;
