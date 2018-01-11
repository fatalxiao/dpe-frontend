import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import device from './common/DeviceReducer';
import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import navMenu from './app/NavMenuReducer';

const rootReducer = combineReducers({

    device,
    navMenu,
    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    router: routerReducer

});

export default rootReducer;