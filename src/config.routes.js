import {ac} from 'components/AsyncComponent';

import AppRoot from 'containers/AppRoot';

export function configureRoutes(store) {

    return [{
        component: AppRoot,
        routes: [{
            path: '/dpe',
            component: ac(() => import('containers/app/App'), store)
        }]
    }];

}

export const DEFAULT_ROUTE = '/dpe';