import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  Welcome,
  AuthMain,
  SaveNumber,
  SearchContact,
  ShareContact,
  AddContact,
} from './screens'
import Walkthrough from './screens/Walkthrough/Walkthrough'
import MyTab from './navigation/MyTab'
import ChatVideo from './screens/mainfunction/chat/ChatVideo'
import AddChatParticipant from './screens/mainfunction/chat/AddChatParticipant'
import NotificationApp from './screens/mainfunction/chat/NotificationApp'
import Chatting from './screens/mainfunction/chat/Chatting'
import Register from './screens/Authentication/Register'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Welcome'}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="AuthMain" component={AuthMain} />
        <Stack.Screen name="MyTab" component={MyTab} />
        <Stack.Screen name="ChatVideo" component={ChatVideo} />
        <Stack.Screen
          name="AddChatParticipant"
          component={AddChatParticipant}
        />
        <Stack.Screen name="Notification" component={NotificationApp} />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="SaveNumber" component={SaveNumber} />
        <Stack.Screen name="SearchContact" component={SearchContact} />
        <Stack.Screen name="ShareContact" component={ShareContact} />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import Walkthrough from './screens/Walkthrough/Walkthrough'

// export class App extends Component {
//   render() {
//     return (
//       <View>
//         <Walkthrough />
//       </View>
//     )
//   }
// }

// export default App
