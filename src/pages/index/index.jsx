import React, { Component, Fragment } from 'react';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import style from './index.module.css';
import { get_home } from '../../utils/api';
import ContentBox from '../components/content-box';
import Pie from './components/pie';
import Bar from './components/bar';
import Map from './components/map';
import Dotted from './components/dotted';


/*
 * @Author: lijianqiang01
 * @Email: lijianqiang01@baidu.com
 * @Date: 2020-09-18 16:11:34
 * @Last Modified by: lijianqiang
 * @Last Modified time: 2020-09-20 22:02:44
 * @Description: 封装首页
 */

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {},
            totalTitle: "全球总感染人数",
            totalChange: "切换全国",
        };
    }

    async componentDidMount() {
        const options = await get_home('/time', 'get', {a:1});
        // 指定图表的配置项和数据
        this.setState(state => ({
            option: options,
        }));
    }

    handleChangeCountry = () => {
        this.setState(state => {
            return state.totalTitle.indexOf("球") > -1
            ?
            {
                totalTitle: "全国总感染人数",
                totalChange: "切换全球",
            }
            :
            {
                totalTitle: "全球总感染人数",
                totalChange: "切换全国",
            }
        })
    }

    render() {
        const { option, totalTitle, totalChange } = this.state;

        return (
            <Fragment>
                <div className={style.contentBox}>
                    <div className={style.contentBoxLeft}>
                        <div className={style.contentBoxLeftTop}>
                            <ContentBox>
                                <div className={style.ltHeader}>
                                    <div className={style.ltHeaderLeft}>{totalTitle}</div>
                                    <div onClick={this.handleChangeCountry} className={style.ltHeaderRight}>{totalChange}</div>
                                </div>
                                <div className={style.ltContet}>
                                    <div className={style.ltContetTop}>19998</div>
                                    <div className={style.ltContetTitle}>今日
                                        <div className={style.ltContetNum}>9999</div>
                                    </div>
                                    <div className={style.ltContetTitle}>昨日
                                        <div className={style.ltContetNum}>9999</div>
                                    </div>
                                    <div className={style.ltContetTitle}>近七日
                                        <div className={style.ltContetNum}>9999</div>
                                    </div>
                                    <div className={style.ltContetTitle}>近一月
                                        <div className={style.ltContetNum}>9999</div>
                                    </div>
                                </div>
                            </ContentBox>
                        </div>
                        <div className={style.contentBoxLeftCenter}>
                            <ContentBox>
                            <div className={style.ltHeader}>
                                    <div className={style.ltHeaderLeft}>男女分布</div>
                                    <div className={style.ltHeaderRightNoCursor}>年龄分布</div>
                                </div>
                                <div className={style.lcBox}>
                                    <div className={style.lcBoxItem}><Pie /></div>
                                    <div className={style.lcBoxItem}><Pie /></div>
                                </div>
                            </ContentBox>
                        </div>
                        <div className={style.contentBoxLeftBottom}>
                            <ContentBox>
                                <div className={style.mr10}>
                                    <Bar />
                                </div>
                            </ContentBox>
                        </div>
                    </div>
                    <div className={style.contentBoxCenter}>
                        <ContentBox>
                            <div className={style.map}>
                                <Map />
                            </div>
                            <div className={style.dotted}>
                                <Dotted />
                            </div>
                        </ContentBox>
                    </div>
                    <div className={style.contentBoxRight}>
                        <ContentBox />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Index;
