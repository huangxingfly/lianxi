import React, {Component} from 'react';
import {Icon,Input} from "antd";
import "./index.scss";

const Search1 = Input.Search;

class Search extends Component {
    render() {
        return (
            <div className={'searchIcon pd20'}>
                <div className={'top'}>
                    <Icon type="left" theme="outlined" />
                    <div className={'Search1'}>
                        <Search1
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>
                </div>

                <div className={'hotSearch'}>
                    <div className={'title'}>热门搜索</div>
                    <div className={'hotGoods'}>
                        <span>披萨</span>
                        <span>汤包</span>
                        <span>寿司</span>
                        <span>奶茶</span>
                        <span>鸡</span>
                        <span>烧烤</span>
                        <span>粥</span>
                        <span>炸鸡</span>
                        <span>木桶饭</span>
                        <span>凉面</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;