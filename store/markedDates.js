const ADD_DAY = 'ADD_DAY'

export const addDay = (day, color) => ({
  type: ADD_DAY,
  day,
  color
})

/* init state */
const initDates = {}

export default function(state=initDates, action){
  switch (action.type){
    case ADD_DAY:
      return {
        ...state,
        [action.day.dateString]: {selected: true, selectedColor: action.color}
      }
    default:
      return state
  }
}
