import React from "react";
import {ScrollView, SafeAreaView, Image,ImageBackground, Dimensions,Text, StyleSheet, View, TouchableOpacity } from "react-native";
import plantsInfo from '../components/planets'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const windowHeight = Dimensions.get('window').height;

const DetailsPlanets = ({navigation, route}) => {
  const { itemId } = route.params;
  return (
    
    <SafeAreaView style={styles.bgInfo}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('VuePlanets')}>
        <View>
        <Image
          style={styles.logoBack}
          source={require("../assets/chevron_left.jpg")}
        />
      </View>
      </TouchableOpacity>
      <ScrollView style={styles.item}>

      <View style={styles.containerIntro}>
          <View style={styles.containerImg}>
            <Image
              style={styles.visuelPlanet}
              source={{
                uri:
                  `${plantsInfo[itemId].imgUrl}`,
              }}
            ></Image>
          </View>

          <View style={styles.introPlanet}>
            <Text style={styles.title}>{plantsInfo[itemId].nom}</Text>
            <Text style={styles.accroche}>
            {plantsInfo[itemId].accroche}
            </Text>
          </View>
      </View>
      <View style={styles.info}>

      </View>
     
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // item: {
  //   backgroundColor: "black",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "relative",
  // },
  bgInfo:{
    backgroundColor : "black",
  },
  scrollView:{
    flex:1,
    flexDirection:'column',
    paddingVertical: 10,
    width: "100%",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 10,
    width: 50,
    height: 50,
    zIndex: 200,
  },
  logoBack: {
    width: 50,
    height: 50,
  },
  containerIntro: {
    flex:1,
    width:"100%",
    height: windowHeight,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems:"center",

  },
  containerImg: {
    height: windowHeight / 2,
    width: "100%",   
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems:"center",
  },
  visuelPlanet: {
    width: "100%",
    height: "100%",
  },
  introPlanet: {
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    height: windowHeight / 2,
    paddingVertical : 60,
  },
  title: {
    color: "#fff",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 40,
  },
  accroche: {
    color: "#fff",
    fontSize: 20,
    textAlign: "justify",
  },
  planetInformation:{
    width: "80%",
  }
});

export default DetailsPlanets;