import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'scss/containers/app/nav/patients/NoPatient.scss';

class NoPatient extends Component {

    constructor(props) {

        super(props);

        this.addPatient = ::this.addPatient;

    }

    addPatient() {
        this.props.routerPush('/app/patient');
    }

    render() {
        return (
            <div className="no-patient">

                <i className="icon-plus add-patient-icon"
                   onTouchTap={this.addPatient}></i>

                You have no patient now.<br/>
                Would you <span className="add-patient-button"
                                onTouchTap={this.addPatient}>Create new Patient</span> ?

            </div>
        );
    }
}

NoPatient.propTypes = {
    routerPush: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoPatient);