import React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';


export default function Home(props){
    const {navigation} = props;
    return (
        <SafeAreaView style={styles.box}>
            <Image style={styles.img} source={require('../../../assets/logo.png')}/>   
            <br /> <br /> 
            <Text style={styles.title}>Páginas da nossa loja Full Stack Eletro </Text>
            <br /> <br /> 
            <TouchableOpacity title='Ir para Sobre' onPress={()=>navigation.navigate('Sobre')}>
                <Text style={styles.category}>Sobre</Text>    
            </TouchableOpacity>
            <br />  <br />  
            <TouchableOpacity title='Ir para Login' onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.category}>Login</Text>
            </TouchableOpacity>
            <br />  <br />  
            <TouchableOpacity title='Ir para Produtos' onPress={()=>navigation.navigate('Produtos')}>
                <Text style={styles.category}>Produtos</Text>
            </TouchableOpacity>
            <br />  <br />  
            <TouchableOpacity title='Ir para Fale_conosco' onPress={()=>navigation.navigate('Fale_conosco')}>
                <Text style={styles.category}>Fale_conosco</Text>
            </TouchableOpacity>
            <br />  
        </SafeAreaView>
    )
}
