import React, {Component} from 'react'
import {ClassifyTabContent} from './styledComponents'
import MenuContents from './contents/index'
class ClassifyMenu extends Component {
    render () {
        return (
            <ClassifyTabContent>
                <MenuContents type = "category"></MenuContents>
            </ClassifyTabContent>
        )
    }
}

export default ClassifyMenu