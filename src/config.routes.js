import {ac} from 'components/AsyncComponent';

import AppRoot from 'containers/AppRoot';

export function configureRoutes(store) {

    return [{
        component: AppRoot,
        routes: [{
            path: '/dpe-management',
            component: ac(() => import('containers/app/App'), store),
            routes: [{
                path: '/dpe-management/dashboard',
                component: ac(() => import('containers/app/modules/dashboard/Dashboard'), store)
            }, {
                path: '/dpe-management/patient-list',
                component: ac(() => import('containers/app/modules/patientList/PatientList'), store)
            }]
        }]
    }];

}

export const DEFAULT_ROUTE = '/dpe-management/dashboard';