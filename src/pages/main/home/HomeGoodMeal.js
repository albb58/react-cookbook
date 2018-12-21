import React, {Component} from 'react'
import {HomeGoodMealWrapper,HomeGoodMealHeader,HomeGoodMealList} from './styledComponents'
import connect from '@connect'
class HomeGoodMeal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            items : []
        }
        this.alldata = [] // 全部的数据
        this.pageNum = 1
        this.pageSize = 10 
    }

    getHomeGoodMeal () {
        return this.axios.get('/mock/cookbook-list.json').then(res=> {
            // 判断数据是否存在
            if(this.alldata.length <= 0) this.alldata = res.data.data
            this.setItem()
            this.pageNum++ // 获取一次，基数增加一个
        })
    }

    setItem () {
        let start = (this.pageNum - 1) * this.pageSize // 获取数据的起始位置
        let end = start + this.pageSize
        this.setState({ items : [...this.state.items, ...this.alldata.slice(start,end)] })
    }

    componentDidMount () {
        this.getHomeGoodMeal()
        setTimeout(()=>{
            let {tool} = this.props.scroll
            tool.on('pullingUp',async ()=> {
                // 如果全部数据的长度不符合，返回false
                if(this.alldata.length <= this.pageNum * this.pageSize) return false
                console.log(this.pageNum)
                this.setItem()
                this.pageNum++
                tool.finishPullUp()
            })
        },0)
    }

    componentDidUpdate (props,state) {
        if(this.state.items !== state.itmes) {
            this.props.scroll.tool.refresh()
        }
    }
    render () {
        let {items} = this.state
        return (
            <HomeGoodMealWrapper>
                <HomeGoodMealHeader>
                    精品好菜
                </HomeGoodMealHeader>
                {/* <HomeGoodMealList>
                    <img src="" alt=""/>
                    <h1>此处是标题</h1>
                    <p>...浏览&nbsp;&nbsp;...收藏</p>
                </HomeGoodMealList> */}
                {items.map((item, index) => (
                    <HomeGoodMealList key = { index }>
                       <img
                           src={item.img}
                           alt=""
                           style={{ width: '100%', verticalAlign: 'top' }}
                       />
                       <h1>{item.name}</h1>
                       <p>{item.all_click}浏览&nbsp;&nbsp;{item.favorites}收藏</p>
                   </HomeGoodMealList>
                ))}
            </HomeGoodMealWrapper>
        )
    }
    renderList () {
       
    }
}


export default connect(HomeGoodMeal,['main'])









// axios能共享
// componentDidMount () {
//     this.props.main_actions.getHomeSwiper()
// }
// render () {
//     return (
//         <HomeGoodMealWrapper>
//             <HomeGoodMealHeader>
//                 精品好菜
//             </HomeGoodMealHeader>
//             {/* <HomeGoodMealList>
//                 <img src="" alt=""/>
//                 <h1>此处是标题</h1>
//                 <p>...浏览&nbsp;&nbsp;...收藏</p>
//             </HomeGoodMealList> */}
//             {this.renderList()}
//         </HomeGoodMealWrapper>
//     )
// }
// renderList () {
//     let { list } = this.props.main
//     if ( !list.length ) return '';
//     list  = list.splice(0, 4)
//     return list.map(val => (
//         <HomeGoodMealList>
//             <img
//                 key = { val.id }
//                 src={val.img}
//                 alt=""
//                 style={{ width: '100%', verticalAlign: 'top' }}
//             />
//             <h1>{val.name}</h1>
//             <p>{val.all_click}浏览&nbsp;&nbsp;{val.favorites}收藏</p>
//         </HomeGoodMealList>
//     ))
// }
// }