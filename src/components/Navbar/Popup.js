import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { togglePopup } from '../../actions';
import '../../css/stylePopup.css';

class Popup extends React.Component {
    render() {
        console.log("I'm alive!");
        return (
            // <div
            //     class="modal fade"
            //     id="exampleModal"
            //     tabindex="-1"
            //     role="dialog"
            //     aria-labelledby="exampleModalLabel"
            //     aria-hidden="true"
            // >
            //     <div class="modal-dialog" role="document">
            //         <div class="modal-content">
            //             <div class="modal-header">
            //                 <h5 class="modal-title" id="exampleModalLabel">
            //                     Modal title
            //                 </h5>
            //                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //                     <span aria-hidden="true">&times;</span>
            //                 </button>
            //             </div>
            //             <div class="modal-body">test</div>
            //             <div class="modal-footer">
            //                 <button type="button" class="btn btn-secondary" data-dismiss="modal">
            //                     Close
            //                 </button>
            //                 <button type="button" class="btn btn-primary">
            //                     Save changes
            //                 </button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="popup">
                <div className="popup_inner card  text-white bg-dark">
                    <div className="mr-3 mt-2">
                        <button
                            type="button"
                            className="close text-danger"
                            aria-label="Close"
                            onClick={this.onClickButtonClosePopup}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="card-body form">
                        <h1>{this.props.text}</h1>
                    </div>
                </div>
            </div>
        );
    }

    onClickButtonClosePopup = e => {
        this.props.togglePopup(false);
    };
}

const mapStateToProps = state => {
    return {
        popup: state.popup
    };
};

export default connect(mapStateToProps, { togglePopup })(Popup);
