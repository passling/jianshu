import React, {Component} from 'react'
import {connect} from 'react-redux'
import {WriterWrapper, WriterTitle, WriterSwitch, WriterButton} from "../style";
import {actionCreators} from '../store'


class Writer extends Component{
    constructor() {
        super()
        this.state = {
            page: 1,
            pageSize: 5
        }
        this.changeWriterList = this.changeWriterList.bind(this)
    }
    componentDidMount() {
        this.props.getWriterList()
    }
    changeWriterList(icon) {
        let {page} = this.state
        let originAngle = icon.style.transform.replace(/[^0-9]/ig, '')
        if (originAngle) {
            originAngle = parseInt(originAngle)
        } else {
            originAngle = 0
        }
        icon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
        const {writerListTotalPage} = this.props
        if (page < writerListTotalPage) {
            this.setState((preState) =>({
                page: preState.page + 1
            }))
        } else {
            this.setState({
                page: 1
            })
        }
    }
    render() {
        const {page, pageSize} = this.state
        return(
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch onClick={() => this.changeWriterList(this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-shuaxin spin"/>
                        换一批
                    </WriterSwitch>
                </WriterTitle>
                <ul>
                    {
                        this.props.writerList.toJS().slice((page-1) * pageSize, page*pageSize).map(item => (
                            <li className="writerList" key={item.id}>
                                <img src={item.avatar_source} alt=""/>
                                <div className="detailBox">
                                    <p className="writerName">{item.nickname} <span><i className="iconfont icon-icon-test"/>关注</span></p>
                                    <p className="writerDetail">
                                        写了{item.total_likes_count}字 <span style={{marginLeft: '5px'}}>· {item.total_wordage}喜欢</span>
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <WriterButton>查看全部<i className="iconfont icon-you"/></WriterButton>
            </WriterWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList']),
        writerListTotalPage: state.getIn(['home', 'writerTotalPage'])
    }
}
const mapDispathToProps = (dispatch => {
    return {
        getWriterList() {
            dispatch(actionCreators.getWriterListInfo())
        }
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Writer)