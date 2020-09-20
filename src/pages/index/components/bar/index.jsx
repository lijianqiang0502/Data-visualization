import React, { Component, Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markPoint';


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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    itemHeight:  320
                },
                color: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#AFEEEE' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#00FFFF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#87CEEB' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#00BFFF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#4169E1' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#6495ED' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#0000FF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0000CD' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },],
                legend: {
                    left: 0,
                    data: ['20岁下', '20-40岁', '40-60岁', '60岁上'],
                    textStyle: {
                        color: 'white',
                    },
                },
                grid: {
                    left: 10,
                    top: 30,
                    containLabel: true,
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        color: 'white',   
                    },
                    // axisLine: {
                    //     lineStyle: {
                    //         color: 'white',
                    //     }
                    // },
                    splitLine: {
                        show: false,
                    }
                },
                yAxis: {
                    type: 'category',
                    // axisLine: {
                    //     lineStyle: {
                    //         color: 'white',
                    //     }
                    // },
                    data: [{
                        value: '美国',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '日本',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '韩国',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '英国',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '意大利',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '加拿大',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '瑞典',
                        textStyle: {
                            color: 'white',
                        }
                    },
                    {
                        value: '瑞士',
                        textStyle: {
                            color: 'white',
                        }
                    }]
                },
                series: [
                    {
                        name: '20岁下',
                        type: 'bar',
                        stack: '1',
                        label: {
                            show: true,
                            position: 'insideRight',
                        },
                        data: [320, 302, 301, 334, 390, 330, 320, 200, 400]
                    },
                    {
                        name: '20-40岁',
                        type: 'bar',
                        stack: '2',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210, 200, 400]
                    },
                    {
                        name: '40-60岁',
                        type: 'bar',
                        stack: '3',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310, 200, 400]
                    },
                    {
                        name: '60岁上',
                        type: 'bar',
                        stack: '4',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410, 200, 400]
                    },
                ],
            }
        }));
    }

    render() {
        const {option} = this.state;
        return(
            <Fragment>
                <ReactEcharts style={{height:430}} option={option} />
            </Fragment>
        )
    }
}

export default Index;