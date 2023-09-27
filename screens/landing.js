import React, {Component} from "react";
import {View, ImageBackground, TouchableOpacity, StyleSheet, Text,Image } from "react-native";
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";

import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../fonts/Lato/Lato-Regular.ttf")
};

export default class LandingScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
    }

    
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/bg_main.png")} 
                style={styles.bgImage}>
                    <Image source= {require("../assets/logo_1.png")} style={styles.logoImage}></Image>
                    <Text style={styles.firstLine}>Shape Your Body And Stay Healthy</Text>
                    <Text style={styles.secondLine}>Get Fit, Get Strong, Get Healthy</Text>                 
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("login")}}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F6E79F', '#CDA662' ]} style = {styles.buttonStyling}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </LinearGradient>
                    </TouchableOpacity>                   
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
    logoImage:{
        width: 234,
        height: 170,
        marginTop: 236,
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
    firstLine:{
        color:"#fff",
        width: 335,
        height: 72,
        marginTop: 150,
        marginLeft: 20,
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600,
    },
    secondLine:{
        color:"#fff",
        width: 211,
        height: 18,
        marginTop: 20,
        // marginLeft: 82,
        textAlign:"center",
        fontSize: 15
    },
    button:{
        width:335,
        height: 50,
        borderRadius: 30,
    },
    buttonStyling:{
        width:335,
        height: 50,
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 20
    },
    buttonText:{
        color:"#000",
        fontWeight: 800,
        fontSize: 20,
        //lineHeight: 24,
        textAlign:"center",
        fontFamily: "Lato"
    }
});