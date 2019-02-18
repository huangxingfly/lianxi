import React, {Component} from 'react';
import "./index.scss";

import Axios from "axios";
class ScareBuySub extends Component {

    state = {
        list:[]
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        const id = this.props.match.params.id
        Axios.get('http://47.100.98.54:9019/api/scarebuySub').then((res)=>{
            this.setState({
                list:res.data.data[id]
            })
        })
    }


    render() {
        return (
            <div className={'ScareBuySub'} >
                {/*<div className={'ScareBuySub'} style={{background:`url(${this.state.list.img}) top/cover`}}>*/}
                <img src={this.state.list.img} width={'100%'} height={'100%'} alt=""/>
            </div>
        );
    }
}

export default ScareBuySub;