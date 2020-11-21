import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import Calendar from './components/Calendar'
import styles from './style.js'
import * as SQLite from 'expo-sqlite'
import {MenuProvider} from 'react-native-popup-menu'
import {Provider} from 'react-redux'
import store from './store'

const db = SQLite.openDatabase("moodie.db");

export default function App() {

  React.useEffect(()=>{

    db.transaction(tx => { tx.executeSql( "delete from trackPoints") })

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists trackPoints (id integer primary key not null, day date not null, tracked varchar(20) not null, value integer)"
      );
    },
    (err)=>alert('There was an error creating the table: ', err),
    ()=>{})
  })

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <MenuProvider>
          <Calendar db={db}
          />
        </MenuProvider>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}
