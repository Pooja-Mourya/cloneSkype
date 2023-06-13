import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native'
import React, { useState } from 'react'
import NotificationApp from './chat/NotificationApp'
import { COLORS, SIZES } from '../../constants'
import FAB from 'react-native-fab'

const ContactData = [
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
  {
    id: '6',
    userName: 'Annu',
    userImg: require('../../assets/icons/person.png'),
  },
  {
    id: '7',
    userName: 'Arati',
    userImg: require('../../assets/icons/person2.png'),
  },
  {
    id: '8',
    userName: 'Babita',
    userImg: require('../../assets/icons/person.png'),
  },
  {
    id: '9',
    userName: 'Google',
    userImg: require('../../assets/icons/google.png'),
  },
  {
    id: '10',
    userName: 'Twitter',
    userImg: require('../../assets/icons/twitter.png'),
  },
  {
    id: '11',
    userName: 'Latila',
    userImg: require('../../assets/icons/person.png'),
  },
  {
    id: '12',
    userName: 'Manvi',
    userImg: require('../../assets/icons/person2.png'),
  },
  {
    id: '13',
    userName: 'banvi',
    userImg: require('../../assets/icons/person2.png'),
  },
]

const Contact = ({ navigation }) => {
  const [bellModal, setBellModal] = useState(false)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState()

  const filterData = () => {
    let store = ContactData.filter((t) =>
      t.userName.toLowerCase().includes(search.toLowerCase()),
    )
    if (store) {
      store = store.sort((a, b) =>
        a.userName.toLowerCase() > b.userName.toLowerCase()
          ? 1
          : a.userName.toLowerCase() < b.userName.toLowerCase()
          ? -1
          : 0,
      )
    }
    console.log('first', store)
    return store
  }
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
                width: '70%',
                paddingHorizontal: 10,
                marginHorizontal: 10,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => setSortBy(!sortBy)}
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
      <View>
        <FlatList
          style={{ marginBottom: 220 }}
          data={filterData()}
          keyExtractor={(key) => key.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  // backgroundColor: COLORS.light,
                  // elevation: 1,
                  // marginVertical: 1,
                }}
              >
                <Image
                  source={item.userImg}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                />
                <View>
                  <Text
                    style={{
                      marginHorizontal: 10,
                      fontSize: SIZES.h3,
                      marginTop: 12,
                    }}
                  >
                    {item.userName}
                  </Text>
                  {/* <Text style={{ marginHorizontal: 10 }}>{item.messageTime}</Text> */}
                </View>
              </View>
            )
          }}
        />
        {/* <FAB
          buttonColor={COLORS.support1}
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            navigation.navigate('SearchContact')
          }}
          visible={true}
          //   iconTextComponent={
          //     <Image source={require('../../assets/icons/add.png')} />
          //   }
        /> */}
      </View>
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

      {sortBy ? (
        <View
          style={{
            backgroundColor: COLORS.light,
            width: '55%',
            height: 150,
            left: '40%',
            position: 'absolute',
            padding: 10,
            borderRadius: SIZES.radius,
            marginTop: 112,
            elevation: 5,
          }}
        >
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>
              All show active contacts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ paddingVertical: 10 }}>My Contact</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})
