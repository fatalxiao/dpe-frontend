import {ac} from 'components/AsyncComponent';

import AppRoot from 'containers/AppRoot';

export function configureRoutes(store) {

    return [{
        component: AppRoot,
        routes: [{
            path: '/app',
            component: ac(() => import('containers/app/App'), store),
            routes: [{
                path: '/app/dashboard',
                component: ac(() => import('containers/app/modules/dashboard/Dashboard'), store)
            }, {
                path: '/app/patient-list',
                component: ac(() => import('containers/app/modules/patientList/PatientList'), store)
            }, {
                path: '/app/add-patient',
                component: ac(() => import('containers/app/modules/addPatient/AddPatient'), store),
                routes: [{
                    path: '/app/add-patient/patient-information',
                    component: ac(() => import('containers/app/modules/addPatient/patientInformation/PatientInformation'), store)
                }]
            }]
        }]
    }];

}

export const DEFAULT_ROUTE = '/app/dashboard';