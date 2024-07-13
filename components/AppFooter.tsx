import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type FooterProps = {
  text:string;
}

const AppFooter = ({text}:FooterProps) :React.JSX.Element => {
    // const hello = "Hello TNI Footer";
    // const hello2 = <Text>Hello JSX</Text>;
    // const isLogin = true;
  return (
    <View style={styles.footer}>
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
      <Text style={styles.footerText}>
        {text}
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

const styles = StyleSheet.create({
  footer: {
  backgroundColor: '#f8f8f8',
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  },
  footerText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  },
  });
  