import React, {Component} from 'react';
import "./index.scss";
import Axios from "axios";
class PromotionSub extends Component {
    state = {
        list: {}
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
        Axios.get('http://47.100.98.54:9019/api/promotionSub')
            .then((res)=>{
                this.setState({
                    list: res.data.data[id]
                })
            })
    }

    render() {
        return (
            <div className={'promotionSub'}>
                <img src={this.state.list.img} alt=""/>
            </div>
        );
    }
}

export default PromotionSub;