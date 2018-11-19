import * as constans from './constans'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    bannerList: []
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constans.CHANGE_HOME_DATA:
            return state.merge({
                'bannerList': action.bannerList,
                'articleList': action.articleList
        })
        default:
            return state
    }
}