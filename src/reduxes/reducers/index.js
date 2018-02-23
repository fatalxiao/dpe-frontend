import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import group from './app/common/GroupReducer';
import patient from './app/common/PatientReducer';
import sensoryBlock from './app/common/SensoryBlockReducer';

import patientList from './app/modules/PatientListReducer';
import addPatient from './app/modules/addPatient/AddPatientReducer';
import patientInformation from './app/modules/addPatient/PatientInformationReducer';
import analgesiaData from './app/modules/addPatient/AnalgesiaDataReducer';
import observalData from './app/modules/addPatient/ObservalDataReducer';

const rootReducer = combineReducers({

    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    group,
    patient,
    sensoryBlock,

    patientList,
    addPatient,
    patientInformation,
    analgesiaData,
    observalData,

    router: routerReducer

});

export default rootReducer;