import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  

});

const stylesPractice = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
    },
    
  header: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    },

    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },

    subtitleText: {
    fontSize: 16,
    color: '#fff',
    },

    content: {
      // flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      fontSize: 18,
      marginBottom: 20,
    },

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

      input: {
        height: 40,
        borderColor: 'pink',
        borderWidth: 1,
        marginTop: 16,
        paddingHorizontal: 8,
        width: '80%',
        borderRadius: 8,
        marginLeft: 50
        }
        
});

const stylesLogin = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
    borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
    elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
    width: '90%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
    },
    input: {
    height: 45, // เพิ่มความสูงของ TextInput
    borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
    borderWidth: 1,
    borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
    marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
    paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
    backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
    }, 
})

export {styles, stylesPractice, stylesLogin};