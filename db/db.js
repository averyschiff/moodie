import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase("moodie.db")

export function newDayData(date, tracked, value){
  db.transaction(
    tx => {
      tx.executeSql("insert into trackPoints (day, tracked, value) values(?,?,?)",
      [date.dateString, tracked, value])
    }
  )
}

export function updateDayData(date, tracked, value){
  db.transaction(
    tx => {
      tx.executeSql(
        "update trackPoints set value=? where day=? and tracked=?",
        [value, date.dateString, tracked]
      )
    }
  )
}

export function getDayData(date, tracked, resolution){
  db.transaction(
    tx => {
      tx.executeSql(
        "select value from trackPoints where day=? and tracked=?",
        [date.dateString, tracked],
        resolution,
        (_, {err}) => {
          alert('There was an error!')
        }
      )
    }
  )
}
