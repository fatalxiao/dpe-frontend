import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import device from './common/DeviceReducer';
import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import group from './app/common/GroupReducer';
import patient from './app/common/PatientReducer';
import sensoryBlock from './app/common/SensoryBlockReducer';

import patientList from './app/modules/PatientListReducer';
import addPatient from './app/modules/addPatient/AddPatientReducer';
import addPatientInformation from './app/modules/addPatient/AddPatientInformationReducer';
import addPatientAnalgesiaData from './app/modules/addPatient/AddPatientAnalgesiaDataReducer';

const rootReducer = combineReducers({

    device,
    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    group,
    patient,
    sensoryBlock,

    patientList,
    addPatient,
    addPatientInformation,
    addPatientAnalgesiaData,

    router: routerReducer

});

export default rootReducer;