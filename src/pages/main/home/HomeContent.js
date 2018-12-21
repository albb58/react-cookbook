import React, {Component} from 'react'
import {HomeWrapper} from './styledComponents'
import {Header,Search} from '@com/commons'
import HomeSwiper from './HomeSwiper'
import HomeHotList from './HomeHotList'
import HomeGoodMeal from './HomeGoodMeal'

import BScroll from 'better-scroll'
class HomeContent extends Component {
    
    constructor () {
        super()
        this.scroll = {
            tool: null
        }
    }
   
    render () {
        return (
            <HomeWrapper ref = {el=> this.el = el}>
                <div>
                    <Header>菜谱大全</Header>
                    <HomeSwiper></HomeSwiper>
                    <Search type="home"></Search>
                    <HomeHotList></HomeHotList>
                    <HomeGoodMeal scroll = {this.scroll} ></HomeGoodMeal>
                </div>
            </HomeWrapper>
        )
    }

    componentDidMount () {
        this.scroll.tool = new BScroll(this.el, {
            pullUpLoad: {
                threshold: 50
            },
            click: true //开放点击
        })
    }
}


export default HomeContent