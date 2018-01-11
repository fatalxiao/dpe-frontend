import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import 'scss/containers/app/nav/bar/Brand.scss';

export default class Brand extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="brand">
                <Link className="brand-name"
                      to="/"/>
            </div>
        );
    }
}