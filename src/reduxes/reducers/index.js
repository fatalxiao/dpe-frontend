import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import device from './common/DeviceReducer';
import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import nav from './app/NavReducer';

import group from './app/common/GroupReducer';
import patient from './app/common/PatientReducer';

import patientList from './app/modules/patient/PatientListReducer';
import addPatient from './app/modules/patient/AddPatientReducer';

const rootReducer = combineReducers({

    device,
    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    nav,

    group,
    patient,

    patientList,
    addPatient,

    router: routerReducer

});

export default rootReducer;