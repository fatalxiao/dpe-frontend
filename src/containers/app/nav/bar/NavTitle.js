import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import Crumbs from 'alcedo-ui/Crumbs';

import {getPath} from 'src/config.sitemap';

import 'scss/containers/app/nav/bar/NavTitle.scss';

class NavTitle extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$state} = this.props,
            pathName = location.pathname,
            navPath = getPath(pathName, $state),
            current = navPath && navPath.pop();

        return (
            <div className="nav-title">

                {
                    current ?
                        <div className="nav-title-name">
                            {current && current.title}
                        </div>
                        :
                        null
                }

                {
                    current ?
                        <div className="nav-title-crumbs-wrapper">

                            <i className="icon icon-ico-breadcrumbs nav-title-crumbs-icon"></i>

                            <Crumbs className="nav-title-crumbs"
                                    items={navPath}
                                    itemRenderer={item => {
                                        return item.route ?
                                            <Link className="nav-title-crumb nav-title-link"
                                                  to={item.route}>
                                                {item.name}
                                            </Link>
                                            :
                                            <div className="nav-title-crumb">
                                                {item.name}
                                            </div>;
                                    }}/>
                        </div>
                        :
                        null
                }

            </div>
        );

    }
}

NavTitle.propTypes = {
    $state: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        $state: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTitle);