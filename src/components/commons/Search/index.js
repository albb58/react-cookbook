import React, {Component} from 'react'
import {SearchStyled, SearchText} from './styledComponents'
import SearchImg from '@As/images/search.png'

class Search extends Component {
    render () {
        return (
            <SearchStyled {...this.props} >
                <SearchText {...this.props} >
                    <img src= {SearchImg} alt=""/>
                    <p>想吃什么搜这里，如川菜</p>
                </SearchText>
            </SearchStyled>
        )
    }
}

export default Search