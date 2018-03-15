import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import classNames from 'classnames';

import 'scss/components/CircularChart.scss';

class CircularChart extends Component {

    constructor(props) {

        super(props);

        this.chart = null;

        this.getConfig = ::this.getConfig;

    }

    getConfig(props = this.props) {

        const {title, value, total} = props;

        return [{
            credits: {
                enabled: false
            },
            chart: {
                type: 'pie'
            },
            title: {
                floating: true,
                text: ''
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    point: {
                        events: {
                            mouseOver: function (e) {
                                chart.setTitle({
                                    text: e.target.name + '\t' + e.target.y
                                });
                            },
                            mouseOut: function (e) {
                                chart.setTitle({
                                    text: ''
                                });
                            }
                        }
                    }
                }
            },
            series: [{
                innerSize: '80%',
                name: '市场份额',
                data: [
                    ['DPE+PIEB', 20],
                    ['DPE+CEI', 5],
                    ['EP+CEI', 8]
                ]
            }]
        }, function (c) {
            // 环形图圆心
            console.log(c.series[0]);
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
                y: centerY + titleHeight / 2
            });
            chart = c;
        }];
    }

    componentDidMount() {
        this.chart = Highcharts.chart(this.refs.chart, ...this.getConfig());
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

CircularChart.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    title: PropTypes.string,
    value: PropTypes.number,
    total: PropTypes.number

};

export default CircularChart;