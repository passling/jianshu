import React, {Component} from 'react'
import {connect} from 'react-redux'
class Recommend extends Component{
    render() {
        return(
            <div>推荐</div>
        )
    }
}
const mapState = (state) => ({
})
export default connect(mapState, null)(Recommend)