 import { View, Text, Button, StyleSheet } from 'react-native'
 import React from 'react'

 import { useSelector, useDispatch } from 'react-redux'

 import { reset } from '../slices/questionSlice'
 import { selectScore } from '../slices/questionSlice'

 import { useNavigation } from '@react-navigation/native'
 
 const EndScreen = () => {
    const dispatch = useDispatch();
    const score = useSelector(selectScore);

    //Create new instance of useNavigation
    const navigation = useNavigation();

   
    return (
     <View style = {styles.container}>
       <Text style={styles.message}>You got {score}/22 correct</Text>
       <Button
        title="Return to Main Menu"
        onPress={() => {
            dispatch(reset())
            navigation.popToTop();
        }}
        />
     </View>
   )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10
  }
 })
 
 export default EndScreen