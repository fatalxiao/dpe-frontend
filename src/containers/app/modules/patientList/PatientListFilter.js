import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import TextField from 'customized/CustomizedMaterialTextField';
import RaisedButton from 'alcedo-ui/RaisedButton';

import 'scss/containers/app/modules/patientList/PatientListFilter.scss';

class PatientListFilter extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {filterValue} = this.props;

        return (
            <div className="patient-list-filter">

                <TextField className="patient-filter"
                           value={filterValue}
                           placeholder="Filter Patients ..."
                           rightIconCls="icon-magnifying-glass"/>

                <RaisedButton className="create-patient-button"
                              theme={RaisedButton.Theme.PRIMARY}
                              iconCls="icon-plus"
                              value="Create Patient"/>

            </div>
        );
    }
}

PatientListFilter.propTypes = {
    filterValue: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientListFilter);