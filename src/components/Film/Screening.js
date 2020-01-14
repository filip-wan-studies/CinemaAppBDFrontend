import React from 'react';
import { connect } from 'react-redux';
import { fetchScreening } from '../../actions';
//import { Link } from 'react-router-dom';

class Screening extends React.Component {
    componentDidMount() {
        this.props.fetchScreening(this.props.id);
    }

    render() {
        if (this.props.screening == null) return <div></div>;
        return (
            <div className="card">
                Screening nr {this.props.id}
                {this.renderScreening()}
            </div>
        );
    }

    renderScreening() {
        return (
            <div>
                <div>Price: {this.props.screening.idPrice}</div>
                <div>Date: {this.props.screening.dateScreening}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { screening: state.screenings[ownProps.id] };
};

export default connect(mapStateToProps, { fetchScreening })(Screening);
