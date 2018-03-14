import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import classNames from 'classnames';

import 'scss/components/FieldSet.scss';

class Chart extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.config) {
            Highcharts.chart(this.refs.chart, ...config);
        }
    }

    render() {

        const {className, config, ...restProps} = this.props,

            chartClassName = className('chart', {
                [className]: className
            });

        return (
            <div {...restProps}
                 ref="chart"
                 className={chartClassName}></div>
        );
    }
}

export default Chart;