import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Carousel  } from 'antd';
import "./index.scss";

import Axios from "axios";

class CateGory extends Component {
    state = {
        category:[]
    }

    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/category')
            .then((res)=>{
                // console.log(res.data)
                this.setState({
                    category:res.data.data
                })
            })
    }

    render() {

        return (
            <div className={'category'}>
                {/*分类导航*/}
                <Carousel >
                    <div className={'item'}>
                        {
                            this.state.category.length>0 && this.state.category.map((item,index)=>{
                                //console.log(item ,123)
                                if( index>=10 ){return false}
                                return (
                                    <Link key={item.id} to={`/category/list${index}`}>
                                        <img src={item.img} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                        {/*<Link to={'/category/list1'}>
                            <img src={require('../../static/img/category/1.webp')} alt=""/>
                            <span>美食</span>
                        </Link>
                        <Link to={'/category/list2'}>
                            <img src={require('../../static/img/category/2.webp')} alt=""/>
                            <span>商超便利</span>
                        </Link>
                        <Link to={'/category/list3'}>
                            <img src={require('../../static/img/category/3.webp')} alt=""/>
                            <span>午餐</span>
                        </Link>
                        <Link to={'/category/list4'}>
                            <img src={require('../../static/img/category/4.webp')} alt=""/>
                            <span>水果</span>
                        </Link>
                        <Link to={'/category/list5'}>
                            <img src={require('../../static/img/category/5.webp')} alt=""/>
                            <span>医药健康</span>
                        </Link>
                        <Link to={'/category/list6'}>
                            <img src={require('../../static/img/category/6.webp')} alt=""/>
                            <span>浪漫鲜花</span>
                        </Link>
                        <Link to={'/category/list7'}>
                            <img src={require('../../static/img/category/7.webp')} alt=""/>
                            <span>厨房生鲜</span>
                        </Link>
                        <Link to={'/category/list8'}>
                            <img src={require('../../static/img/category/8.webp')} alt=""/>
                            <span>地方小吃</span>
                        </Link>
                        <Link to={'/category/list9'}>
                            <img src={require('../../static/img/category/9.webp')} alt=""/>
                            <span>签到领红包</span>
                        </Link>
                        <Link to={'/category/list10'}>
                            <img src={require('../../static/img/category/10.webp')} alt=""/>
                            <span>地方菜系</span>
                        </Link>*/}

                    </div>

                    <div className={'item'}>
                        {
                            this.state.category.length && this.state.category.map((item,index)=>{
                                if( index<10 ){return false}
                                return (
                                    <Link key={item.id} to={`/category/list${index}`}>
                                        <img src={item.img} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }

                        {/*<Link to={'/category/list11'}>
                            <img src={require('../../static/img/category/1.webp')} alt=""/>
                            <span>美食</span>
                        </Link>
                        <Link to={'/category/list12'}>
                            <img src={require('../../static/img/category/2.webp')} alt=""/>
                            <span>商超便利</span>
                        </Link>
                        <Link to={'/category/list13'}>
                            <img src={require('../../static/img/category/3.webp')} alt=""/>
                            <span>午餐</span>
                        </Link>*/}


                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CateGory;