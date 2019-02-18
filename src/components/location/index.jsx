import React, {Component} from 'react';

import './index.scss';

import Axios from "axios";
class Location extends Component {
    state = {
        city: ''
    }

    componentDidMount() {
        Axios.get('http://route.showapi.com/9-4',{
            params:{
                'showapi_appid':'37928',
                'showapi_sign':'d0ca1605e19241c38849c3fb9a56b447'
            }
        }).then((res)=>{
            // console.log(res.data.showapi_res_body.cityInfo.c3)
            this.setState({
                city: res.data.showapi_res_body.cityInfo.c3
            })
        })
    }

    render() {
        return (
            <div className={'location'}>
                {/*定位*/}
                <div className={'sub'}>
                    <span className={'dingwei iconfont icon-dingwei'}></span>
                    <span className={'info'}>{this.state.city?this.state.city:'正在获取中...'}</span>
                    <span className={'iconfont icon-sanjiaodown'}></span>
                </div>
            </div>
        );
    }
}

export default Location;