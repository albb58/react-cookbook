import React, {Component} from 'react'
import {ClassifyNavBarWrapper,ClassifyNavBarItem,ClassifyNavBarSlider} from './styledComponents'
import {withRouter} from 'react-router-dom'
class ClassifyNav extends Component {
    constructor (props) {
        super(props)
        this.state = {
            active_nav : this.props.location.pathname
        }
    }
    // 当路由切来切去的时候，改状态
    componentWillReceiveProps (props, state) {
        this.setState({ active_nav: props.location.pathname })
    }
    render () {
        let {active_nav} = this.state
        return (
            <ClassifyNavBarWrapper>
                <ClassifyNavBarItem _active = {active_nav === '/menu'}
                    onClick = {() => this.handleClick('/menu')}
                >
                    分类
                </ClassifyNavBarItem>
                <ClassifyNavBarItem _active = {active_nav === '/food'}
                    onClick = {() => this.handleClick('/food')}
                >
                    食材
                </ClassifyNavBarItem>
                <ClassifyNavBarSlider nav = {active_nav}/>
            </ClassifyNavBarWrapper>
        )
    }
    
    handleClick (nav) {
        // this.setState({active_nav: nav})
        this.props.history.push(nav)
    }
}

export default withRouter(ClassifyNav)