import React from 'react';
import { connect } from 'react-redux';
import { fetchScreening } from '../../actions';
import { Link } from 'react-router-dom';

class Screening extends React.Component {
    componentDidMount() {
        this.props.fetchScreening(this.props.id);
    }

    render() {
        if (this.props.screening == null) return <div></div>;
        return (
            <Link to={'/reservation/' + this.props.id} className="card" onClick={this.clickButton}>
                Screening nr {this.props.id}
                {this.renderScreening()}
            </Link>
        );
    }

    renderScreening() {
        return (
            <div>
                <div>
                    Price ({this.props.screening.price.name}): {this.props.screening.price.ammount  + ' zł'}
                </div>
                <div>Date: {this.props.screening.screeningDate.toLocaleString()}</div>
            </div>
        );
    }

    clickButton = e => {
        //this.props.id
    };
}

const mapStateToProps = (state, ownProps) => {
    return { screening: state.screenings[ownProps.id] };
};

export default connect(mapStateToProps, { fetchScreening })(Screening);
