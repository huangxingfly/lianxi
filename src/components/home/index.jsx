import React, {Component} from 'react';


import Axios from "axios";

import './index.scss';
import 'antd/dist/antd.css';


import Location from "../location";
import FixTop from "../fixtop";
import CateGory from "../category";
import ScareBuy from "../scarebuy";
import Promotion from "../promotion";
import RecommendIcon from "../recommend/recommendIcon.jsx";
import Menu from "../recommend/menu.jsx";
import GoodsList from "../recommend/goodsList.jsx";
import IndexFootNav from "../indexfootnav";

class Home extends Component {

    state = {
        list:[]
    }

    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/shoplist').then((res)=>{
            // console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }


    loadMoreFn = ()=>{
        const list = this.state.list
        Axios.get('http://47.100.98.54:9019/api/shoplist').then((res)=>{
            // console.log(res.data.data)
            this.setState({
                list: list.concat(res.data.data)
            })
        })
    }

    render() {
        return (
            <div className={'App'}>
                {/*定位*/}
                <Location></Location>

                {/*吸顶盒*/}
                <FixTop></FixTop>

                {/*分类导航*/}
                <CateGory></CateGory>

                {/*抢购*/}
                <ScareBuy></ScareBuy>

                {/*促销*/}
                <Promotion></Promotion>

                {/*推荐*/}
                <RecommendIcon></RecommendIcon>
                <Menu></Menu>
                {/*商品列表*/}
                <GoodsList loadMore={this.loadMoreFn} list={this.state.list}></GoodsList>


                {/*底部导航*/}
                <IndexFootNav></IndexFootNav>
            </div>
        );
    }
}

export default Home;