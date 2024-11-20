import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'estoque.db', location: 'default' },
  () => {},
  error => { console.error(error); }
);

// Criar tabela de produtos
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT, quantidade INTEGER, preco REAL, categoria TEXT);',
    [],
    () => { console.log('Tabela criada com sucesso'); },
    error => { console.error('Erro ao criar tabela: ', error); }
  );
});