import React, {Component} from 'react';

import NavBarTop from './NavBarTop';
import NavBarBottom from './NavBarBottom';

import 'scss/containers/app/nav/bar/NavBar.scss';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar">
                <NavBarTop/>
                <NavBarBottom/>
            </div>
        );
    }
}