import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import CadastroProduto from './src/components/CadastroProduto';
import HomeScreen from './src/screens/HomeScreen';
import ConsultaEstoque from './src/screens/ConsultaEstoque';
import CadastroUsuario from './src/screens/CadastroUsuario';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ConsultaEstoque" component={ConsultaEstoque} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;