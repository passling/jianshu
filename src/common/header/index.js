import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {GlobalStyle} from  '../../statics/iconfont/iconfont'
import {connect} from 'react-redux'
import {searchFocus, searchBlur, getList} from '../../store/actionCreators'
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
    getListArea () {
        const list = this.props.list.toJS()
    }
    render () {
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
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused zoom iconfont icon-fangdajing' : 'iconfont zoom icon-fangdajing'}/>
                        <SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch
                                    onClick = {() => this.props.handleChangePage(this.spinIcon)}
                                >
                                    <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-shuaxin spin"/>
                                    换一批
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {this.props.list.toJS().map(item => (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                ))}
                            </SearchInfoList>
                        </SearchInfo>
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
        focused: state.get('focused'),
        list: state.get('list')
    }
}
const mapDispathToProps = (dispatch => {
    return {
        handleInputFocus() {
            dispatch(getList())
            dispatch(searchFocus())
        },
        handleInputBlur() {
            dispatch(searchBlur())
        },
        handleChangePage(spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)'

        }
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Header)