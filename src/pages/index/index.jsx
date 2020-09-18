import React, { Component } from 'react';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import style from './index.module.css';
import { get_home } from '../../utils/api';


class Index extends Component {

    constructor(props) {
        super(props);
        this.table = React.createRef();
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