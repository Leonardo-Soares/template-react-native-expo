import { StyleSheet } from 'react-native';

export const forms = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '100%',
  },
  label: {
    color: '#79747E',
    fontSize: 12,
  },
  input: {
    height: 36,
    borderRadius: 4,
    paddingVertical: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#FF0000',
    fontSize: 14,
  },
});
