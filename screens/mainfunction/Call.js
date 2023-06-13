import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import NotificationApp from './chat/NotificationApp'
import { COLORS, SIZES } from '../../constants'
import FAB from 'react-native-fab'

const Peoples = [
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

const Call = ({ navigation }) => {
  const [bellModal, setBellModal] = useState(false)
  const [search, setSearch] = useState('')
  return (
    <View>
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
              width: '100%',
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
                // backgroundColor: 'red',
                width: '90%',
                paddingHorizontal: 10,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{ marginHorizontal: 15, color: COLORS.dark, fontSize: 18 }}
        >
          Resent Call
        </Text>
        <Image
          source={require('../../assets/icons/chat.png')}
          style={{ width: 50, height: 50, alignSelf: 'center' }}
        />
        <Text style={{ textAlign: 'center' }}>NO new Recent Call</Text>
      </View>

      <Text style={{ marginHorizontal: 15, color: COLORS.dark, fontSize: 18 }}>
        people
      </Text>
      <FlatList
        style={{ marginBottom: -30 }}
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
                <Text style={{ marginHorizontal: 10 }}>{item.userName}</Text>
                <Text style={{ marginHorizontal: 10 }}>{item.messageTime}</Text>
              </View>
            </View>
          )
        }}
      />

      <FAB
        buttonColor={COLORS.support1}
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          navigation.navigate('SaveNumber')
        }}
        visible={true}
        iconTextComponent={
          <View>
            <Image
              source={require('../../assets/icons/number-blocks.png')}
              style={{
                width: 35,
                height: 35,
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
    </View>
  )
}

export default Call

const styles = StyleSheet.create({})
