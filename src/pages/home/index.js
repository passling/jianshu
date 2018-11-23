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
    HomeRight,
    BackTop
} from "./style";
class Home extends Component{
    constructor() {
        super()
        this.state = {
            showToTop: false
        }
        this.handleScrollTop = this.handleScrollTop.bind(this)
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindScrollEvent()
    }
    handleScrollTop() {
        let scrollTopTimer = setInterval(function() {
            const top = document.documentElement.scrollTop || document.body.scrollTop
            const speed = top / 4
            if (document.body.scrollTop!==0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top === 0) {
                clearInterval(scrollTopTimer);
            }
        }, 30)


    }
    bindScrollEvent() {
        let self = this
        document.addEventListener('scroll', function() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 200) {
                self.setState({
                    showToTop: true
                })
            } else {
                self.setState({
                    showToTop: false
                })
            }

        })
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
                {this.state.showToTop ? <BackTop onClick={() => this.handleScrollTop()}><i className="iconfont icon-arrow-up"/></BackTop> : null}
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