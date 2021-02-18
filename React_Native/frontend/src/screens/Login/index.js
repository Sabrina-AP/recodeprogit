import React from 'react';
import {TouchableOpacity, View, SafeAreaView, Text, TextInput, Alert} from 'react-native';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "sabrina@teste.com",
    senha: "222444"
}

function Login({navigation}) {
    function autenticacao() {
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Produtos");
        }else {
            Alert.alert("Usuario não está cadastrado", "Por favor, informe um usuário válido.")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>
            <SafeAreaView style={styles.box}>
                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} value={usuario} onChangeText={(text) => setUsuario(text)} placeholder="digite o email: sabrina@teste.com" />
                    <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={(text) => setSenha(text)} placeholder="digite a senha: 222444" />
                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}
export default Login;