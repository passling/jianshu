import React, {Component} from 'react'
import {connect} from 'react-redux'
import {RecommendItem} from "../style";

class Recommend extends Component{
    render() {
        return(
            <div>
                {this.props.recommendList.map((item, index) => (
                    <RecommendItem key={index}>
                        <img src={item.get('imgUrl')} alt=""/>
                    </RecommendItem>
                ))}
            </div>
        )
    }
}
const mapState = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend)