import {combineReducers} from 'redux'
import {setMenu} from './Reducers'

const allReducers = combineReducers({
    menu: setMenu
})

export default allReducers