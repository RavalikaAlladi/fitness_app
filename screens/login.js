import React from "react";
import {View, ImageBackground, TouchableOpacity, StyleSheet, Text,Image, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Font from "expo-font";

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                 <ImageBackground source={require("../assets/bg_main.png")} style={styles.bgImage}>
                    <Image source= {require("../assets/logo_1.png")} style={styles.logoImage}></Image>
                    <Text style = {styles.text}>40,000+ Users</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require("../assets/login_page/Ellipse 2.png")} style={styles.image}></Image>
                        <Image source={require("../assets/login_page/Ellipse 3.png")} style={[styles.image,{marginLeft:-15, zIndex:-1}]}></Image>
                        <Image source={require("../assets/login_page/Ellipse 4.png")} style={[styles.image,{marginLeft:-15, zIndex:-2}]}></Image>
                        <Image source={require("../assets/login_page/Ellipse 5.png")} style={[styles.image,{marginLeft:-15, zIndex: -3}]}></Image>
                        <Image source={require("../assets/login_page/Ellipse 6.png")} style={[styles.image,{marginLeft:-15, zIndex: -4}]}></Image>
                    </View>  
                    <View style={styles.inputContainer}>
                        <Text style={styles.loginText}>Login</Text>
                        <TextInput 
                            placeholder="Username" 
                            placeholderTextColor="#fff" 
                            style={[styles.textInput,{marginTop: 20}]}>
                        </TextInput>
                        <TextInput 
                            placeholder="Password" 
                            placeholderTextColor="#fff" 
                            style={[styles.textInput, {marginTop: 10}]}>
                        </TextInput>
                        <TouchableOpacity style={styles.forgetPasswordButton}>
                            <Text style={styles.forgetPassword}>Forget Password</Text>
                        </TouchableOpacity>
                        <View style={styles.loginContainer}>
                            <TouchableOpacity style={styles.googleButton}>
                                <Image source={require("../assets/login_page/google_logo.png")} style={styles.googleLogo}></Image>
                            </TouchableOpacity>
                            <Text style={styles.or}>or</Text>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("traineranduser")}}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F6E79F', '#CDA662' ]} style = {styles.buttonStyling}>
                                    <Text style={styles.loginButtonText}>Login</Text>
                                </LinearGradient>  
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.signUpButton} 
                        onPress={()=>{this.props.navigation.navigate("signUp")}}>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                 </ImageBackground>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "centre",
        alignItems: "center"
    },
    bgImage:{
        flex: 1,
        resizeMode : "cover",
        backgroundColor: "#141414",
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    logoImage:{
        width: 45,
        height: 38,
        marginTop: 123,
    },
    text: {
        width: 203,
        height: 44,
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 28.8,
        textAlign: "center",
        color: "#ffffff"
    },
    imageContainer:{
        flexDirection:"row",
        alignItems: "center",
    },
    image:{
        width: 35,
        height: 35,
    },
    inputContainer:{
        marginTop:20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#202020",
        height:"50%",
        width:"100%"
    },
    loginText:{
        color:"#fff",
        textAlign:"left",
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 700,
    },
    loginContainer:{
        flexDirection:"row",
        width: 335,
        alignSelf: "center"
    },
    googleLogo:{
        width: 30,
        height: 30.4,
    },
    googleButton:{
        borderWidth: 2,
        width: 69,
        height: 50,
        borderColor: "#fff",
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center"
    },
    loginButton:{
        borderWidth: 2,
        width: 246,

    },
    textInput:{
        width: "80%",
        height: 35,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 30,
        alignSelf:"center",
        textSize: 15,
        opacity: "50%",
        padding: 10
    },
    or:{
        color: "#fff",
        alignSelf: "center",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 14.4,
        margin: 5
    },
    buttonStyling:{
        width: 246,
        height: 50,
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:"center",
    },
    loginButtonText:{
        fontSize: 20,
        fontWeight: 800,
    },
    forgetPasswordButton:{
        width:91, 
        height:21, 
        marginLeft: 37,
        marginTop: 5
    },
    forgetPassword:{
        fontSize: 10,
        fontWeight: 700,
        textAlign: "center",
        lineHeight: 12,
        color: "#fff"
    },
    signUpButton:{
        width: 335,
        height: 50,
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:"center",
        borderColor: "#fff",
        borderWidth: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    signUpText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 700,
    },
    loginText:{
        color: "#fff",
        fontWeight: 700,
        marginLeft: 35,
        marginTop: 10,
        fontSize: 24
    }
})