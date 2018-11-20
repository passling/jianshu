import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ListItem, ListInfo} from "../style";

class List extends Component{
    render() {
        const { articleList} = this.props;
        return(
            <div>
                {
                    articleList.map((item, index) =>(
                        <ListItem key={index}>
                            <img src={item.get('imgUrl')} alt="" className="pic"/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                            <p className="info-basic">
                                <span>{item.get('author')}</span>
                                <i className="iconfont icon-tubiao07"></i><span>{item.get('common')}</span>
                                <i className="iconfont icon-xin"></i><span>{item.get('like')}</span>
                                </p>
                        </ListItem>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
}
const mapDispathToProps = (dispatch) => {
    return{}
}
export default connect(mapStateToProps, mapDispathToProps)(List)