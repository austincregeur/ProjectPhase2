import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import QuestionScreen from './screens/Question'
import EndScreen from './screens/EndScreen'
import WelcomeScreen from './screens/Welcome'

//Import store
import store from './store.js';
import { Provider } from 'react-redux';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="QuestionScreen" 
          component={QuestionScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="EndScreen" 
          component={EndScreen} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'white'
  }
});
