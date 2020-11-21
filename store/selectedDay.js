import * as db from '../db/db.js'
const SET_DAY = 'SET_DAY'

const setDay = (day, active) => ({
  type: SET_DAY,
  day,
  active
})

export const fetchDayData = (day) => {
  return async dispatch => {
    await db.getDayData(day,'mood', 
    (_, {rows})=>{
      if (rows.item(0)) alert(rows.item(0).value)
      dispatch(setDay(day, rows.length>0))
    })
  }
}

export const setDayData = (day, tracked, value) => {
  return async dipsatch => {
    await db.newDayData(day, tracked, value)
  }
}

//initial state
const initDay = {}

export default function(state = initDay, action){
  switch (action.type){
    case SET_DAY:
      return {...state, date: action.day, active: action.active}
    default:
      return state
  }
}
