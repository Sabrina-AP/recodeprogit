import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    box:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage:'linear-gradient(-80deg,#FF69B4, #BA55D3)'
    },
    text: {
        marginLeft:10, 
        color: '#FFFFFF', 
        alignItems:'center', 
        textAlign:'center', 
        fontSize: 60
    }
})

export default styles;

