import React from 'react'
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux'
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'
import {setDayData, updateDayData, clearDay} from '../store/selectedDay'
import {addDay} from '../store/markedDates'


export class ScoreMenu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {menuStyle, colorOptions} = this.props
    return (
      <View style={menuStyle.mainMenu}>
        <Menu onSelect={value => 
          {
            if (this.props.value) this.props.updateScore(this.props.selectedDay, "mood", value)
            else this.props.setScore(this.props.selectedDay, "mood", value)
            const color = colorOptions[value-1]
            this.props.addDay(this.props.selectedDay, color)
          }
        }>
          <Text style={menuStyle.menuText}>
            {`How was your mood (1-5) on ${this.props.selectedDay.dateString}?`}
          </Text>
          <Text style={menuStyle.menuText}>
            {`Current: ${this.props.value || '-'}`}
          </Text>
          <MenuTrigger style={{'alignContent': 'center'}}>
            <Text style={menuStyle.triggerText}>
              SET
            </Text>
          </MenuTrigger>
          <Button 
          onPress={()=>this.props.clear()}
          title="Close"
          color='#8e5576'
          />
          <MenuOptions>
            {[1,2,3,4,5].map(num=>(
              <MenuOption key={num} value={num}>
                <Text style={
                  num==this.props.value?
                  {
                    borderStyle: 'solid',
                    borderColor: 'black',
                    borderWidth: 2,
                    padding: 5,
                    fontSize: 14
                  }
                  :
                  {
                    fontSize: 14
                  }
                }>
                  {num}
                </Text>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>

      </View>
    )
  }
}

const mapState = state => ({
  selectedDay: state.day.date,
  value: state.day.value
})

const mapDispatch = dispatch => ({
  setScore: (day, tracked, value) => dispatch(setDayData(day,tracked, value)),
  updateScore: (day, tracked, value) => dispatch(updateDayData(day, tracked, value)),
  addDay: (day, color) => dispatch(addDay(day, color)),
  clear: () => dispatch(clearDay())
})
export default connect(mapState, mapDispatch)(ScoreMenu)
