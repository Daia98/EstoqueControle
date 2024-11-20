import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <Button title="Login" onPress={() => {}} />
      <Button title="Cadastrar Usuário" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#6A0DAD' },
  title: { fontSize: 24, color: '#FFFFFF', marginBottom: 20 },
  input: { height: 40, borderColor: '#FFFFFF', borderWidth: 1, marginBottom: 20, paddingLeft: 10, color: '#FFFFFF' },
});

export default LoginScreen;