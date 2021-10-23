import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 88,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    paddingBottom: 30
  },
  icon: {
    marginRight: 20,
    paddingBottom: 30
  }
});