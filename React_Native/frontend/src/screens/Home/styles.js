import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    box: {
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage:'linear-gradient(-80deg,#FF69B4, #BA55D3)',
    },
    title: {
        color: '#FFFFFF',  
        fontSize: 35,
        textAlign:'center'
    },
    category: {
        color:'#4B0082',
        fontSize: 35
    },
    img:{
        width: 330,
        height: 180 
    }
})

export default styles;