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