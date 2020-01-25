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
                    <span> Screening nr {this.props.id} </span>
                    {this.renderScreening()}
                </Link>
            </div>
        );
    }

    renderScreening() {
        return (
            <div>
                <div>
                    <span>
                        Price ({this.props.screening.price.name}): {this.props.screening.price.ammount + ' zł'}
                    </span>
                </div>
                <div>
                    <span>Date: {this.props.screening.screeningDate.toLocaleString()}</span>
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
