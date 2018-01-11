import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';
import {Redirect} from 'react-router-dom';

import * as actions from 'reduxes/actions';

import Toaster from 'alcedo-ui/Toaster';
import Notifier from 'alcedo-ui/Notifier';

import Config from 'src/config';
import {DEFAULT_ROUTE} from 'src/config.routes';

import Event from 'vendors/Event';
import Auth from 'vendors/Auth';

import 'assets/font-awesome/css/font-awesome.min.css';
import 'assets/derbysoft-icon-set/styles.css';
import 'scss/customized/index.scss';
import 'scss/global.scss';
import 'scss/containers/AppRoot.scss';

class AppRoot extends Component {

    constructor(props) {

        super(props);

        this.resizeHandle = this::this.resizeHandle;

    }

    resizeHandle() {
        window.innerWidth >= Config.desktopMinWidth ?
            (!this.props.$isDesktop && this.props.switchToDesktop())
            :
            (this.props.$isDesktop && this.props.switchToMobile());
    }

    componentDidMount() {

        Event.addEvent(window, 'resize', this.resizeHandle);
        // document.getElementById('loading').style.display = 'none';

        this.props.submitAsyncMsgSeq();

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {$toastes, $notifiers, route, location, clearToaste, clearNotifier} = this.props;

        return (
            <div className="app-root">

                <Toaster toasts={$toastes}
                         position={Toaster.Position.TOP}
                         onToastPop={clearToaste}/>


                <Notifier notifications={$notifiers}
                          position={Notifier.Position.TOP_RIGHT}
                          onNotificationPop={clearNotifier}/>

                {renderRoutes(route.routes)}

                {
                    location.pathname === '/' ?
                        (
                            Auth.hasToken() ?
                                <Redirect from="/" to={DEFAULT_ROUTE}/>
                                :
                                <Redirect from="/" to="/sign-in"/>
                        )
                        :
                        null
                }

            </div>
        );
    }

}

AppRoot.propTypes = {

    $isDesktop: PropTypes.bool,
    $toastes: PropTypes.array,
    $notifiers: PropTypes.array,

    routerReplace: PropTypes.func,
    clearToaste: PropTypes.func,
    clearNotifier: PropTypes.func,
    submitAsyncMsgSeq: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $isDesktop: state.device.isDesktop,
        $toastes: state.appToaster.toastes,
        $notifiers: state.appNotifier.notifiers
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);