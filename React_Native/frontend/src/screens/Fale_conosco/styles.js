import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundImage:'linear-gradient(-80deg,#FF69B4, #BA55D3)',
    },
    title: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    texttitle: {
        fontSize: 40,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center' 
    },

    box: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#EE82EE"
    },
    contato: {
        color: "black",
        fontSize: 20,
    },
    category: {
        fontSize: 20, 
        marginLeft: 20, 
        color:'white' 
    },
    name: {
        width: "100%", 
        padding: 14, 
        borderRadius: 25,
        backgroundColor: "white"
    },
    
    coment: {
        borderRadius: 25, 
        backgroundColor: "white",  
        width: "100%", 
        padding: 55, 
        borderRadius: 25
    },

    btn:{
        borderRadius: 25, 
        padding: 12, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#8B008B"
    },
    send:{
        fontSize: 20,
        color:'white'
    },

    mensage: {
        marginBottom: -20,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: "#CD5C5C"     
    },
    msg: {
        fontSize: 25, 
        alignItems: 'center', 
        color:'white' 
    },
    msgtext: {
        color: "white",
        fontSize: 18,
        textAlign:'center'
    },
    img:{
        width: 30,
        height: 30
    }

})

export default styles;