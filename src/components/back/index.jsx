import React, {Component} from 'react';
import "./index.scss";
class Arrow extends Component {
    handleBack = ()=>{
        window.history.go(-1)
    }
    render() {
        return (
            <i onClick={this.handleBack} className={'back iconfont icon-arrow1'}></i>
        );
    }
}

export default Arrow;