import React from 'react';
import { connect } from 'react-redux';
import { fetchScreening } from '../../actions';

class Reservation extends React.Component {
    componentDidMount() {
        if (this.props.screening === undefined) this.props.fetchScreening(this.props.match.params.id); //Res {this.props.screening == undefined ? this.props.screening.id : ''}
    }

    render() {
        if (this.props.screening == null) return <div></div>;
        return <div>{this.props.screening.film.title}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        screening: state.screenings[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchScreening })(Reservation);
