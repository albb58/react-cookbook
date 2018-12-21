import React, {Component} from 'react'
import {Header} from '@com/commons'
import {MoreWrapper, MoreWrapperList} from './styleComponents'
import collect from '@As/images/collect.png'
import relation from '@As/images/relation.png'
import praise from '@As/images/praise.png'
import record from '@As/images/record.png'
class MoreContent extends Component {
    render () {
        return (
            <div>
                <Header>更多</Header>
                <MoreWrapper>
                    <MoreWrapperList>
                        <img src={collect} alt=""/>
                        我的收藏
                    </MoreWrapperList>
                    <MoreWrapperList>
                        <img src={record} alt=""/>                        
                        浏览记录
                    </MoreWrapperList>
                </MoreWrapper>
                <MoreWrapper>
                    <MoreWrapperList>
                        <img src={praise} alt=""/>
                        陛下，赏个好评吧
                    </MoreWrapperList>
                    <MoreWrapperList>
                        <img src={relation} alt=""/> 
                        联系我们
                    </MoreWrapperList>
                </MoreWrapper>
            </div>
        )
    }
}

export default MoreContent