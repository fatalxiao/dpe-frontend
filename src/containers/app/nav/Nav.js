import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavBar from './bar/NavBar';
import NavPatient from './patients/NavPatient';

import Event from 'vendors/Event';
import Valid from 'vendors/Valid';

import 'scss/containers/app/nav/Nav.scss';

class Nav extends Component {

    constructor(props) {

        super(props);

        this.navBarWidth = 64;
        this.navPatientWidth = 240;
        this.defaultWidth = this.navBarWidth + this.navPatientWidth;

        this.resizing = false;
        this.startWidth = null;
        this.mouseX = null;

        this.state = {
            navWidth: this.defaultWidth,
            isNavPatientCollapsed: false,
            isNavPatientFold: false
        };

        this.toggleMouseDownHandler = ::this.toggleMouseDownHandler;
        this.mouseMoveHandler = ::this.mouseMoveHandler;
        this.mouseUpHandler = ::this.mouseUpHandler;
        this.toggleNav = ::this.toggleNav;

    }

    toggleMouseDownHandler(e) {

        e.stopPropagation();

        this.resizing = true;
        this.startWidth = this.state.navWidth;
        this.mouseX = e.pageX;

    }

    mouseMoveHandler(e) {

        if (!this.resizing) {
            return;
        }

        const offsetX = e.pageX - this.mouseX,
            navWidth = Valid.range(this.startWidth + offsetX, this.navBarWidth);

        this.setState({
            navWidth,
            isNavPatientCollapsed: navWidth < this.navBarWidth * 2,
            isNavPatientFold: false
        });

    }

    mouseUpHandler() {

        this.resizing = false;

        const {navWidth} = this.state;

        const isFold = navWidth < this.navBarWidth + this.navPatientWidth / 2;

        this.setState({
            navWidth: isFold ? this.navBarWidth : (navWidth < this.defaultWidth ? this.defaultWidth : navWidth),
            isNavPatientCollapsed: isFold,
            isNavPatientFold: isFold
        });

    }

    toggleNav(e) {

        e.stopPropagation();

        const {navWidth} = this.state;

        this.setState({
            navWidth: navWidth === this.navBarWidth ? this.defaultWidth : this.navBarWidth
        });

    }

    componentDidMount() {
        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.addEvent(document, 'mouseup', this.mouseUpHandler);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
        Event.removeEvent(document, 'mouseup', this.mouseUpHandler);
    }

    render() {

        const {navWidth, isNavPatientCollapsed, isNavPatientFold} = this.state,

            collapsed = navWidth === this.navBarWidth,

            toggleIconClassName = (collapsed ? 'icon-chevron-thin-right' : 'icon-chevron-thin-left'),

            style = {
                width: collapsed ? this.navBarWidth : navWidth
            };

        return (
            <div className="nav"
                 style={style}>

                <div className="nav-inner"
                     style={style}>

                    <NavBar/>

                    <NavPatient isCollapsed={isNavPatientCollapsed}
                                isFold={isNavPatientFold}/>

                    <div className="nav-toggle"
                         onMouseDown={this.toggleMouseDownHandler}>
                        <i className={toggleIconClassName + ' nav-toggle-icon'}
                           onMouseDown={e => e.stopPropagation()}
                           onTouchTap={this.toggleNav}></i>
                    </div>

                </div>

            </div>
        );
    }
}

Nav.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);