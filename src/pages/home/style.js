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