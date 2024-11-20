import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <Button title="Cadastrar Produto" onPress={() => navigation.navigate('CadastroProduto')} />
      <Button title="Consultar Estoque" onPress={() => navigation.navigate('ConsultaEstoque')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#6A0DAD' },
  title: { fontSize: 24, color: '#FFFFFF', marginBottom: 20 },
});

export default HomeScreen;