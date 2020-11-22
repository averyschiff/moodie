import {Calendar, CalendarList} from 'react-native-calendars'
import {Text, View} from 'react-native';
import React from 'react'
import {connect} from 'react-redux'
import ScoreMenu from './ScoreMenu'
import {fetchDayData} from '../store/selectedDay'

export class MyCalendar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View>
        {this.props.selectedDay?(<ScoreMenu menuStyle={this.props.myMenuStyle}/>):(<Text></Text>)}
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
  }
})

export default connect(mapState, mapDispatch)(MyCalendar)
