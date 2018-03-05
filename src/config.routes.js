import ac from 'components/AsyncComponent';

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
                path: '/app/patient',
                component: ac(() => import('containers/app/modules/editPatient/EditPatient'), store),
                routes: [{
                    path: '/app/patient/create-patient',
                    component: ac(() => import('containers/app/modules/editPatient/patientInfo/CreatePatient'), store)
                }, {
                    path: '/app/patient/update-patient/:id',
                    component: ac(() => import('containers/app/modules/editPatient/patientInfo/UpdatePatient'), store)
                }, {
                    path: '/app/patient/analgesia-data/:patientId',
                    component: ac(() => import('containers/app/modules/editPatient/analgesiaData/AnalgesiaData'), store)
                }, {
                    path: '/app/patient/observal-data/:patientId',
                    component: ac(() => import('containers/app/modules/editPatient/observalData/ObservalData'), store)
                }]
            }]
        }]
    }];

}

export const DEFAULT_ROUTE = '/app/dashboard';