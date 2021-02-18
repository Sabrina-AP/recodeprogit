import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundImage:'linear-gradient(-80deg,#FF69B4, #BA55D3)'
    },
    prod: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "#EE82EE"
    },
    title:{
        fontSize: 18,
        color:'white',
        alignItems: 'center',
        textAlign:'center'
    },
    nome: {
        paddingTop: 36,
        padding: 4, 
        fontSize: 22,
        color:'white',
        alignItems: 'center',
        textAlign:'center' 
    },
    descricao: {
        padding: 4, 
        fontSize: 18,
        alignItems: 'center',
        color:'black',
    },
    preco_anterior: {
        padding: 4, 
        color:'#ff0000',
        fontSize: 20,
        paddingBottom: 36, 
    },
    img:{
        width:100, 
        height:100
    }
})
export default styles;