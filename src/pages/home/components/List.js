import React, {Component} from 'react'
import {connect} from 'react-redux'
class List extends Component{
    render() {
        return(
            <div>列表数据</div>
        )
    }
}
const matStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'acticleList'])
    }
}
const mapDispathToProps = (dispatch) => {
    return{}
}
export default connect(matStateToProps, mapDispathToProps)(List)