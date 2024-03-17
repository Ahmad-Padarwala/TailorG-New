import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Home = ({route}) => {
    console.log(route.params);
  return (
    <View>
      <Text>Home {route.params.id}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})