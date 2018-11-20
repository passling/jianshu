import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../home/store'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Slider from './components/Slider'
import DownLoad from './components/DownLoad'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";
class Home extends Component{
    componentDidMount() {
        this.props.changeHomeData()
    }
    render () {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Slider images={this.props.bannerList}/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <DownLoad/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        bannerList: state.getIn(['home', 'bannerList']),
        articleList: state.getIn(['home', 'articleList'])
    }
}
const mapDiapathToProps = (dispatch => {
    return {
        changeHomeData () {
            dispatch(actionCreators.getHomeInfo())
        }
    }
})
export default connect(mapStateToProps, mapDiapathToProps)(Home)