import React from "react";
import {View, ImageBackground, TouchableOpacity, StyleSheet, Text,Image, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class SignUpScreen extends React.Component{
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
                        <Text style={styles.signUpText}>Sign Up</Text>
                        <TextInput 
                            placeholder="Full Name" 
                            placeholderTextColor="#fff" 
                            style={[styles.textInput,{marginTop: 20}]}>
                        </TextInput>
                        <TextInput 
                            placeholder="Email" 
                            placeholderTextColor="#fff" 
                            style={[styles.textInput, {marginTop: 10}]}>
                        </TextInput>
                        <TextInput 
                            placeholder="Password" 
                            placeholderTextColor="#fff" 
                            style={[styles.textInput, {marginTop: 10}]}>
                        </TextInput>
                        <TextInput 
                            placeholder="Confirm Password" 
                            placeholderTextColor="#fff" 
                            style={[styles.textInput, {marginTop: 10}]}>
                        </TextInput>
                        <View style={styles.loginTextContainer}>
                            <Text style={[styles.textLogin, {color:"#fff"}]}>Already have account?</Text>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("login")}}>
                                    <Text style={[styles.textLogin, {color:"#E4CB84"}]}>  Log In</Text>                   
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("traineranduser")}}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F6E79F', '#CDA662' ]} style = {styles.buttonStyling}>
                                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                                </LinearGradient>  
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
        //flex: 0.65,
        height:"65%",
        width: 375,
    },
    signUpText:{
        color:"#fff",
        textAlign:"left",
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 700,
    },
    textInput:{
        width: 335,
        height: 35,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 30,
        alignSelf:"center",
        textSize: 15,
        opacity: "50%",
        padding: 10
    },
    buttonStyling:{
        width: 335,
        height: 50,
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 20
    },
    signUpButtonText:{
        fontSize: 20,
        fontWeight: 800,
    },
    loginTextContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
    },
    textLogin:{
        fontSize:15,
        fontWeight: 400,
        textAlign: "center",
        marginTop: 40
    }

})