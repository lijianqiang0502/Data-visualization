import React, { Component, Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option:{},
        }
    }


    componentDidMount() {

        let category = [];
        let dottedBase = +new Date();
        let lineData = [];
        let barData = [];

        for (let i = 1; i <= 12; i++) {
            category.push(i + "月");
            let b = Math.random() * 200;
            let d = Math.random() * 200;
            barData.push(b)
            lineData.push(d + b);
        }


        this.setState(state => ({
            option: {
                backgroundColor: '#252543',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    bottom: 0,
                    containLabel: true,
                },
                legend: {
                    data: ['全球', '全国'],
                    textStyle: {
                        color: '#ccc'
                    },
                },
                xAxis: {
                    data: category,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                series: [{
                    name: '全球',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 15,
                    data: lineData
                }, {
                    name: '全国',
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#14c8d4'},
                                {offset: 1, color: '#43eec6'}
                            ]
                        )
                    },
                    data: barData
                },{
                    name: '当日累计',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        color: '#0f375f'
                    },
                    emphasis: {
                      show: false,
                    },
                    symbolRepeat: true,
                    symbolSize: [12, 4],
                    symbolMargin: 1,
                    z: -10,
                    data: lineData
                }]
            }
        }));
    }

    render() {
        const {option} = this.state;
        return(
            <Fragment>
                <ReactEcharts style={{height: 320}} option={option} />
            </Fragment>
        )
    }
}

export default Index;
