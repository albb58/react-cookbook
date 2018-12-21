import React, {Component} from 'react'
import Menu from './Menu'
import Food from './Food'
import {ClassContentsWrapper} from './styledComponents'
class Contents extends Component {
    constructor () {
        super()
        this.state = {
            activeIndex : 0
        }
    }
    render () {
        let {activeIndex} = this.state
        return (
            <ClassContentsWrapper>
                <Menu activeIndex = {activeIndex} changeActiveIndex = {(index)=>this.setState({activeIndex : index})}></Menu>
                <Food activeIndex = {activeIndex}></Food>
            </ClassContentsWrapper>
        )
    }
}

export default Contents