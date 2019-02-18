import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss'
class FixTop extends Component {
    render() {
        return (
            <div className={'fixTop'}>
                {/*吸顶盒*/}
                <Link to={'/search'}>
                    <i className={'iconfont icon-sousuo'}></i>
                    <span>搜索饿了么商家、商品名称</span>
                </Link>
            </div>
        );
    }
}

export default FixTop;