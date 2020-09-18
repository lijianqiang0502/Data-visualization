import React, { Component } from 'react';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import style from './index.module.css';
import { get_home } from '../../utils/api';

/*
 * @Author: lijianqiang01
 * @Email: lijianqiang01@baidu.com
 * @Date: 2020-09-18 16:11:34
 * @Last Modified by:   lijianqiang01
 * @Last Modified time: 2020-09-18 16:11:34
 * @Description: 封装首页
 */

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {},
        };
    }

    async componentDidMount() {
        const options = await get_home('/time', 'get', {a:1});
        // 指定图表的配置项和数据
        this.setState({
            option: options,
        });
    }

    render() {
        return (
            <div>
                <ReactEcharts className={style.bar} option={this.state.option} />
            </div>
        )
    }
}

export default Index;