import React, {Component} from 'react'
import {HomeHot} from './styledComponents'
import connect from '@connect'
import uuid from 'uuid'
class HomeHotList extends Component {

    componentDidMount () {
        this.props.main_actions.getHomeHot()
    }

    render () {
        return (
            <HomeHot>
                <p>热门分类</p>
                <ul>
                    {this.renderListHot()}                    
                </ul>
            </HomeHot>
        )
    }
    renderListHot () {
        let {hot} = this.props.main
        if(hot.length <= 0 ) return ''
        // 如果数组的长度大于12，将12以后的内容变为更多
        if (hot.category['热门'].length > 12) hot.category['热门'].splice(11,0,'更多')
        let _hot = hot.category['热门'].splice(0,12)
        return _hot.map(item => {
            return (
                <li
                    key = {uuid()}
                >
                    {item}
                </li>
            )
        })
    }
}

export default connect(HomeHotList,[{name:'main',state:['main']}])