import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';

interface PerfilUsuarioRouteParams {
  usuario: {
    nome: string;
    foto: string;
    amigos: string[];
  };
}

const PerfilUsuario: React.FC = () => {
  const route = useRoute();
  const {usuario} = route.params as PerfilUsuarioRouteParams;

  const headerOpacity = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(headerOpacity.value),
    };
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    headerOpacity.value = withSpring(1 - event.contentOffset.y / 150);
  });

  React.useEffect(() => {
    headerOpacity.value = withTiming(1, {duration: 500});
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]}>
        <Image source={{uri: usuario.foto}} style={styles.fotoPerfil} />
        <Text style={styles.nome}>{usuario.nome}</Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <View style={styles.amigosContainer}>
          {usuario.amigos.map(amigo => (
            <View key={amigo} style={styles.amigo}>
              <Text style={styles.amigoNome}>{amigo}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22a6b3',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  amigosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amigo: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  amigoNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PerfilUsuario;
