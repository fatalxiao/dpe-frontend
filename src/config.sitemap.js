/**
 * @file config.sitemap
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const rootSymbol = 'root';

function sitemap(state) {

    return {
        [rootSymbol]: true,
        name: 'DPE Manager',
        route: '/app',
        children: [{
            name: 'Dashboard',
            route: '/app/dashboard'
        }, {
            name: 'Patient List',
            route: '/app/patient-list',
            children: [{
                name: 'Add Patient',
                route: '/app/add-patient',
                children: [{
                    name: 'Patient Information',
                    route: '/app/add-patient/patient-information'
                }]
            }]
        }]
    };

}

export function getPath(pathName, state) {

    if (!pathName) {
        return;
    }

    return traverseData(sitemap(state), pathName);

}

export function traverseData(node, pathName) {

    if (!node || node.length < 1 || !pathName) {
        return;
    }

    if (new RegExp(`^${node.route}(\\/[\\d]+)?$`).test(pathName)) {
        return [node];
    }

    if (node.children && node.children.length > 0) {

        for (let i = 0, len = node.children.length; i < len; i++) {

            // traverse child node
            const path = traverseData(node.children[i], pathName, i);

            // if finded in child node
            if (path) {

                if (node[rootSymbol]) {
                    return path;
                }

                path.unshift(node);

                return path;

            }

        }
    }

    return;

}