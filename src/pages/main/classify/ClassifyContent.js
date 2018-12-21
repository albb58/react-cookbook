import React,{Component} from 'react'
import {Header,Search} from '@com/commons'
import CalssifyNav from './ClassifyNav'
import ClassifyMenu from './ClassifyMenu'
import ClassifyFood from './ClassifyFood'
import {ClassifyWrapper,ClassifyContents} from './styledComponents'
import {Route,Redirect,Switch,withRouter} from 'react-router-dom'

class ClassifyContent extends Component {
    shouldComponentUpdate (props,state) {
        // 如果main的状态变化（更改显示的组件）的时候，main会render，导致此组件也会render -》 redirect
        let {pathname} = props.location
        let {pathname : _pathname} = this.props.location
        // 当再main中进行去掉路径 replace('/')的时候，阻止此组件rerender
        if( pathname === '/' && (_pathname === '/menu' || _pathname === '/food') ) return false

        return true
    }
    render () {
        return (
            <ClassifyWrapper>
                <Header>
                    <CalssifyNav></CalssifyNav>
                </Header>
                <Search></Search>
                <ClassifyContents>
                   <Switch>
                        <Route from = "/" exact render = {() => {
                            return <Redirect to = '/menu'/>
                        }} />
                        <Route path="/menu" exact children = {(props) => <ClassifyMenu {...props}/>} />
                        <Route path="/food" exact children = {(props) => <ClassifyFood {...props}/>} />
                   </Switch>
                </ClassifyContents>
            </ClassifyWrapper>
        )
    }
}

export default withRouter(ClassifyContent)