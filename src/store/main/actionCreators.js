import {GET_HOME_SWIPER,GET_HOME_HOT} from './actionTypes'
import axios from 'axios'
const actionCreators = {
    getHomeSwiper () {
        return  {
            type: GET_HOME_SWIPER,
            payload: axios.get('/mock/cookbook-list.json')
        }
    },
    getHomeHot () {
        return {
            type: GET_HOME_HOT,
            payload: axios.get('/mock/cookbook-category.json')
        }
    }
}
export default actionCreators