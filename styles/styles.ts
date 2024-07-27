import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        borderColor: "#f5f5f5", //Set background color as a grey color
      },
    
      profileImage: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginRight: 20, //ข้อความห่างกับรูป
    
      },
    
      profileContainer: {
        flexDirection: "row", //ให้รูปกับข้อความขนานกัน
        alignItems: "center",
        width: "100%", //ขยายความกว้างของ container 100%
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        marginTop: 50,
      },
    
      profileName: {
        fontSize: 20,
        color: 'coral',
        fontStyle: 'italic',
        fontWeight: 'bold'
      },

})