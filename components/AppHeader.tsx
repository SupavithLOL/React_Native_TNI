import { View, Text } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    title:string;
    year? :number; // ? is an optional ส่งค่าหรือไม่ก็ได้
}

const AppHeader = ({title,year}:AppHeaderProps) :React.JSX.Element => {
  return (
    <View>
      <Text>
        {title} 
        {year && year+543}
      </Text>
    </View>
  )
}

export default AppHeader