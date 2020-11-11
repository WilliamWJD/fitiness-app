import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import PresentationBack from '../../images/presentation.png';

const Presentation:React.FC = () =>{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image  source={PresentationBack} style={{ width:350, height:400}}/>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Get to your ideal body</Text>
                <Text style={styles.contentSubTitle}>by exercising at home</Text>
                <TouchableOpacity style={styles.contentButton} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.contentButtonText}>Let's start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,

        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },

    content:{
        width:'100%',
        alignItems:'flex-start',
        paddingHorizontal:10,
        
    },

    contentTitle:{
        fontSize:28,
        color:'#706fd3',
        fontWeight:'bold',
        marginBottom:5
    },

    contentSubTitle:{
        fontSize:19,
        color:'#706fd3',
        marginBottom:15
    },

    contentButton:{
        width:'100%',
        height:45,
        borderRadius:10,
        backgroundColor:'#20bf6b',

        justifyContent:'center',
        alignItems:'center'
    },

    contentButtonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    }

})

export default Presentation