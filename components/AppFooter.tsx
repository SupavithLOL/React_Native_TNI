import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {stylesPractice} from '../styles/styles'

type FooterProps = {
  footerMessage:string;
}

const AppFooter = ({footerMessage}:FooterProps) :React.JSX.Element => {
    // const hello = "Hello TNI Footer";
    // const hello2 = <Text>Hello JSX</Text>;
    // const isLogin = true;
  return (
    <View style={stylesPractice.footer}>
      {/* <Text style={styles.myText}>
        {hello} Date:{new Date().toLocaleDateString()}
        </Text>
      {hello2}
      {isLogin === true && <Text>Welcome!!!</Text>}
      {
        isLogin === true 
        ? (<Text>Welcome Marry</Text>)
        : (<Text>ยังไม่ได้ Login</Text>)
      } */}
      <Text style={stylesPractice.footerText}>
        {footerMessage}
      </Text>
    
    </View>
  )
}

export default AppFooter

// const styles = StyleSheet.create({
//     myText:{
//         color:'red'
//     }
// })

  