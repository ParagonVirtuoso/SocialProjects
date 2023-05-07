import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export interface Usuario {
  nome: string;
  foto: string;
  amigos: string[];
}

interface PerfilUsuarioProps {
  usuario: Usuario;
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({usuario}) => {
  const [amigos, setAmigos] = React.useState(usuario.amigos);
  const [novoAmigo, setNovoAmigo] = React.useState('');

  const adicionarAmigo = () => {
    if (novoAmigo) {
      setAmigos([...amigos, novoAmigo]);
      setNovoAmigo('');
    }
  };

  return (
    <View>
      <Image source={{uri: usuario.foto}} style={styles.foto} />
      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text style={styles.subtitulo}>Amigos:</Text>
      <FlatList
        data={amigos}
        renderItem={({item}) => <Text style={styles.amigo}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listaAmigos}
      />
      <TextInput
        placeholder="Novo amigo"
        value={novoAmigo}
        onChangeText={setNovoAmigo}
        style={styles.input}
      />
      <TouchableOpacity onPress={adicionarAmigo} style={styles.botao}>
        <Text style={styles.textoBotao}>Adicionar amigo</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PerfilUsuario;
