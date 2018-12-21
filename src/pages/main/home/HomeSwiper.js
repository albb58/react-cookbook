import React, { Component } from 'react'
import { HomeSwiperimg } from './styledComponents'
import connect from '@connect'
// import SwiperImage from '@As/images/swiper-1.png'
import {  Carousel } from 'antd-mobile'
class HomeSwiper extends Component {
    componentDidMount () {
        this.props.main_actions.getHomeSwiper()
    }
    
    render () {
        return (
            <HomeSwiperimg>
                {/* <img src = {SwiperImage} alt=""/> */}
                <Carousel
                    autoplay={false}
                    infinite
                >
                {this.renderSwiperList()}
                </Carousel>
            </HomeSwiperimg>
        )
    }
    renderSwiperList () {
        let { list } = this.props.main
        if ( !list.length ) return '';
        list  = list.splice(0, 4)
        return list.map(val => (
            <img
                key = { val.id }
                src={val.img}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
        ))
    }

}

export default connect(HomeSwiper, [{name: 'main', state: ['list']}])
