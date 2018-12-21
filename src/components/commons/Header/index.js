import React, {Component} from 'react'
import * as HeaderStyled from './styledComponents'

class Header extends Component {
    render () {
    // console.log(this.props)
        return (
            <HeaderStyled.Header>
                <div className="left">{this.props.leftContent}</div>
                <div className="conter">{this.props.children}</div>
                <div className="right">{this.props.rightContent}</div>
            </HeaderStyled.Header>
        )
    }
}

export default Header