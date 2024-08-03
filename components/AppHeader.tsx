import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import {stylesPractice} from '../styles/styles'

type AppHeaderProps = {
    fullname:string;
    text:string;
    year? :number; // ? is an optional ส่งค่าหรือไม่ก็ได้
}

const AppHeader = ({fullname,text}:AppHeaderProps) :React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
        <Text style={stylesPractice.headerText}>
            Input your fullname: {fullname} 
        </Text>
        <Text style={stylesPractice.subtitleText}>
            {text} 
        </Text>
    </View>
  )
}

export default AppHeader
    