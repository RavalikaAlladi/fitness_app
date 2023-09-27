import React from "react";
import {
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Text,
    Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class TrainerAndUser extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F6E79F', '#CDA662' ]}
                        style={styles.buttonStyling}>
                            <Image 
                                source={require("../assets/trainerAndUser/trainer.png")}
                                style={{  width: 95,height: 95}}>
                            </Image>
                        </LinearGradient>    
                    </TouchableOpacity>
                    <Text style={{color:"#fff", textAlign:"center"}}>Trainer</Text>
                </View>
                <Text style={styles.orText}>Or</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("user")}}>
                        <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F6E79F', '#CDA662' ]}
                        style={styles.buttonStyling}>
                            <Image 
                                source={require("../assets/trainerAndUser/user.png")}
                                style={{width: 85, height: 70}}>
                            </Image>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={{color:"#fff", textAlign:"center"}}>User</Text>
                </View>      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 325,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#000"
    },
    buttonContainer:{
        width: 150,
        height: 170,
    },
    buttonStyling:{
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 2,
        // borderColor: "#000",
        // backgroundColor: "#fff"
    },
   
    orText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        margin: 25
    }
})