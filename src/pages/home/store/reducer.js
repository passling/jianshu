import * as constans from './constans'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    bannerList: []
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constans.CHANGE_HOME_DATA:
            console.log(action.bannerList)
            return state.set('bannerList', action.bannerList)
        default:
            return state
    }
}