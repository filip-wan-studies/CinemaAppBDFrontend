import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchScreening } from '../../actions';
import FilmInfo from './FilmInfo';
import LoadingSpinner from '../common/LoadingSpinner';

class Reservation extends React.Component {
    render() {
        this.checkIfScreeningIsLoaded();

        return _.isEmpty(this.props.screening) ? (
            <LoadingSpinner></LoadingSpinner>
        ) : (
            <div>
                <FilmInfo id={this.props.screening.film.id}></FilmInfo>
            </div>
        );
    }

    checkIfScreeningIsLoaded = () => {
        if (_.isEmpty(this.props.screening)) this.props.fetchScreening(this.props.match.params.id);
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        screening: state.screenings[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchScreening })(Reservation);
