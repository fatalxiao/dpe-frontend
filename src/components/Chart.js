import React, {Component} from 'react';
import PropTypes from 'prop-types';
import highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import classNames from 'classnames';

import 'scss/components/FieldSet.scss';

highchartsMore(highcharts);
SolidGauge(highcharts);

class Chart extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        highcharts.chart(this.refs.chart, ...this.props.config);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.config) {
            highcharts.chart(this.refs.chart, ...nextProps.config);
        }
    }

    render() {

        const {className, ...restProps} = this.props,

            chartClassName = classNames('chart', {
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