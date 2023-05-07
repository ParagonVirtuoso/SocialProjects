import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const innerContainerHeight = useSharedValue(0);

  const innerContainerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(innerContainerHeight.value),
    };
  });

  const handleLogin = () => {
    const usuario = {
      nome: 'João',
      foto: 'https://via.placeholder.com/150',
      amigos: ['Maria', 'José', 'Ana'],
    };

    innerContainerHeight.value = withTiming(0, {duration: 500});
    setTimeout(() => {
      navigation.navigate('Home', {usuario});
      innerContainerHeight.value = 200;
    }, 600);
  };

  React.useEffect(() => {
    innerContainerHeight.value = withTiming(200, {duration: 500});
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.innerContainer, innerContainerStyle]}>
        <Text style={styles.titulo}>SocialProjects</Text>
        <TextInput
          placeholder="Usuário"
          placeholderTextColor="#fff"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22a6b3',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    color: '#fff',
  },
  botao: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  textoBotao: {
    color: '#3c40c6',
    fontWeight: 'bold',
  },
});

export default Login;
