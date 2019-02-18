import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Rate  } from 'antd';

import "./index.scss";

class GoodsList extends Component {



    state = {
        list: this.props.list
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps)
        this.setState({
            list: nextProps.list
        })
    }


    listenScroll = ()=>{
        // 在父组件 请求新数据  再传递到此组件
        // 在什么时候请求 新的数据
        // 滚动到底部时 就去 请求新的数据
        const element = this.refs.loadMore;
        if(element){
            const top = element.getBoundingClientRect().top;
            const WindowHeight = window.screen.height
            if( top && top<WindowHeight  ){
                console.log('加载更多')
                this.props.loadMore()
            }
        }

    }

    componentWillMount() {
        window.addEventListener('scroll',this.listenScroll)
    }
    componentDidMount() {
        window.addEventListener('scroll',this.listenScroll)
    }



    render() {
        // const list = this.props.list;
        return (
            <div className={'goodsList pd20'}>
                <ul>
                    {
                        // 多个组件 引用了GoodsList组件 都是需要传值
                        // 如果有一个组件没有传值 那么此组件的this.props.list就 未定义 未定义就length属性 就会报错
                        this.state.list.length>0 && this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={'/goodsList'+index}>
                                        <div className={'logo'}><img src={item.img} alt={item.title}/></div>
                                        <div className={'goodsInfo'}>
                                            <span className={'title'}>{item.title}</span>
                                            <div className={'star'}>
                                                <Rate value={item.ratingScore}/>
                                                <span>{item.ratingScore}</span>
                                                <span className={'count'}>月售{item.monthSaleCount}单</span>
                                                <span className={'delivery'}>
                                                    {
                                                        item.labels.map((item,index)=>{
                                                            return <span key={index}>{item.name}</span>
                                                        })
                                                    }
                                                </span>
                                            </div>
                                            <div className={'moneylimit'}>
                                                <div className={'left'}>
                                                    <span className={'startPrice'}>￥{item.startPrice}元起送</span>
                                                    <span>夜间配送费¥{item.freightPrice}</span>
                                                </div>
                                                <div className={'right'}>
                                                    <span>
                                                        {
                                                            item.range>1000?(item.range/1000).toFixed(2)+'km':item.range+'m'
                                                        }
                                                    </span>
                                                    <span>{item.time}分钟</span>
                                                </div>
                                            </div>
                                            <div className={'type'}>盖浇饭</div>

                                            <div className={'discount'}>
                                                {
                                                    item.promotion.map((item,index)=>{
                                                        return (
                                                            <div className={'first'} key={index}>
                                                                <span>{item.type.name}</span>
                                                                <span>{item.detail}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {/*<div className={'first'}>
                                                    <span>首</span>
                                                    <span>新用户下单立马减14元</span>
                                                </div>
                                                <div className={'reduce'}>
                                                    <span>减</span>
                                                    <span>满25减11，满30减10，满40减12</span>
                                                </div>*/}
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })

                    }
                    {/*<li>
                        <Link to={'/goodsList1'}>
                            <div className={'logo'}><img src={require('../../static/img/recommend/goodslist1.webp')} alt=""/></div>
                            <div className={'goodsInfo'}>
                                <span className={'title'}>呷不腻烧烤</span>
                                <div className={'star'}>
                                    <Rate value={4.5}/>
                                    <span>4.5</span>
                                    <span className={'count'}>月售2318单</span>
                                    <span className={'delivery'}>菜鸟专送</span>
                                </div>
                                <div className={'moneylimit'}>
                                    <div className={'left'}>
                                        <span className={'startPrice'}>￥10元起送</span>
                                        <span>夜间配送费¥2.6</span>
                                    </div>
                                    <div className={'right'}>
                                        <span>360m</span>
                                        <span>21分钟</span>
                                    </div>
                                </div>
                                <div className={'type'}>盖浇饭</div>

                                <div className={'discount'}>
                                    <div className={'first'}>
                                        <span>首</span>
                                        <span>新用户下单立马减14元</span>
                                    </div>
                                    <div className={'reduce'}>
                                        <span>减</span>
                                        <span>满25减11，满30减10，满40减12</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>*/}

                </ul>
                <div ref={'loadMore'}>加载更多</div>
            </div>
        );
    }
}

export default GoodsList;