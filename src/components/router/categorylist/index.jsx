import React, {Component} from 'react';

import './index.scss'
import GoodsList from "../../recommend/goodsList";
import Menu from "../../recommend/menu";

import Arrow from "../../back";

import Axios from "axios";

class CategoryList extends Component {
    state = {
        list: [],
        cate: ['美食','甜品饮品','商超便利','预定早餐','果蔬生鲜','新店特惠','准时达','晚餐','汉堡薯条','包子粥店','鲜花蛋糕','麻辣烫','川香菜','披萨意面','异国料理']

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        //console.log(id)
        Axios.get('http://47.100.98.54:9019/api/category/list'+id).then((res)=>{
            // console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }
    getCate = ()=>{
        // console.log(this.props.match.params)
        const id= this.props.match.params.id
        return this.state.cate[id]
    }
    loadMoreFn = ()=>{
        const id = this.props.match.params.id;
        const list = this.state.list;
        Axios.get('http://47.100.98.54:9019/api/category/list'+id).then((res)=>{
            // console.log(res.data.data)
            this.setState({
                list: list.concat(res.data.data)
            })
        })
    }
    render() {
        return (
            <div className={'categorylist'}>
                 <div className={'hd'}>
                     <div className={'head'}>
                         <Arrow></Arrow>
                         {/*<div className={'back iconfont icon-arrow1'}></div>*/}
                         <div className={'title'}>{this.getCate()}</div>
                     </div>
                     <div className={'navTop'}>
                         <div className={'list'}>
                             <ul>
                                 <li>
                                     <a href="/" className={'active'}>
                                         全部
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/" >
                                         简餐便当
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/">小吃炸串</a>
                                 </li>
                                 <li>
                                     <a href="/">
                                         面食粥点
                                     </a>

                                 </li>
                                 <li>
                                     <a href="/">
                                         地方菜系
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/">
                                         汉堡披萨
                                     </a>
                                 </li>
                                 <li><a href="/">
                                     香锅冒菜
                                 </a></li>
                                 <li>
                                     <a href="/">
                                         轻食西餐
                                     </a>
                                 </li>
                             </ul>
                         </div>
                         <div className={'icon iconfont icon-arrow-down'}></div>
                     </div>
                 </div>

                {/*商品列表*/}
                <Menu></Menu>
                {
                    this.state.list.length>0 && <GoodsList loadMore={this.loadMoreFn} list={this.state.list}></GoodsList>
                }

            </div>
        );
    }
}

export default CategoryList;