import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import 'scss/containers/app/modules/addPatient/AddPatient.scss';

class AddPatient extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add-patient">

            </div>
        );
    }
}

AddPatient.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);