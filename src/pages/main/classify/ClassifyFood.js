import React, {Component} from 'react'
import {ClassifyTabContent} from './styledComponents'
import MenuContents from './contents/index'
class ClassifyFood extends Component {
    render () {
        return (
            <ClassifyTabContent>
                <MenuContents type = "original"></MenuContents>
            </ClassifyTabContent>
        )
    }
}

export default ClassifyFood