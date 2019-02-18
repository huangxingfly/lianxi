import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Layout from "./components/layout";
import Home from "./components/home";

// 路由组件
import Search from "./components/router/search";
import CategoryList from "./components/router/categorylist";
import ScareBuySub from "./components/router/scarebuySub";
import PromotionSub from "./components/router/promotionSub";
import Find from "./components/router/find";
import My from "./components/router/my";
import GoodsListSub from "./components/router/goodsListSub";



class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path={'/'} component={Home}></Route>
                        <Route path={'/search'} component={Search}></Route>
                        <Route path={'/category/list:id'} component={CategoryList}></Route>
                        <Route path={'/scarebuy/sub:id'} component={ScareBuySub}></Route>
                        <Route path={'/promotion/sub:id'} component={PromotionSub}></Route>
                        <Route path={'/find'} component={Find}></Route>
                        <Route path={'/my'} component={My}></Route>
                        <Route path={'/goodsList:id'} component={GoodsListSub}></Route>

                    </Switch>

                </Layout>
            </Router>
        );
    }
}

export default App;
