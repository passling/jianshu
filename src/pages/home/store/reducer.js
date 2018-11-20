import * as constans from './constans'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    bannerList: [],
    articleList: [],
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constans.CHANGE_HOME_DATA:
            return state.merge({
                'bannerList': fromJS(action.bannerList),
                'articleList': fromJS(action.articleList)
        })
        default:
            return state
    }
}