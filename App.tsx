// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ConvitesScreen from './src/screens/Convites/ConvitesScreen';
import BoletoScreen from './src/screens/BoletoScreen';
import CarterinhaScreen from './src/screens/Carteirinha';
import CarterinhaEditScreen from './src/screens/Carteirinha/edit';
import ConvitesTipos from './src/screens/Convites/ConvitesTipos';
import ConvitesCadastro from './src/screens/Convites/ConvitesCadastro';
import ConvitesDetails from './src/screens/Convites/ConvitesDetails';
import ClubeScreen from './src/screens/Clube';
import NotificacaoScreen from './src/screens/NotificacaoScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Carteirinha" component={CarterinhaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CarteirinhaEdit" component={CarterinhaEditScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Convites" component={ConvitesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Boleto" component={BoletoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConvitesTipos" component={ConvitesTipos} options={{ headerShown: false }} />
        <Stack.Screen name="ConvitesCadastro" component={ConvitesCadastro} options={{ headerShown: false }} />
        <Stack.Screen name="ConvitesDetails" component={ConvitesDetails} options={{ headerShown: false }} />
        <Stack.Screen name="ClubeScreen" component={ClubeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificacaoScreen" component={NotificacaoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
