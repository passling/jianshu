import React, {Component} from 'react'
import {DownLoadWrapper, DownLoadInfo, DownLoadImg} from '../style'
class DownLoad extends Component{
    constructor() {
        super()
        this.state = {
            focused: false
        }
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }
    onMouseEnter() {
        this.setState({
            focused: true
        })
    }
    onMouseLeave() {
        this.setState({
            focused: false
        })
    }
    render() {
        return(
            <DownLoadWrapper
                onMouseEnter={() => {this.onMouseEnter()}}
                onMouseLeave={() => {this.onMouseLeave()}}
            >
                <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                <DownLoadInfo>
                    <p className="title">下载简书手机App<i className="iconfont icon-you"/> </p>
                    <p className="desc">随时随地发现和创作内容</p>
                </DownLoadInfo>
                {
                    this.state.focused ? <DownLoadImg>
                        <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    </DownLoadImg> : null
                }

            </DownLoadWrapper>
        )
    }
}
export default DownLoad