import React, { Component, Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/world'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import {data ,convertData} from './config';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option:{},
        }
    }


    componentDidMount() {

        this.setState(state => ({
            option: {
                backgroundColor: 'transparent',
                title: {
                    text: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                // tooltip: {
                //     trigger: e.counts
                // },
                grid:{
                    width:500,
                    height:500,
                },
                visualMap: {
                    type: 'piecewise',
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    color: ['#d94e5d','#f7d45b'],
                    show:false,
                },
                geo: {
                    map: 'world',
                    label: {
                        show: false,
                        color: '#fff',
                        emphasis: {
                            show: false,
                            color: '#fff',
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#406fa8',
                            borderColor: '#41567d'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: 12,
                        label: {
                            formatter: '{b}: {@value}',
                            emphasis: {
                                show: true
                            }
                        },
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        }
                    }
                ]
            }
        }));
    }

    render() {
        const {option} = this.state;
        return(
            <Fragment>
                <ReactEcharts style={{marginTop: 30,height: 500}} option={option} />
            </Fragment>
        )
    }
}

export default Index;
