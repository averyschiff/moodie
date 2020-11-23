import {Calendar, CalendarList} from 'react-native-calendars'
import {Text, View} from 'react-native';
import React from 'react'
import {connect} from 'react-redux'
import ScoreMenu from './ScoreMenu'
import {fetchDayData} from '../store/selectedDay'
import {fetchDays} from '../store/markedDates'
import ReactCSSTransitionGroup from 'react-transition-group'

const colorOptions = [
  "rgb(225, 234, 247)",
  "rgb(195, 212, 238)",
  "rgb(135, 169, 221)",
  "rgb(75, 126, 204)",
  "rgb(15, 82, 186)",
]

export class MyCalendar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getDays("mood")
  }
  render(){
    return (
      <View>
        {this.props.selectedDay?
        (
          <ScoreMenu key={this.props.selectedDay.dateString} 
          menuStyle={this.props.myMenuStyle}
          colorOptions={colorOptions}
          />
        ):
        (<Text></Text>)
        }
        <CalendarList
        markedDates={this.props.markedDates}
        onDayPress={async (day)=> {
          this.props.setDay(day)
        }}
      />
      </View>
    )
  }
}

const mapState = state => ({
  selectedDay: state.day.date,
  markedDates: state.markedDates
})

const mapDispatch = dispatch => ({
  setDay: (day)=>{
    dispatch(fetchDayData(day))
  },
  getDays: (tracked)=>{
    dispatch(fetchDays(tracked, colorOptions))
  }
})

export default connect(mapState, mapDispatch)(MyCalendar)
