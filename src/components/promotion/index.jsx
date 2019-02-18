import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";
import { Carousel  } from 'antd';

import Axios from "axios";
class Promotion extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/promotion')
            .then((res)=>{
                this.setState({
                    list: res.data.data
                })
            })
    }

    render() {
        return (
            <div className={'promotion pd20'}>
                {/*促销*/}
                <Carousel autoplay>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div key={index} className={'item'}>
                                    <Link to={'/promotion/sub'+item.id}>
                                        <img src={item.img} alt=""/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    {/*<div className={'item'}>
                        <Link to={'/promotion/sub1'}>
                            <img src={require('../../static/img/promotion/1.webp')} alt=""/>
                        </Link>
                    </div>
                    <div className={'item'}>
                        <Link to={'/promotion/sub2'}>
                            <img src={require('../../static/img/promotion/2.webp')} alt=""/>
                        </Link>
                    </div>
                    <div className={'item'}>
                        <Link to={'/promotion/sub3'}>
                            <img src={require('../../static/img/promotion/3.webp')} alt=""/>
                        </Link>
                    </div>
                    <div className={'item'}>
                        <Link to={'/promotion/sub4'}>
                            <img src={require('../../static/img/promotion/4.webp')} alt=""/>
                        </Link>
                    </div>
                    <div className={'item'}>
                        <Link to={'/promotion/sub5'}>
                            <img src={require('../../static/img/promotion/5.webp')} alt=""/>
                        </Link>
                    </div>*/}
                </Carousel>
            </div>
        );
    }
}

export default Promotion;