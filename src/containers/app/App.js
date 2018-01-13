import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';

import * as actions from 'reduxes/actions';

import Nav from './nav/Nav';
import NavTitle from './nav/title/NavTitle';
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

        const {refreshActivatedMenu} = this.props;

        refreshActivatedMenu();

    }

    render() {

        const {
                route, $navMenuCollapsed, $componentLoading
            } = this.props,
            {loadingId} = this.state;

        return (
            <div className={'app' + ($navMenuCollapsed ? ' nav-menu-collapsed' : '')}>

                <Nav/>

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

    refreshActivatedMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $isDesktop: state.device.isDesktop,
        $navMenuCollapsed: state.navMenu.navMenuCollapsed,
        $componentLoading: state.loadComponent.loading
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);