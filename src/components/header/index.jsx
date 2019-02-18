import React, {Component} from 'react';
import './index.scss'
class Header extends Component {
    render() {
        return (
            <div className={'head'}>
                <div className={'back iconfont icon-arrow1'}></div>
                <div className={'title'}>美食</div>
            </div>
        );
    }
}

export default Header;