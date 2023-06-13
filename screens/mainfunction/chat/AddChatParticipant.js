import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { SIZES, COLORS } from '../../../constants'

const chatSection = [
  {
    id: '1',
    icon: require('../../../assets/icons/video.png'),
    name: 'Meet Now',
  },
  {
    id: '2',
    icon: require('../../../assets/icons/focus-group.png'),
    name: 'New Group Chat',
  },
  {
    id: '3',
    icon: require('../../../assets/icons/new-message.png'),
    name: 'New Call',
  },
  {
    id: '4',
    icon: require('../../../assets/icons/speech-bubbles.png'),
    name: 'New Moderated Chat',
  },
  {
    id: '5',
    icon: require('../../../assets/icons/chatting.png'),
    name: 'New Private Conversation',
  },
]

const Peoples = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../assets/images/banner-01.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../assets/images/banner-02.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../assets/images/banner-03.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../assets/images/buy_coffee.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../assets/images/get_reward.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
]

const AddChatParticipant = ({ navigation }) => {
  const [search, setSearch] = useState('')
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/arrow-left.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: SIZES.h2,
            marginHorizontal: 100,
            color: COLORS.dark,
          }}
        >
          New Chat
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.grey20,
          marginHorizontal: 10,
          borderRadius: SIZES.radius,
        }}
      >
        <Image
          source={require('../../../assets/icons/search.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            left: 15,
            marginVertical: 10,
          }}
        />
        <TextInput
          placeholder="search"
          value={search}
          onChangeText={(t) => setSearch(t)}
          style={{
            borderRadius: SIZES.radius,
            // backgroundColor: 'red',
            width: '80%',
            paddingHorizontal: 10,
            marginHorizontal: 10,
          }}
        />
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={chatSection}
            keyExtractor={(key) => key.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    padding: 16,
                    backgroundColor: COLORS.light,
                    elevation: 1,
                    marginVertical: 1,
                  }}
                >
                  <Image source={item.icon} style={{ width: 25, height: 25 }} />
                  <Text style={{ marginHorizontal: 10 }}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <Text
          style={{ marginHorizontal: 15, color: COLORS.dark, fontSize: 18 }}
        >
          people
        </Text>
        <View>
          <FlatList
            data={Peoples.filter((t) =>
              t.userName.toLowerCase().includes(search.toLowerCase()),
            )}
            keyExtractor={(key) => key.id}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 16,
                    backgroundColor: COLORS.light,
                    elevation: 1,
                    marginVertical: 1,
                  }}
                >
                  <Image
                    source={item.userImg}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: SIZES.radius,
                    }}
                  />
                  <View>
                    <Text style={{ marginHorizontal: 10 }}>
                      {item.userName}
                    </Text>
                    <Text style={{ marginHorizontal: 10 }}>
                      {item.messageTime}
                    </Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default AddChatParticipant

const styles = StyleSheet.create({})
