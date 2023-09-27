import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient";

import * as Font from "expo-font";


export default class UserProfile extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Welcome User</Text>
                <Text style={[styles.text, {fontSize: 13, marginTop: 50}]}>Set Profile Picture</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "centre",
        alignItems: "center",
        backgroundColor:"#000",
        width: 375
    },
    text:{
        color:"#fff",
        alignText:"center",
        fontSize: 24,
        fontWeight: 500,
        // width: 155,
        // height: 29,
        marginTop: 113,
        lineHeight: 30,
        
    }
})