import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../theme/ThemeContext';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext);
  const backgroundColor = useSharedValue(theme.colors.background);
  const textColor = useSharedValue(theme.colors.text);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(prevState => !prevState);
    toggleTheme();
  };

  const handleAnimation = nextColor => {
    backgroundColor.value = withTiming(nextColor.background, {
      duration: 300,
    });
    textColor.value = withTiming(nextColor.text, {duration: 300});
  };

  const handleStart = () => {
    handleAnimation(theme.colors);
  };

  const handleEnd = () => {
    handleAnimation(theme.colors);
  };

  const containerStyle = useAnimatedStyle(() => {
    return {backgroundColor: backgroundColor.value};
  });

  const textStyle = useAnimatedStyle(() => {
    return {color: textColor.value};
  });
  const handleNavigate = () => {
    navigation.navigate('Login');
  };

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.Text style={[styles.title, textStyle]}>
        Bem-vindo ao SocialProjects
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: theme.colors.primary}]}
          onPress={handleNavigate}>
          <Text style={[styles.buttonText, {color: theme.colors.text}]}>
            Começar
          </Text>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, {color: theme.colors.text}]}>
            Modo noturno
          </Text>
          <Switch
            trackColor={{
              false: theme.colors.secondary,
              true: theme.colors.primary,
            }}
            thumbColor={
              isDarkModeEnabled ? theme.colors.primary : theme.colors.text
            }
            ios_backgroundColor={theme.colors.text}
            onValueChange={toggleDarkMode}
            value={isDarkModeEnabled}
            onStartShouldSetResponder={() => true}
            onResponderGrant={handleStart}
            onResponderRelease={handleEnd}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  switchLabel: {
    marginRight: 10,
  },
  switchTrack: {
    height: 20,
    width: 40,
    borderRadius: 10,
    padding: 3,
  },
  switchThumb: {
    height: 14,
    width: 14,
    borderRadius: 7,
  },
});

export default WelcomeScreen;
