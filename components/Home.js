import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

//Navigation Trigger
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  //Create new instance of useNavigation
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
       <Text style={styles.header}>The NBA All Star Quiz</Text>
       <Text style={styles.body}>How well do you know the 2022-2023 All Stars? In this quiz you'll need to identify NBA players when given their stats. Can you identify all 22 All Stars?</Text>
       <View style={styles.button}>
       <Button 
        title="Start Quiz"
        onPress={() => {
          navigation.push("QuestionScreen")
        }} 
       />
       </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    padding: 15,
    fontWeight: "bold",
    color: "#1f1f1f"
  },
  body: {
    fontSize: 14,
  },
  button: {
    marginTop: 25
  }
})