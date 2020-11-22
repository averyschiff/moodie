import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainMenu: {
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 20,
    backgroundColor: '#6993d4',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  menuText: {
    color: 'white'
  },
  triggerText: {
    color: 'white',
    backgroundColor: '#888',
    padding: 5,
    marginTop: 10,
    width: 35,
    borderRadius: 10,
  }
});
