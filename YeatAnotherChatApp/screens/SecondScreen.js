import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SecondScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? `${params.channel || ''}` : 'Second Screen',
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : '';
    const channel = params ? params.channel : '';

    return (
      <View style={styles.container}>
        <Text>Name: {name}</Text>
        <Text>Channel: {channel}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default  SecondScreen;
