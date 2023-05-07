import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Auth/Login/login';
import Home from './screens/Home/Home';
import PerfilUsuario from './screens/Profile/PerfilUsuario';
import Welcome from './screens/Welcome';
import {ThemeProvider} from './theme/ThemeContext';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const usuario: Usuario = {
    nome: 'João',
    foto: 'https://via.placeholder.com/150',
    amigos: ['Maria', 'José', 'Ana'],
  };

  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              testID="WelcomeScreen"
              name="Welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              testID="Login"
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
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
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
