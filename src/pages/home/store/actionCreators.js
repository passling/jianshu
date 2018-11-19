import * as constans from './constans'
import axios from 'axios'
export const getHomeData = (result) => ({
    type: constans.CHANGE_HOME_DATA,
    bannerList: result.bannerList,
    articleList: result.articleList
})
export const getHomeInfo = () => {
    return (dispatch => {
        axios.get('./api/homePage.json').then(resp => {
           const data= eval('('+resp.data+')')
            dispatch(getHomeData(data.data))
        })
    })
}
