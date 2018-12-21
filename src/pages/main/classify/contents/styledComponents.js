import styled from 'styled-components'

export const ClassContentsWrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-top: 1px solid #f3f3f3;
    display: flex;
`

export const MenuWrapper = styled.nav`
    width: 25%;
    background-color:#f3f3f3;
    height: 100%;
    overflow:hidden;
`

export const MenuItem = styled.nav`
        width: 100%;
        height: 47.5px;
        text-align: center;
        line-height: 47.5px;
        color: ${props => props.active ? '#ec712b' : '#333'};
        overflow: hidden;
        background-color: ${props => props.active ? '#fff' : '#f3f3f3'};
        span {
            height: 100%;
            display: inline-block;
            border-bottom: 1px solid ${props => props.active ? '#ec712b' : '#f3f3f3'};
        }
`

export const FoodWrapper = styled.article`
    width: 75%;
    background: #fff;
    height: 100%;
    padding: 12px;
    overflow: hidden;
`

export const FoodContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`
export const FoodTitle = styled.div`
    width: 100%;
    height: 47.5px;
    line-height: 47.5px;
    background-color: #fff;
    text-align: left;
    padding-left: 20px;
    color: #333;
`

export const FoodItem = styled.div`
    width: 33.33%;
    background-color: #fff;
    height: 47.5px;
    line-height: 47.5px;
    text-align: center;
    color: #999;
`