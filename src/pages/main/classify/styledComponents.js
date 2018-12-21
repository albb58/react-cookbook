import styled from 'styled-components'

export const ClassifyWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
`
export const ClassifyContents = styled.div`
    position: relative;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
`

export const ClassifyNavBarWrapper = styled.div`
    height: 30px;
    width: 143px;
    border: 1px solid #fff;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
    ._active {
        background-color: #fff;
        color: #ee7530;
        border-radius: 20px;
        width: 70%;
    }
`

export const ClassifyNavBarItem = styled.div`
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    position: relative;
    z-index: 2;
    color: ${props => props._active ? '#ee7530' : '#fff'};
`

export const ClassifyNavBarSlider = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => props.nav === '/menu' ? '0' : '50%'};
    width: 50%;
    height: 100%;
    background: #fff; 
    border-radius: 15px; 
    transition: all 0.3s;
`
export const ClassifyTabContent = styled.div`
    position: absolute;  
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
`