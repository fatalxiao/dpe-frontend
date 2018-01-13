import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import device from './common/DeviceReducer';
import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import nav from './app/NavReducer';

import patientList from './app/modules/patient/PatientListReducer';

const rootReducer = combineReducers({

    device,
    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    nav,

    patientList,

    router: routerReducer

});

export default rootReducer;