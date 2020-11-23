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
    color: 'white',
    fontSize: 16
  },
  triggerText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#b4c9ea',
    height: 33,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.3,
    elevation: 9
  }
});
