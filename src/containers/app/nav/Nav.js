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
            isDragging: false,
            navWidth: this.defaultWidth,
            isNavPatientCollapsed: false,
            isNavPatientFold: false
        };

        this.getNavWidth = ::this.getNavWidth;
        this.saveNavWidth = ::this.saveNavWidth;
        this.toggleMouseDownHandler = ::this.toggleMouseDownHandler;
        this.mouseMoveHandler = ::this.mouseMoveHandler;
        this.mouseUpHandler = ::this.mouseUpHandler;
        this.toggleNav = ::this.toggleNav;

    }

    getNavWidth() {
        return localStorage.getItem('navWidth') || this.defaultWidth;
    }

    saveNavWidth(navWidth) {
        localStorage.setItem('navWidth', navWidth);
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
            isDragging: true,
            navWidth,
            isNavPatientCollapsed: navWidth < this.navBarWidth * 2,
            isNavPatientFold: false
        }, () => {
            this.saveNavWidth(navWidth);
        });

    }

    mouseUpHandler() {

        this.resizing = false;

        const {navWidth} = this.state,
            isFold = navWidth < this.navBarWidth + this.navPatientWidth / 3,
            newNavWidth = isFold ? this.navBarWidth : (navWidth < this.defaultWidth ? this.defaultWidth : navWidth);

        this.setState({
            isDragging: false,
            navWidth: newNavWidth,
            isNavPatientCollapsed: isFold,
            isNavPatientFold: isFold
        }, () => {
            this.saveNavWidth(newNavWidth);
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

        const {isDragging, navWidth, isNavPatientCollapsed, isNavPatientFold} = this.state,

            collapsed = navWidth === this.navBarWidth,

            wrapperClassName = (isDragging ? ' dragging' : ''),

            toggleClassName = (collapsed ? ' collapsed' : ''),

            style = {
                width: collapsed ? this.navBarWidth : navWidth
            };

        return (
            <div className={'nav' + wrapperClassName}
                 style={style}>

                <div className="nav-inner"
                     style={style}>

                    <NavBar/>

                    <NavPatient isCollapsed={isNavPatientCollapsed}
                                isFold={isNavPatientFold}/>

                    <div className="nav-resize"
                         onMouseDown={this.toggleMouseDownHandler}>
                        <div className={'nav-toggle' + toggleClassName}
                             onMouseDown={e => e.stopPropagation()}
                             onTouchTap={this.toggleNav}></div>
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