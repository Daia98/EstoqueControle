import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConsultaEstoque = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONSULTA DE ESTOQUE</Text>
      {/* Implementar a lista de produtos e funcionalidades de edição/remover */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#6A0DAD' },
  title: { fontSize: 24, color: '#FFFFFF', marginBottom: 20 },
});

export default ConsultaEstoque;