import React, {Component,PureComponent} from 'react'
import {FoodWrapper, FoodItem, FoodContents, FoodTitle} from './styledComponents'
import connect from '@connect'
import BScroll from 'better-scroll'
import uuid from 'uuid'
import {withRouter} from 'react-router-dom'
class Food extends PureComponent {
    componentDidMount () {
        this.props.main_actions.getHomeHot()
        this.scroll = new BScroll(this.el,{
            click: true
        })
    }
    scrollTo (index) {
        this.scroll.scrollToElement(this.els[index],300)
    }
    componentDidUpdate (props) {
        if ( props.activeIndex !== this.props.activeIndex ) {
            this.scrollTo(this.props.activeIndex)
        }
    }
    render () {
        return (
            <FoodWrapper ref={el => this.el = el} >
                <div>
                    {this.renderItem()}
                </div>
            </FoodWrapper>
        )
    }

    renderItem () {
        this.els = []
        let { hot } = this.props.main
        if (hot.length <= 0) return ''
        let result = []
        let type = this.props.location.pathname === '/menu' ? 'category': 'original'
        let data = hot[type]
        for ( let key in data ) {
            result.push((
                <FoodContents key = {uuid()} ref = {el =>{if(el) this.els.push(el)} }>
                    <FoodTitle>{key}</FoodTitle>
                    {
                        data[key].map((item,i) => (
                            <FoodItem key = {i}>{item}</FoodItem>
                        ))
                    }
                </FoodContents>
            ))
        }
        return result
    }

}

export default withRouter(connect(Food,['main']))