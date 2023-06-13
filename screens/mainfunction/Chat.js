import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
  Modal,
  TextInput,
} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/layout/Header'
import { COLORS, SIZES } from '../../constants'
import FAB from 'react-native-fab'
import NotificationApp from './chat/NotificationApp'

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../assets/images/banner-01.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/images/banner-02.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/images/banner-03.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/images/buy_coffee.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/images/get_reward.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
]

const Chat = ({ navigation }) => {
  const [bellModal, setBellModal] = useState(false)
  const [search, setSearch] = useState('')
  const [sortModal, setSortModal] = useState(false)
  return (
    <View style={{ backgroundColor: COLORS.support4_08, flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.support1,
          height: (SIZES.height * 1) / 5.8,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../assets/images/banner-01.png')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              top: 5,
              left: 5,
            }}
          />
          <View style={{ margin: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 16, color: COLORS.dark }}>
              POOJA MOURYA
            </Text>
            <Text>Share what you are up to</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 80 }}>
            <TouchableOpacity onPress={() => navigation.navigate('ChatVideo')}>
              <Image
                source={require('../../assets/icons/live-streaming.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  top: 10,
                  // left: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBellModal(true)}>
              <Image
                source={require('../../assets/icons/bell.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  top: 10,
                  left: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.light,
              borderRadius: SIZES.radius,
              width: '85%',
            }}
          >
            <Image
              source={require('../../assets/icons/search.png')}
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
                //   backgroundColor: COLORS.light,
                paddingHorizontal: 10,
                marginHorizontal: 10,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => setSortModal(!sortModal)}
            style={{
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.light,
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={require('../../assets/icons/sort.png')}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chatting', { userName: item.userName })
            }
            style={{
              flexDirection: 'row',
              marginTop: 10,
              backgroundColor: COLORS.support3_08,
              marginHorizontal: 10,
              padding: 10,
              borderRadius: SIZES.radius,
              width: '93%',
            }}
          >
            <Image
              source={item.userImg}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                top: 5,
                left: 5,
              }}
            />
            <View style={{ margin: 10, paddingHorizontal: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                }}
              >
                <Text style={{ fontSize: SIZES.h4, color: COLORS.dark }}>
                  {item.userName}
                </Text>
                <Text style={{ marginTop: 0 }}>{item.messageTime}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: -10 }}>
                <Image
                  source={require('../../assets/icons/telephone.png')}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    top: 5,
                    // left: 5,
                  }}
                />
                <Text style={{ padding: 5, width: '90%' }}>
                  {item.messageText}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <FAB
        buttonColor={COLORS.support1}
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          navigation.navigate('AddChatParticipant')
        }}
        visible={true}
        iconTextComponent={
          <View>
            <Image
              source={require('../../assets/icons/add.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        }
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={bellModal}
        onRequestClose={() => {
          //   Alert.alert('Modal has been closed.')
          setBellModal(!bellModal)
        }}
      >
        <View style={{ backgroundColor: COLORS.light, flex: 1 }}>
          <NotificationApp bellModal={bellModal} setBellModal={setBellModal} />
        </View>
      </Modal>

      {sortModal ? (
        <View
          style={{
            backgroundColor: COLORS.light,
            width: '40%',
            height: 230,
            left: '55%',
            position: 'absolute',
            padding: 10,
            borderRadius: SIZES.radius,
            marginTop: 112,
            elevation: 5,
          }}
        >
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>Sort by Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>Sort by Unread</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>Sort by Active</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>Hide favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>Enable compact layout</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}

export default Chat
