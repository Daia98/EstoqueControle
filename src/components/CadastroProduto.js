import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  const salvarProduto = () => {
    // Lógica para salvar o produto no SQLite
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE PRODUTO</Text>
      <TextInput placeholder="Nome do Produto" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Descrição" style={styles.input} value={descricao} onChangeText={setDescricao} />
      <TextInput placeholder="Quantidade" style={styles.input} keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />
      <TextInput placeholder="Preço" style={styles.input} keyboardType="numeric" value={preco} onChangeText={setPreco} />
      <Button title="Salvar Produto" onPress={salvarProduto} />
      <Button title="Cancelar" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#6A0DAD' },
  title: { fontSize: 24, color: '#FFFFFF', marginBottom: 20 },
  input: { height: 40, borderColor: '#FFFFFF', borderWidth: 1, marginBottom: 20, paddingLeft: 10, color: '#FFFFFF' },
});

export default CadastroProduto;