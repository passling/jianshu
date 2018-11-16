import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";

class Home extends Component{
    render () {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4573/8e236c77ce2141beeaee6515fb3abddfbb617fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home