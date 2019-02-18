import React, {Component} from 'react';

import Header from "../../header";
import "./index.scss";
import IndexFootNav from "../../indexfootnav";

class My extends Component {
    render() {
        return (
            <div className={'my'}>
                <Header></Header>
                <div className={'avatar'}>
                    <div className={'icon'}>
                        <img src={require('./img/icon.png')} alt=""/>
                    </div>
                    <div className={'userInfo'}>
                        <div className={'con'}>
                            <a href='/' className={'login'}>登录</a>
                            <span>/</span>
                            <a href='/' className={'register'}>注册</a>
                        </div>
                        <div className={'des iconfont icon-shouji2'}>登录后享受更多特权</div>
                    </div>
                    <div className={'arrow iconfont icon-arrow-right'}></div>
                </div>

                <div className={'myMoney'}>
                    <a href="/"><span className={'iconfont icon-money3 '}></span><p>钱包</p></a>
                    <a href="/"><span className={'iconfont  icon-hongbao'}></span><p>红包</p></a>
                    <a href="/"><span className={'iconfont icon-jinbi1'}></span><p>金币</p></a>
                </div>

                <div className={'mainInfo'}>
                    <a href={'/'} className={'infoList'}>
                        <span className={'icon iconfont icon-dingwei1'}></span>
                        <span className={'title'}>我的地址</span>
                    </a>
                    <a href={'/'} className={'infoList'}>
                        <span className={'icon iconfont icon-jinbi1'}></span>
                        <span className={'title'}>金币商城</span>
                    </a>
                    <a href={'/'} className={'infoList'}>
                        <span className={'icon iconfont icon-liwu1'}></span>
                        <span className={'title'}>分享拿10元现金</span>
                    </a>
                    <a href={'/'} className={'infoList'}>
                        <span className={'icon iconfont icon-kefu'}></span>
                        <span className={'title'}>我的客服</span>
                    </a>
                    <a href={'/'} className={'infoList'}>
                        <span className={'icon iconfont icon-changyonglogo40'}></span>
                        <span className={'title'}>下载饿了么APP</span>
                    </a>
                </div>

                {/*底部导航*/}
                <IndexFootNav></IndexFootNav>
            </div>
        );
    }
}

export default My;