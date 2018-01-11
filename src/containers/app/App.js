import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';

import * as actions from 'reduxes/actions';

import NavMenu from './nav/menu/NavMenu';
import NavBar from './nav/bar/NavBar';
import NavTitle from './nav/bar/NavTitle';
import PageLoading from 'alcedo-ui/PageLoading';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Dom from 'vendors/Dom';

import 'scss/containers/app/App.scss';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            loadingId: 1
        };

        this.finishLoading = this::this.finishLoading;

    }

    finishLoading() {
        setTimeout(() => {
            this.setState({
                loadingId: ++this.state.loadingId
            });
        }, 250);
    }

    componentDidMount() {

        Dom.removeClass(document.querySelector('html'), 'full-size');

        const {$supplierList, getUserProfile, refreshActivatedMenu, getSupplier} = this.props;

        getUserProfile();
        refreshActivatedMenu();

        if (!$supplierList) {
            getSupplier();
        }

    }

    render() {

        const {
                route, $navMenuCollapsed, $componentLoading
            } = this.props,
            {loadingId} = this.state;

        return (
            <div className={'app' + ($navMenuCollapsed ? ' nav-menu-collapsed' : '')}>

                <NavMenu/>

                <div ref="appContent"
                     className="app-content">

                    <ReactCSSTransitionGroup>
                        {
                            $componentLoading ?
                                <PageLoading key={loadingId}
                                             onRequestClose={this.finishLoading}/>
                                :
                                null
                        }
                    </ReactCSSTransitionGroup>

                    <NavBar/>

                    <NavTitle/>

                    {renderRoutes(route.routes)}

                </div>

            </div>
        );

    }
}

App.propTypes = {

    $isDesktop: PropTypes.bool,
    $navMenuCollapsed: PropTypes.bool,
    $componentLoading: PropTypes.bool,

    getUserProfile: PropTypes.func,
    refreshActivatedMenu: PropTypes.func,
    getSupplier: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $isDesktop: state.device.isDesktop,
        $navMenuCollapsed: state.navMenu.navMenuCollapsed,
        $componentLoading: state.loadComponent.loading,
        $supplierList: state.supplier.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);