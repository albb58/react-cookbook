import styled from 'styled-components'

export const HomeWrapper = styled.section`
    width: 100%;
    height: 100%;
    color: red;
`

export const HomeSwiperimg = styled.div`
    width: 100%;
    height: 6.826667rem;
    img {
        width: 100%;
        height: 100%;
        display: block;
        background-color: #9a9a9a;
    }
`


export const HomeHot = styled.div`
    width: 100%;
    height: 5.333333rem;
    background-color: #fff;
    p {
        height: 1.333333rem;
        padding-left: .266667rem;
        display: flex;
        align-items: center;
        color: #989898;
        font-size: .426667rem;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            display: block;
            text-align: center;
            line-height: 1.333333rem;
            width: 25%;
            height: 1.333333rem;
            border-top: .026667rem solid #e1e1e1;
            border-right: .026667rem solid #e1e1e1;
            color: #2c2c2c;
            font-size: .426667rem;
        }
    }
`

export const HomeGoodMealWrapper = styled.div`
    width: 100%;
    padding: .266667rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const HomeGoodMealHeader = styled.header`
    width: 100%;
    padding: .266667rem 0;
    color: #989898;
    font-size: .426667rem;
`
export const HomeGoodMealList = styled.div`
    width: 4.533333rem;
    height: 6.2rem;
    margin-bottom: .266667rem;
    background-color: #fff;
    img {
        width: 4.533333rem;
        height: 4.533333rem;
        background-color: #9a9a9a;
        display: block;
    }
    h1 {
        text-align: center;
        margin-top: .333333rem;
        font-size: .48rem;
        font-weight: bold;
        color: #000;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    p {
        text-align: center;
        margin-top: .2rem;
        color: #9a9a9a;
        font-size: .32rem;
    }
`