import * as db from '../db/db.js'
const SET_DAY = 'SET_DAY'
const UPDATE_VALUE = 'UPDATE_VALUE'
const CLEAR_DAY = 'CLEAR_DAY'

const setDay = (day, value) => ({
  type: SET_DAY,
  day,
  value
})

const updateScore = (value) => ({
  type: UPDATE_VALUE,
  value
})

export const clearDay = (value) => ({
  type: CLEAR_DAY
})

export const fetchDayData = (day) => {
  return async dispatch => {
    await db.getDayData(day,'mood', 
    (_, {rows})=>{
      if (rows.item(0)) dispatch(setDay(day, rows.item(0).value))
      else dispatch(setDay(day, null))
    })
  }
}

export const setDayData = (day, tracked, value) => {
  return async dispatch => {
    await db.newDayData(day, tracked, value)
    dispatch(updateScore(value))
  }
}

export const updateDayData = (day, tracked, value) => {
  return async dispatch => {
    await db.updateDayData(day, tracked, value)
    dispatch(updateScore(value))
  }
}

//initial state
const initDay = {}

export default function(state = initDay, action){
  switch (action.type){
    case SET_DAY:
      return {...state, date: action.day, value: action.value}
    case UPDATE_VALUE:
      return {...state, value: action.value}
    case CLEAR_DAY:
      return {}
    default:
      return state
  }
}
