import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {GlobalStyle} from  '../../statics/iconfont/iconfont'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends Component{
    render () {
        const {focused, handleInputFocus, handleInputBlur, handleChangePage, page, totalPage, list, onMouseEnter, onMouseLeave, mouseIn} = this.props
        return (
            <HeaderWrapper>
                <Logo/>
                <GlobalStyle/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() =>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused zoom iconfont icon-fangdajing' : 'iconfont zoom icon-fangdajing'}/>
                        {
                            focused || mouseIn ? <SearchInfo
                                onMouseEnter={() => onMouseEnter()}
                                onMouseLeave={() => onMouseLeave()}
                            >
                                <SearchInfoTitle>
                                    热门搜索
                                    <SearchInfoSwitch
                                        onClick = {() => handleChangePage(page, totalPage, this.spinIcon)}
                                    >
                                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-shuaxin spin"/>
                                        换一批
                                    </SearchInfoSwitch>
                                </SearchInfoTitle>
                                <SearchInfoList>
                                    {list.toJS().slice((page - 1) * 10, page * 10).map(item => (
                                        <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    ))}
                                </SearchInfoList>
                            </SearchInfo> : null
                        }

                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont icon-yumaobi"/>
                        写文章
                    </Button>
                    <Button className="reg">
                        注册
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispathToProps = (dispatch => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)'
            if (page < totalPage) {

                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }

        },
        onMouseEnter () {
            dispatch(actionCreators.mouseEnter())
        },
        onMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        }
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Header)