import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import group from './app/common/GroupReducer';
import patients from './app/common/PatientsReducer';
import sensoryBlock from './app/common/SensoryBlockReducer';

import patientList from './app/modules/PatientListReducer';
import editPatient from './app/modules/patient/EditPatientReducer';
import patientInfo from './app/modules/patient/PatientInfoReducer';
import analgesia from './app/modules/patient/AnalgesiaReducer';
import observal from './app/modules/patient/ObservalReducer';

const rootReducer = combineReducers({

    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    group,
    patients,
    sensoryBlock,

    patientList,
    editPatient,
    patientInfo,
    analgesia,
    observal,

    router: routerReducer

});

export default rootReducer;