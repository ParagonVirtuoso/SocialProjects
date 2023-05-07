import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PerfilUsuario, {Usuario} from './screens/perfil/PerfilUsuario';
import Login from './screens/login/login';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const usuario: Usuario = {
    nome: 'João',
    foto: 'https://via.placeholder.com/150',
    amigos: ['Maria', 'José', 'Ana'],
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{headerShown: false}}
          initialParams={{usuario}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default App;
