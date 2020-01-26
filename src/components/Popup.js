import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { togglePopup } from '../../actions';

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        popup: state.popup
    };
};

export default connect(mapStateToProps, { togglePopup })(Popup);
