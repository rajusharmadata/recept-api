import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Raju it is working </Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
        }}
        style={{
          height: 50,
          width: 50,
          marginLeft: 50,
          borderRadius: 1000,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <View>
        <Image source={require('@/assets/images/icon.png')} style={{ height: 100, width: 100 }} />
      </View>
    </View>
  );
}


// create style sheet
const Styles = StyleSheet.create({
  container: {
    paddingBlock: 10,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'red',
    textAlign: 'center',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,

  },
});
