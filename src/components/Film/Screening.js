import React from 'react';
import { connect } from 'react-redux';
import { fetchScreening } from '../../actions';
import { Link } from 'react-router-dom';
import '../../css/styleScreening.css';

class Screening extends React.Component {
    componentDidMount() {
        this.props.fetchScreening(this.props.id);
    }

    render() {
        if (this.props.screening == null) return <div></div>;
        return (
            <div className="card bg-dark text-white">
                <Link to={'/reservation/' + this.props.id} onClick={this.clickButton}>
                    <span1> Screening nr {this.props.id} </span1>
                    {this.renderScreening()}
                </Link>
            </div>
        );
    }

    renderScreening() {
        return (
            <div>
                <div>
                    <span1>Price ({this.props.screening.price.name}): {this.props.screening.price.ammount  + ' zł'}</span1>
                </div>
                <div>
                    <span1>Date: {this.props.screening.screeningDate.toLocaleString()}</span1>
                </div>
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
