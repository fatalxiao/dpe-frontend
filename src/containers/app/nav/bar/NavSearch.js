import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import Drawer from 'alcedo-ui/Drawer';

import 'scss/containers/app/nav/bar/NavSearch.scss';

class NavSearch extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {visible, onRequestClose} = this.props;

        return (
            <Drawer className="nav-search"
                    visible={visible}
                    onRequestClose={onRequestClose}>

            </Drawer>
        );

    }
}

NavSearch.propTypes = {

    visible: PropTypes.bool,

    onRequestClose: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);