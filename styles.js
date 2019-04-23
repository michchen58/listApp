import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
  flatList: {
    width: '100%',
  },
  listItem: {
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1,
    width: 'auto',
    // width: 'calc(100% - 20px)',

    margin: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  listText: {
    flex: 1,
  },
  removeButton: {
    marginLeft: 'auto',
  }
});
