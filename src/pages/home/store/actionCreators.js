import * as constans from './constans'
import axios from 'axios'
export const getHomeData = (result) => ({
    type: constans.CHANGE_HOME_DATA,
    bannerList: result.bannerList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
export const getWriterData = (result) => ({
    type: constans.GET_WRITER_LIST,
    list: result,
    writerListTotalPage: Math.ceil(result.length / 5)
})
export const getHomeInfo = () => {
    return (dispatch => {
        axios.get('./api/homePage.json').then(resp => {
            const data= eval('('+resp.data+')')
            dispatch(getHomeData(data.data))
        })
    })
}
export const getWriterListInfo = () => {
    return (dispatch => {
        axios.get('./api/writerList.json').then(resp => {
            const data = resp.data.data
            for (const item of data) {
                item.total_likes_count = item.total_likes_count >= 1000 ? (item.total_likes_count / 1000).toFixed(1) + 'k' : item.total_likes_count
                item.total_wordage = item.total_wordage >= 1000 ? (item.total_wordage /1000).toFixed(1) + 'k' : item.total_wordage
            }
           dispatch(getWriterData(resp.data.data))
        })
    })
}
