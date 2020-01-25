import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import FilmInfo from './FilmInfo';
import Screenings from './Screenings';
import LoadingSpinner from '../common/LoadingSpinner';

class Film extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id);
    }

    render() {
        if (_.isEmpty(this.props.film)) return <LoadingSpinner></LoadingSpinner>;
        return (
            <div className="media row my-5 justify-content-center">
                <FilmInfo />
                <Screenings />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};

export default connect(mapStateToProps, { fetchFilm })(Film);
