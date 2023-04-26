import { StyleSheet, Button} from 'react-native'
import React from 'react'

const AnswerOption = ({title, handleAnswer}) => {


return (
    <Button
        title={title}
        onPress={() => {
            handleAnswer(title)
        }}
    />
  )
}

export default AnswerOption

const styles = StyleSheet.create({})