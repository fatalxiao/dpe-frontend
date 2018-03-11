import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import PatientListFilter from './PatientListFilter';
import PatientListTable from './PatientListTable';
import NavNoPatient from 'containers/app/nav/patients/NavNoPatient';

import 'scss/containers/app/modules/patientList/PatientList.scss';

class PatientList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            filterValue: '',
            filterGroup: {id: 0, name: 'All'}
        };

        this.filterChangeHandler = ::this.filterChangeHandler;
        this.groupChangeHandler = ::this.groupChangeHandler;

    }

    filterChangeHandler(filterValue) {
        this.setState({
            filterValue
        });
    }

    groupChangeHandler(filterGroup) {
        this.setState({
            filterGroup
        });
    }

    render() {

        const {$patientList} = this.props,
            {filterValue, filterGroup} = this.state;

        return (
            <div className="patient-list">
                {
                    $patientList && $patientList.length > 0 ?
                        <div>
                            <PatientListFilter filterValue={filterValue}
                                               filterGroup={filterGroup}
                                               onFilterChange={this.filterChangeHandler}
                                               onGroupChange={this.groupChangeHandler}/>
                            <PatientListTable filterValue={filterValue}
                                              filterGroup={filterGroup}/>
                        </div>
                        :
                        <NavNoPatient/>
                }
            </div>
        );
    }
}

PatientList.propTypes = {
    $patientList: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        $patientList: state.patients.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);