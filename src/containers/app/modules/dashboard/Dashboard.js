import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Highcharts from 'highcharts';

import Chart from 'components/Chart';

import * as actions from 'reduxes/actions/index';

class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.config = [{
            chart: {
                type: 'solidgauge'
            },
            title: {
                text: '22',
                align: 'center',
                verticalAlign: 'middle'
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
                    y: 22
                }]
            }]
        }];

    }

    render() {
        return (
            <div className="dpe-list">

                <Chart config={this.config}/>

            </div>
        );
    }
}

Dashboard.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);