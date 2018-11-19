import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../home/store'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Slider from './components/Slider'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";
const Img = [

]
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
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        bannerList: state.getIn(['home', 'bannerList'])
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