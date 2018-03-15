import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import classNames from 'classnames';

import 'scss/components/FieldSet.scss';

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

class SolidGaugeChart extends Component {

    constructor(props) {

        super(props);

        this.chart = null;

        this.getConfig = ::this.getConfig;

    }

    getConfig(props = this.props) {

        const {title, value} = props;

        return {
            credits: {
                enabled: false
            },
            chart: {
                type: 'solidgauge'
            },
            title: {
                text: title,
                align: 'center',
                verticalAlign: 'middle',
                useHTML: true
            },
            tooltip: {
                enabled: false
            },
            pane: {
                background: null
            },
            yAxis: {
                min: 0,
                max: 120,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    borderWidth: '10px',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                borderColor: '#f00',
                data: [{
                    radius: '100%',
                    innerRadius: '100%',
                    y: value
                }]
            }]
        };
    }

    componentDidMount() {
        this.chart = Highcharts.chart(this.refs.chart, this.getConfig());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.chart.series[0].setData({
                radius: '100%',
                innerRadius: '100%',
                y: nextProps.value
            });
        }
    }

    render() {

        const {className, ...restProps} = this.props,

            chartClassName = classNames('solid-gauge-chart', {
                [className]: className
            });

        return (
            <div {...restProps}
                 ref="chart"
                 className={chartClassName}></div>
        );
    }
}

SolidGaugeChart.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    value: PropTypes.number

};

export default SolidGaugeChart;