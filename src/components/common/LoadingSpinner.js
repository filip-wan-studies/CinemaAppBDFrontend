import React from 'react';

class LoadingSpinner extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center position-relative mt-5">
                <div className="spinner-border text-success" style={{ width: '10rem', height: '10rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default LoadingSpinner;
