import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';
import Checkbox from 'alcedo-ui/Checkbox';
import TextField from 'alcedo-ui/TextField';
import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/addPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        const {addPatientStepPrev, routerPush} = this.props;
        addPatientStepPrev();
        routerPush('/app/add-patient/patient-information');
    }

    save() {
        const {addPatientStepNext, routerPush} = this.props;
        addPatientStepNext();
        routerPush('/app/add-patient/observal-data');
    }

    render() {

        const {} = this.props;

        return (
            <div className="analgesia-data">

                <Table columns={[{
                    header: 'Time Point',
                    renderer: '${firstName} min'
                }, {
                    header: 'Has Contraction',
                    renderer(rowData) {
                        return <Checkbox value={rowData.hasContraction}/>;
                    }
                }, {
                    header: 'Vas Score',
                    renderer(rowData) {
                        return <TextField value={rowData.vasScore}/>;
                    }
                }]}/>

                <StepAction onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

AnalgesiaData.propTypes = {
    routerPush: PropTypes.func,
    addPatientStepPrev: PropTypes.func,
    addPatientStepNext: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);