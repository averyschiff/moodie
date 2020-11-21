import React from 'react'
import {AppState, Text, View} from 'react-native';
import {connect} from 'react-redux'
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'
import {setDayData} from '../store/selectedDay'
import {addDay} from '../store/markedDates'

const colorOptions = [
  "rgb(225, 234, 247)",
  "rgb(195, 212, 238)",
  "rgb(135, 169, 221)",
  "rgb(75, 126, 204)",
  "rgb(15, 82, 186)",
]

export class ScoreMenu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Menu onSelect={value => 
        {
          this.props.setScore(this.props.selectedDay, "mood", value)
          const color = colorOptions[value-1]
          this.props.addDay(this.props.selectedDay, color)
        }
      }>
        <MenuTrigger text=
        {this.props.active?
          'Already done!'
          :
          `How was your mood (1-5) on ${this.props.selectedDay.dateString}?`
        }
        />
        <MenuOptions>
          <MenuOption value={1} text='One'/>
          <MenuOption value={2} text='Two'/>
          <MenuOption value={3} text='Three'/>
          <MenuOption value={4} text='Four'/>
          <MenuOption value={5} text='Five'/>
        </MenuOptions>
      </Menu>
    )
  }
}

const mapState = state => ({
  selectedDay: state.day.date,
  active: state.day.active
})

const mapDispatch = dispatch => ({
  setScore: (day, tracked, value) => dispatch(setDayData(day,tracked, value)),
  addDay: (day, color) => dispatch(addDay(day, color))
})
export default connect(mapState, mapDispatch)(ScoreMenu)
