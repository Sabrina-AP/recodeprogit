import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function Home(){
    return(
        <View style={styles.caixa}>
            <SafeAreaView style={styles.box}>
                <TouchableOpacity> 
                    <Text style={styles.text}>       
                        Seja bem vindo(a)!
                        Aqui em nossa loja, <i>programadores têm desconto</i> nos produtos para sua casa!
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}
