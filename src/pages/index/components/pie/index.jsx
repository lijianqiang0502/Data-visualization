import React, { Component, Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/pie';
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

        var itemStyle = {
            normal: {
                opacity: 0.7,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#252445' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderWidth: 3,
                borderColor: '#120f53'
            }
        };

        this.setState(state => ({
            option: {
                tooltip: {
                    showContent: true,
                },
                series: [{
                    name: '疫情人数分布',
                    type: 'pie',
                    clockwise: true,
                    data: [
                        {value: 335, name: '美国'},
                        {value: 310, name: '意大利'},
                        {value: 234, name: '新西兰'},
                        {value: 135, name: '加拿大'},
                        {value: 1548, name: '日本'}
                    ],
                    width: 170,
                    height: 170,
                    label:{
                        show: false,
                    },
                    itemStyle: itemStyle
                }]
            }
        }));
    }

    render() {
        const {option} = this.state;
        return(
            <Fragment>
                <ReactEcharts option={option} />
            </Fragment>
        )
    }
}

export default Index;