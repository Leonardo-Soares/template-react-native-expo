import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  info: {
    flexDirection: 'row',
    marginTop: 4,
  },
  avatarWrapper: {
    flexDirection: 'row',
    marginTop: 8,
  },
  photoWrapper: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  avatarMain: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#189E2A',
    overflow: 'hidden',
    marginRight: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#189E2A',
    overflow: 'hidden',
    marginRight: 8,
  },
  qrcode: {
    width: 120,
    height: 120,
  },
});
