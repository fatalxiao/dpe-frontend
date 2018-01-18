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

        this.defaultWidth = 304;
        this.minWidth = 64;

        this.resizing = false;
        this.startWidth = null;
        this.mouseX = null;

        this.state = {
            navWidth: this.defaultWidth,
            navPatientCollapsed: false
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
            navWidth = Valid.range(this.startWidth + offsetX, this.minWidth);

        this.setState({
            navWidth,
            navPatientCollapsed: navWidth < this.minWidth * 2
        });

    }

    mouseUpHandler() {
        this.resizing = false;
    }

    toggleNav(e) {

        e.stopPropagation();

        const {navWidth} = this.state;

        this.setState({
            navWidth: navWidth === this.minWidth ? this.defaultWidth : this.minWidth
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

        const {navWidth, navPatientCollapsed} = this.state,

            collapsed = navWidth === this.minWidth,

            toggleIconClassName = (collapsed ? 'icon-chevron-thin-right' : 'icon-chevron-thin-left'),

            style = {
                width: collapsed ? this.minWidth : navWidth
            };

        return (
            <div className="nav"
                 style={style}>

                <div className="nav-inner"
                     style={style}>

                    <NavBar/>

                    <NavPatient collapsed={navPatientCollapsed}/>

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