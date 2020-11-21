import {createStore, combineReducers, applyMiddleware} from 'redux'
import day from './selectedDay'
import markedDates from './markedDates'
import thunkMiddleware from 'redux-thunk'

const Reducer = combineReducers({
  day,
  markedDates
})

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(Reducer, middleware)
export default store
