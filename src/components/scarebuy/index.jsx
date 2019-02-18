import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";

import Axios from "axios";
class ScareBuy extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/scarebuy').then((res)=>{
            //console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }


    render() {
        return (
            <div className={'scarebuy pd20'}>
                {/*抢购*/}
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <Link key={index} to={'/scarebuy/sub'+index}>
                                <img src={item.img} alt={item.title}/>
                            </Link>
                        )
                    })
                }
                {/*<Link to={'/scarebuy/sub1'}>
                    <img src={require('../../static/img/scarebuy/1.png')} alt=""/>
                </Link>
                <Link to={'/scarebuy/sub2'}>
                    <img src={require('../../static/img/scarebuy/2.png')} alt=""/>
                </Link>*/}
            </div>
        );
    }
}

export default ScareBuy;