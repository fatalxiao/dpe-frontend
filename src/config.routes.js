import {ac} from 'components/AsyncComponent';

import AppRoot from 'containers/AppRoot';

export function configureRoutes(store) {

    return [{
        component: AppRoot,
        routes: [{
            path: '/dpe',
            component: ac(() => import('containers/app/App'), store),
            routes: [{
                path: '/dpe/dpe-list',
                component: ac(() => import('containers/app/modules/dpeList/DpeList'), store)
            }]
        }]
    }];

}

export const DEFAULT_ROUTE = '/dpe/dpe-list';