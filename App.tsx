import * as React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import BoletoScreen from './src/screens/BoletoScreen';
import { NavigationContainer } from '@react-navigation/native';
import NotificacaoScreen from './src/screens/NotificacaoScreen';
import ConvitesScreen from './src/screens/Convites/ConvitesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Convites" component={ConvitesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Boleto" component={BoletoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificacaoScreen" component={NotificacaoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
