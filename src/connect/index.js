import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import action from './actionCreators'
const _connect =function (UiComponent,reducers = [])  {
    
    let mapStateToProps = (state) => {
        let result = {}
        // 如果没有传值，那么将所有的东西都传过去
        if(reducers.length <=0) return state
        reducers.forEach(reducer => { //遍历传的redusers
            if(typeof reducer === 'string'){ // 假设传的是一个字符串
                result[reducer] = state[reducer] ? state[reducer] : {}
             }else if(typeof reducer === 'object') { // 假设传入的是一个对象
                result[reducer.name] = filterObject(state[reducer.name],reducer.states)
            }
        })
        // return {
        //     reducers:state.reducers
        // }
        return result
    }
    
    let mapDispatchToProps = (dispatch) => {
        let result = {}
        // 如果没有传值，那么什么方法都不给他
        if(reducers.length <=0) return {}

        // 将对应的actionCreator的方法处理后传给UI组件
        reducers.forEach(reducer => { //遍历传的redusers
            let name = (typeof reducer === 'string') ? reducer : reducer.name
            result[name+'_actions'] = bindActionCreators(_connect.action[name],dispatch)
            // [name+'_actions'] 字符串可以随便放
        })
        return result
    }

    return connect(mapStateToProps,mapDispatchToProps)(UiComponent)
}

_connect.configActions = function (action)  {
    _connect.action = action
}

_connect.addActions = function (actionCreator)  {
    _connect.action = Object.assign({}, _connect.action, actionCreator)
}

function filterObject (obj, arr) {
    if ( !arr || arr.length <= 0 ) return obj;
    let result = {}
    arr.forEach(key => {
        if ( obj.hasOwnProperty(key) ) {
            result[key] = obj[key]
        }     
    })
    return result
}

export default _connect