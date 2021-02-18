import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
    },
    box:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage:'linear-gradient(-80deg,#FF69B4, #BA55D3)'
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        marginTop: -100,
        color: "black",
        fontSize: 45
    },
    inputs: {
        width: "100%",
        padding: 18
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 18,
        marginTop: 30,
        borderRadius: 25,
    },
    btn:{
        backgroundColor: "#8B008B",
        marginTop: 30,
        padding: 12,
        borderRadius: 25,
        width: "100%",
    },
    texto:{
        fontSize: 30,
        color: "white",
        textAlign: 'center',
       
    }
})

export default styles;


