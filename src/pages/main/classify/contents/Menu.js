import React, {Component,PureComponent} from 'react'
import {MenuWrapper,MenuItem} from './styledComponents'
import connect from '@connect'
import uuid from 'uuid'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'
const Item = (props) => {
    return (
        <MenuItem {...props}>
            <span>
                {props.children}
            </span>
        </MenuItem>
    )
}
class Menu extends PureComponent {
    componentDidMount () {
        this.props.main_actions.getHomeHot()
        new BScroll(this.el,{
            click: true
        })
    }
    render () {
        return (
            <MenuWrapper ref = {el => this.el = el}>
                <div>
                    {this.renderItem()}
                </div>
            </MenuWrapper>
        )
    }
    renderItem () {
        let {hot} = this.props.main
        console.log(this.props)
        if(hot.length <= 0 ) return ''
        // 如果数组的长度大于12，将12以后的内容变为更多
        let type = this.props.location.pathname === '/menu' ? 'category': 'original'
        return Object.keys(hot[type]).map((item, i) => (
            <Item 
                onClick = { (e) => this.handleClick(i, e) } 
                key = {i} 
                active = { this.props.activeIndex === i }
            >
                {item}
            </Item>
        ))
    }
    handleClick (i,e) {
        this.props.changeActiveIndex(i)
    }
}

export default withRouter(connect(Menu,['main']))