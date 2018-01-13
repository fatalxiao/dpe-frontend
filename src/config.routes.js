import {ac} from 'components/AsyncComponent';

import AppRoot from 'containers/AppRoot';

export function configureRoutes(store) {

    return [{
        component: AppRoot,
        routes: [{
            path: '/dpe',
            component: ac(() => import('containers/app/App'), store),
            routes: [{
                path: '/dpe/dashboard',
                component: ac(() => import('containers/app/modules/dashboard/Dashboard'), store)
            }, {
                path: '/dpe/patient-list',
                component: ac(() => import('containers/app/modules/patientList/PatientList'), store)
            }]
        }]
    }];

}

export const DEFAULT_ROUTE = '/dpe/dashboard';