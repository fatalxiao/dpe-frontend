import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import Popover from 'alcedo-ui/Popover';
import PatientList from './PatientList';

import 'scss/containers/app/nav/patients/NavPatientMenu.scss';

class NavPatientCollapsed extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popVisible: false
        };

        this.allPatientMouseHandler = ::this.allPatientMouseHandler;
        this.goToList = ::this.goToList;

    }

    allPatientMouseHandler(popVisible) {
        this.setState({
            popVisible
        });
    }

    goToList() {
        this.props.routerPush('/app/patient-list');
    }

    componentDidMount() {
        this.allPatientButtonEl = findDOMNode(this.refs.allPatientButton);
        console.log(this.allPatientButtonEl);
    }

    render() {

        const {isFold} = this.props,
            {popVisible} = this.state;

        return (
            <div className="nav-patient-menu">

                <IconButton ref="allPatientButton"
                            className="all-patients-menu-item"
                            iconCls="icon-list"
                            onMouseOver={() => {
                                this.allPatientMouseHandler(true);
                            }}
                            onTouchTap={this.goToList}/>

                <Popover visible={isFold && popVisible}
                         triggerEl={this.allPatientButtonEl}
                         position={Popover.Position.RIGHT_TOP}
                         hasTriangle={false}
                         onRequestClose={() => {
                             this.allPatientMouseHandler(false);
                         }}>
                    <PatientList/>
                </Popover>

            </div>
        );
    }
}

NavPatientCollapsed.propTypes = {

    isFold: PropTypes.bool,

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPatientCollapsed);