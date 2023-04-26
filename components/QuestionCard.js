import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnswerOption from './AnswerOption'

import players from '../players'
import stats from '../stats'

//useDispatch, calls reducers(setters)
//useSelectors, calls selectors(getters)
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import {increaseScore, increaseQuestionNumber, reset} from "../slices/questionSlice";

import {selectScore, selectQuestionNumber} from '../slices/questionSlice'


//Navigation Trigger
import { useNavigation } from '@react-navigation/native'

const QuestionCard = () => {
  const dispatch = useDispatch();
  const score = useSelector(selectScore)
  const index = useSelector(selectQuestionNumber)

  //Create new instance of useNavigation
  const navigation = useNavigation();
  

  const player = players[index];
  const stat = stats[index];

  let optionA = 0, optionB = 0, optionC = 0
  if(index < 11){
     optionA = Math.floor(Math.random() * (22 - index) + index);
     optionB = Math.floor(Math.random() * (22 - index) + index);
     optionC = Math.floor(Math.random() * (22 - index) + index);
  } else {
     optionA = Math.floor(Math.random() * (index));
     optionB = Math.floor(Math.random() * (index));
     optionC = Math.floor(Math.random() * (index));
  }
  const playerA = players[optionA];
  const playerB = players[optionB];
  const playerC = players[optionC];

  const options = [playerA, playerB, playerC, player];
  options.sort(() => Math.random() - .5)

  const nextQuestion = () => {
    if(index < 21){
      dispatch(increaseQuestionNumber())
    } else {
      //reset question number
      navigation.push("EndScreen");
    }
  }


  const handleAnswer = (playerName) => {
    let value = players.indexOf(playerName);
    if(value == index){
      dispatch(increaseScore());
    }
    nextQuestion();
  }
  return (
    <View style={styles.container}>
      <Button
        title="Exit Quiz"
        onPress={() => {
          dispatch(reset())
          navigation.popToTop()
        }}
      />
      <Text style={styles.header}>Question {index + 1}</Text>
      <Text style={styles.header}>Score: {score}</Text>
      <Text style={styles.stat}>Games Played: {stat.games_played}</Text>
      <Text style={styles.stat}>Points {stat.pts}</Text>
      <Text style={styles.stat}>Rebounds: {stat.reb}</Text>
      <Text style={styles.stat}>Assists: {stat.ast}</Text>
      <Text style={styles.stat}>Steals: {stat.stl}</Text>
      <Text style={styles.stat}>Blocks: {stat.blk}</Text>
      <Text style={styles.stat}>Turnovers: {stat.turnover}</Text>
      <Text style={styles.stat}>Field Goal Percentage: {Math.floor(stat.fg_pct * 1000)/10}</Text>
      <Text style={styles.stat}>Three-Point Percentage: {Math.floor(stat.fg3_pct * 1000)/10}</Text>
      <Text style={styles.stat}>Free Throw Percentage: {Math.floor(stat.ft_pct * 1000)/10}</Text>
      
      <AnswerOption title={options[0]} handleAnswer = {handleAnswer}/>
      <AnswerOption title={options[1]} handleAnswer = {handleAnswer}/>
      <AnswerOption title={options[2]} handleAnswer = {handleAnswer}/>
      <AnswerOption title={options[3]} handleAnswer = {handleAnswer}/>
    </View>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stat: {
    fontSize: 15,
    padding: 5
  },
  header: {
    fontSize: 20,
    padding: 8
  }
})