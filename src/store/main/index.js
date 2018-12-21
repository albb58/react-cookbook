import defaultState from './defaultState'
import {GET_HOME_SWIPER,GET_HOME_HOT} from './actionTypes'

import connect from '@connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActions({
    main: actionCreators
})

const reducer = (previousState = defaultState,action) => {

    let new_state = Object.assign({},previousState)

    switch(action.type) {
        case GET_HOME_SWIPER + '_FULFILLED': new_state.list = action.payload.data.data ; break;
        case GET_HOME_HOT + '_FULFILLED' : new_state.hot = action.payload.data.data; break;
        default: return previousState;
    }
    return new_state
}

export default reducer