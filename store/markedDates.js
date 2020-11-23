import * as db from '../db/db.js'
const ADD_DAY = 'ADD_DAY'
const ADD_DAYS = 'ADD_DAYS'

export const addDay = (day, color) => ({
  type: ADD_DAY,
  day,
  color
})

const addDays = (days, colorOptions) => ({
  type: ADD_DAYS,
  days,
  colorOptions
})

export const fetchDays = (tracked, colorOptions) => {
  return async dispatch=>{
    let res = []
    await db.getAllDayData(tracked,
      (_, {rows})=>{
        for (let i=0;i<rows.length;i++){
          res.push(rows.item(i))
        }
        dispatch(addDays(res, colorOptions))
      })
  }
}

/* init state */
const initDates = {}

export default function(state=initDates, action){
  switch (action.type){
    case ADD_DAY:
      return {
        ...state,
        [action.day.dateString]: {selected: true, selectedColor: action.color}
      }
    case ADD_DAYS:
      let newState = {...state}
      action.days.map(day => {
        newState[day.day] = {
          selected: true, 
          selectedColor: action.colorOptions[day.value-1]
        }
      })
      return newState
    default:
      return state
  }
}
