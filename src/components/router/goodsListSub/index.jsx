import React, {Component} from 'react';

import {connect} from "react-redux";
import {addCart,reduceCart} from "../../../actions/cart";

import Arrow from "../../back";
import "./index.scss";

import Axios from "axios";

@connect(
    state=>({shop:state}),
    {addCart,reduceCart}
)
class GoodsListSub extends Component {

    state = {
        list:{},
        product:[]
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
        Axios.get('http://47.100.98.54:9019/api/detail/'+id)
            .then((res)=>{
                //
                // console.log(res.data)
                this.setState({
                    list: res.data,
                    product: res.data.product
                })
            })
    }
    monthSaleTotal = ()=>{
        const list = this.state.product;
        let arr = [];
        list.map((item,index)=>{
            let num = []
            item.list.map((item,index)=>{
                num.push(item.foodsale)
                return true
            })
            let count = num.reduce((prev,next)=>{
                return prev+next;
            })
            arr.push(count)
            return true
        })
        if( arr.length ){
            // console.log(arr)
            let monthTotal = arr.reduce((prev,next)=>{
                return prev+next;
            })
            return monthTotal;
        }
    }

    render() {
        const list = this.state.list;
        const product = this.state.product;
        //console.log(product)
        console.log(this.props.shop)
        return (
            <div className={'shopList'}>
                {/*<Link to={'/'} className={'back iconfont icon-arrow1'}></Link>*/}
                <Arrow></Arrow>
                <div className={'shopContent'}>
                    <div className={'hd'}>
                        <div className={'shopIcon'}>
                            <img src={list.img} alt={list.title}/>
                        </div>
                    </div>

                    <div className={'shopTitle'}>
                        <div className={'title'}>{list.title}</div>
                        <div className={'comment'}>
                            <span>评价{list.averageScore}</span>
                            <span>月销{ this.monthSaleTotal() }单</span>
                            <span>峰鸟快送{list.foodTime}分钟</span>
                        </div>
                        <div className={'cash'}>
                            <img src={require('./img/money.png')} alt=""/>
                        </div>
                        <div className={'newuser'}>
                            <span className={'first'}>首单</span>
                            <span className={'userReduce'}>新用户下单立减14元(不与其它活动同享)</span>
                            <span className={'discount'}>10个优惠</span>
                        </div>
                        <div className={'tip'}>
                            公告：餐厅是我的事业，口味是我的职业。您的满意是我们的追求。呷不腻烧烤欢迎您。{list.notice}
                        </div>
                    </div>

                    <div className={'foodlist'}>
                            {
                                product.map((item,index)=>{
                                    return (
                                        <ul key={index}>
                                            {
                                                item.list.map((item,index)=>{
                                                    const name = item.foodTitle
                                                    const fooddescription = '主要原料:'+item.fooddescription
                                                    const foodsale = '月售'+ item.foodsale  +'份'
                                                    const foodrating = '好评率' + item.foodrating+'%'
                                                    const foodprice = '￥'+ item.foodprice
                                                    return (
                                                        <li key={index}>
                                                            <div className={'foodIcon'}>
                                                                <img src={item.img} alt=""/>
                                                            </div>
                                                            <div className={'foodInfo'}>
                                                                <div className={'info'}>
                                                                    <p className={'title'}> {item.foodTitle} </p>
                                                                    <p className={'mainMaterial'}>主要原料:{item.fooddescription}</p>
                                                                    <p className={'goodComment'}>
                                                                        <span>月售{item.foodsale}份</span>
                                                                        <span>好评率{item.foodrating}%</span>
                                                                    </p>
                                                                </div>
                                                                <div className={'price'}>
                                                                    <div className={'money'}>￥{item.foodprice}</div>
                                                                    <div className={'addOrReduce'}>
                                                                        <span onClick={()=>{
                                                                            return this.props.reduceCart({
                                                                                shopCate:index,
                                                                                num:-1,
                                                                                info:{
                                                                                    name,
                                                                                    fooddescription,
                                                                                    foodsale,
                                                                                    foodrating,
                                                                                    foodprice
                                                                                }
                                                                            })
                                                                        }}
                                                                            className={'remove iconfont icon-jianshao1'}
                                                                        ></span>
                                                                        <span className={'num'}>1</span>
                                                                        <span onClick={()=>{
                                                                            return this.props.addCart({
                                                                                shopCate:index,
                                                                                num:1,
                                                                                info:{
                                                                                    name,
                                                                                    fooddescription,
                                                                                    foodsale,
                                                                                    foodrating,
                                                                                    foodprice
                                                                                }
                                                                            })
                                                                        }}
                                                                            className={'add iconfont icon-xinzeng'}
                                                                        ></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                            {/*
                            <ul>
                            <li>
                                <div className={'foodIcon'}>
                                    <img src={require('./img/1.jpeg')} alt=""/>
                                </div>
                                <div className={'foodInfo'}>
                                    <div className={'info'}>
                                        <p className={'title'}> 招牌大鸡腿 </p>
                                        <p className={'mainMaterial'}>主要原料: 鸡腿</p>
                                        <p className={'goodComment'}>
                                            <span>月售1541份</span>
                                            <span>好评率98%</span>
                                        </p>
                                    </div>
                                    <div className={'price'}>
                                        <div className={'money'}>￥9</div>
                                        <div className={'addOrReduce'}>
                                            <span className={'remove iconfont icon-jianshao1'}></span>
                                            <span className={'num'}>1</span>
                                            <span className={'add iconfont icon-xinzeng'}></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            </ul>
                            */}

                    </div>
                </div>

                <div className={'buyCart'}>
                    <div className={'cart'}>
                        <div className={'cartIcon iconfont icon-gouwuche'}>
                            <span className={'num'}>1</span>
                        </div>

                        <div className={'countPrice'}>￥<span>100</span></div>
                    </div>

                    <a href={'/'} className={'buy'}>去结算</a>
                </div>
            </div>
        );
    }
}

export default GoodsListSub;