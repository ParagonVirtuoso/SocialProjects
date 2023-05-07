import React from 'react';
import {View, StyleSheet} from 'react-native';
import PerfilUsuario, {Usuario} from './screens/perfil/PerfilUsuario';

const App: React.FC = () => {
  const usuario: Usuario = {
    nome: 'João',
    foto: 'https://via.placeholder.com/150',
    amigos: ['Maria', 'José', 'Ana'],
  };

  return (
    <View style={styles.container}>
      <PerfilUsuario usuario={usuario} />
    </View>
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
