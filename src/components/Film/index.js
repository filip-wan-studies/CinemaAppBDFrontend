import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import FilmInfo from './FilmInfo';

class Film extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id);
    }

    render() {
        if (_.isEmpty(this.props.film))
            return (
                <div className="d-flex flex-column align-items-center position-relative mt-5">
                    <div
                        className="spinner-border text-success"
                        style={{ width: '10rem', height: '10rem' }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );

        return <FilmInfo />;
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};

export default connect(mapStateToProps, { fetchFilm })(Film);
