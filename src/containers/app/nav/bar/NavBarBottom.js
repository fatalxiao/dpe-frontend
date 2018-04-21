import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import 'scss/containers/app/nav/bar/NavBarBottom.scss';

class NavBarBottom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar-bottom"></div>
        );
    }
}

export default connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(NavBarBottom);