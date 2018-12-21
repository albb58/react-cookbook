import styled from 'styled-components'

export const SearchStyled = styled.div`
    width: 100%;
    height: 1.813333rem;
    padding: .4rem;
background-color: ${ props => props.type === 'home' ? '#f5f5f5' : '#fff' };
`
export const SearchText = styled.div`
    width: 100%;
    height: 100%;
    border: ${props => props.type === 'home' ? '2px solid #ee7530' : ''};
    border-radius: 5px;
    background-color: ${props => props.type === 'home' ? '#fff' : '#f5f5f5'};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: .48rem;
        height: .48rem;
    }
    p {
        color: #9d9d9d;
        font-size: .373333rem;
        padding-left: .106667rem;
    }
`