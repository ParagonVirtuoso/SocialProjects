import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '../theme/ThemeContext';
import WelcomeScreen from '../screens/Welcome';
import Login from '../screens/Auth/Login/login';

const Stack = createStackNavigator();

const TestComponent = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            testID="Login"
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

describe('WelcomeScreen', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(<TestComponent />);
    expect(getByTestId('toLoginButton')).toBeTruthy();
    expect(getByText('Bem-vindo ao SocialProjects')).toBeTruthy();
    expect(getByTestId('dark-mode-toggle')).toBeTruthy();
  });

  it('navigates to login screen when pressing the login button', () => {
    const { getByTestId } = render(<TestComponent />);
    fireEvent.press(getByTestId('toLoginButton'));
  });

  it('toggles dark mode on switch change', () => {
    const { getByTestId } = render(<TestComponent />);
    fireEvent(getByTestId('dark-mode-toggle'), 'onValueChange', true);
    // Add any assertion here to check if the dark mode was toggled
  });
});
