import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/Welcome';
import App from '../App';

describe('WelcomeScreen', () => {
  it('should render the title', async () => {
    const component = (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );

    render(component);

    const title = await screen.getByText('Bem-vindo ao SocialProjects');

    expect(title).toBeDefined();
  });

  it('should navigate to Login when button is pressed', () => {
    const {getByText, getByTestId, navigation} = render(
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>,
    );

    const button = getByText('Começar');

    fireEvent.press(button);

    const loginScreen = getByTestId('Login');

    expect(loginScreen).toBeDefined();
  });

  it('should toggle dark mode', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>,
    );

    const toggle = getByTestId('dark-mode-toggle');
    expect(toggle.props.value).toBe(false);

    fireEvent.press(toggle);

    expect(toggle.props.value).toBe(true);

    fireEvent.press(toggle);

    expect(toggle.props.value).toBe(false);
  });
});
