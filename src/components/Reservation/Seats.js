import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

class Seats extends React.Component {
    render() {
        return <div></div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        screening: state.screenings[ownProps.id]
    };
};

export default connect(mapStateToProps)(Seats);
