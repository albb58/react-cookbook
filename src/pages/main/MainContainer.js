import React, {Component} from 'react'
import { TabBar } from 'antd-mobile';
// import uuid from 'uuid'
import * as MainStyled from './styled-components'
import HomeContent from '@pages/main/home/HomeContent'
import ClassifyContent from '@pages/main/classify/ClassifyContent'
import MoreContent from '@pages/main/more/MoreContent'
import uuid from 'uuid'

import CookBookIcon from '@As/images/cookbook.png'
import CookBookIconActive from '@As/images/cookbook-active.png'
import LocationIcon from '@As/images/location.png'
import LocationIconActive from '@As/images/location-active.png'
import MenuIcon from '@As/images/menu.png'
import MenuIconActive from '@As/images/menu-active.png'
import MoreIcon from '@As/images/more.png'
import MoreIconActive from '@As/images/more-active.png'

import {withRouter} from 'react-router-dom'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'cook',
        tabs: [
            {id: uuid(), title: '菜谱大全', selected: 'cook', component: <HomeContent/>, icons: {default: CookBookIcon, active: CookBookIconActive}},
            {id: uuid(), title: '分类', selected: 'menu', component: <ClassifyContent/>, icons: {default: MenuIcon, active: MenuIconActive}},
            {id: uuid(), title: '地图', selected: 'location', component: 'location', icons: {default: LocationIcon, active: LocationIconActive}},
            {id: uuid(), title: '更多', selected: 'more', component: <MoreContent/>, icons: {default: MoreIcon, active: MoreIconActive}}
        ],
    };
  }

  componentDidUpdate (props,{selectedTab}) {
    // 如果此时，状态改变说明切换组件，判断如果是从menu切换出来的话，就更改路由为/
    let {selectedTab: stab} = this.state 
    if (selectedTab !== stab && selectedTab === 'menu') {
      this.props.history.replace('/')
    }
    if (selectedTab !== stab && stab === 'menu') {
      this.props.history.push('/menu')
    }
  }
  componentDidMount (props) {
    let {pathname} = this.props.location
    if ( pathname !== '/' && pathname === '/menu' ) {
      this.setState({
        selectedTab: 'menu'
      })
    }
  }
  renderItem() {
    let {tabs} = this.state
    return tabs.map(tab => (
      <TabBar.Item
        title= {tab.title} key= {tab.id}
        icon= {<MainStyled.MainTabIcon url={tab.icons.default}/>}
        selectedIcon= {<MainStyled.MainTabIcon url = {tab.icons.active}/>}
        selected = {this.state.selectedTab === tab.selected}
        onPress = {()=>{
          this.setState({
            selectedTab: tab.selected
          })
        }}
      >
        {tab.component}
      </TabBar.Item>
    ));
  }

  render() {
    return (
      <MainStyled.MainWrapper>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="#f7f7f7"
          prerenderingSiblingsNumber = '0'
        >
          {this.renderItem()}
        </TabBar>
      </MainStyled.MainWrapper>
    );
  }
}

export default MainContainer