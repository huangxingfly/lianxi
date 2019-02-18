import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div className={'menu'}>
                <ul>
                    <li>综合排序 <i  className={'iconfont icon-sanjiaodown'}></i> </li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li>筛选</li>
                </ul>
            </div>
        );
    }
}

export default Menu;