import * as constans from './constans'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    bannerList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    writerTotalPage: 0
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constans.CHANGE_HOME_DATA:
            return state.merge({
                'bannerList': fromJS(action.bannerList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList)
        })
        case constans.GET_WRITER_LIST:
            return state.merge({
                'writerList': fromJS(action.list),
                'writerTotalPage': fromJS(action.writerListTotalPage)
            })
        default:
            return state
    }
}