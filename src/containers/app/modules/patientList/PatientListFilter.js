import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'scss/containers/app/modules/patientList/PatientList.scss';

class PatientListFilter extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {} = this.props;

        return (
            <div className="patient-list-filter">

            </div>
        );
    }
}

PatientListFilter.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientListFilter);