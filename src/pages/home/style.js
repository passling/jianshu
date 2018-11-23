import styled from 'styled-components'
export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    width:625px;
    float: left;
    padding-top: 30px;
    margin-left: 15px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
    padding-top:30px;
`
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
    .info-basic{
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        i{
            font-size: 12px;
        }
        span{
            margin-right: 10px;
        }
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    margin: 0 0 8px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color:#333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2
    }
`
export const RecommendItem = styled.div`
    width: 100%;
    height:50px;
    margin-bottom: 5px;
    cursor: pointer;
    img{
        display: block;
        width:100%;
        height:100%;
    }

`
export const DownLoadWrapper = styled.div`
    position: relative
    margin:12px 0 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing:border-box;
    cursor: pointer;
    img{
         width: 60px;
         height: 60px;
         opacity: .85;
         vertical-align: middle;
    }
`
export const DownLoadInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 12px;
    .title{
        font-size: 15px;
        line-height: 21px;
        color: #333;
    }
    .desc{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`
export const DownLoadImg = styled.div`
    position: absolute;
    top: -195px;
    width:180px;
    height: 180px;
    padding: 12px;
    box-sizing: border-box;
    left: 50px;
    border: 1px solid #999;
    background: #fff;
    &:before{
        position: absolute;
        content: '';
        left: 75px;
        bottom: -30px;
        width: 0;
        height: 0;
        border-top: 15px solid  #999;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid transparent;
    }
    &:after{
        position: absolute;
        content: '';
        left: 75px;
        bottom: -29px;
        width: 0;
        height: 0;
        border-top: 15px solid  #fff;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid transparent;
    }
    img{
        width: 100%;
        height: 100%;
    }
`
export const WriterWrapper = styled.div`
    width: 280px;
    .writerList{
        margin-top: 15px;
        overflow: hidden;
        img{
            width:48px;
            height: 48px;
            border-radius: 50%;
            float: left; 
        }
        .detailBox{
            float:left;
            margin-left: 10px;
            width: 220px
        }
        .writerName{
            font-size: 14px;
            line-height: 25px;
            span{
                float: right;
                color: #42c02e;
                font-size: 13px        
            }
            .iconfont{
                font-size: 13px;
            }
        }
        .writerDetail {
            font-size: 12px;
            color: #969696;
            line-height: 20px;
         
        }
    }
`
export const WriterTitle = styled.div`
    font-size: 14px;
    color: #969696;
`
export const WriterSwitch = styled.span`
    float: right;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .spin{
        float:left;
        margin-right: 4px;
        display:block
        font-size: 13px;
        transition: all .3s ease;
        transform-origin: center center
    }
`
export const WriterButton = styled.div`
    width: 280px;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    color: #787878;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    line-height:20px;
    background: #f7f7f7;
    box-sizing: border-box;
    margin-top: 20px;
    .iconfont{
        font-size: 13px;
    }
`
export const LoreMore = styled.div`
    width: 100%;
    padding: 10px 15px;
    border-radius: 20px;
    color: #fff;
    background: #a5a5a5;
    text-align: center;
    box-sizing: border-box;
    line-height: 20px;
    margin: 30px auto 60px;
`
export const BackTop = styled.div`
    position: fixed;
    right:30px;
    bottom: 50px;
    border: 1px solid #dcdcdc;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #fff;
    &:hover{
        background-color: hsla(0,0%,71%,.1);
        transition: .1s ease-in;
    }
    .iconfont{
        font-size: 20px;
    }
`