import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

export interface Usuario {
  nome: string;
  foto: string;
  amigos: string[];
}

interface PerfilUsuarioProps {
  usuario: Usuario;
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({usuario}) => {
  return (
    <View>
      <Image source={{uri: usuario.foto}} style={styles.foto} />
      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text style={styles.subtitulo}>Amigos:</Text>
      <FlatList
        data={usuario.amigos}
        renderItem={({item}) => <Text style={styles.amigo}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listaAmigos}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  amigo: {
    fontSize: 16,
    marginBottom: 2,
  },
  listaAmigos: {
    maxHeight: 150,
  },
});

export default PerfilUsuario;
