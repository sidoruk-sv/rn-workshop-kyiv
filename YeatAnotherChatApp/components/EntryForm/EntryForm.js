import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

class EntryForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      channel: '',
    }
  }

  handlePress = () => {
    this.props.onPress({
      name: this.state.name,
      channel: this.state.channel,

    })
  };


 handleNameInputChange = (name) => {
   this.setState({ name })
  };

  handleChannelInputChange = (channel) => {
    this.setState({ channel })
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="rgba(0,0,0,0.2)"
          onChangeText={this.handleNameInputChange}
          style={styles.textInput}
        />

        <TextInput
          placeholder="Enter channel"
          placeholderTextColor="rgba(0,0,0,0.2)"
          onChangeText={this.handleChannelInputChange}
          style={styles.textInput}
        />

        <Button color="red" title="Join Channel" style={styles.button} onPress={this.handlePress} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    padding: 10,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    marginBottom: 15,
    width: '100%'
  },
  container: {
    flex: 1,
    padding: '20%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
  }
});

export default EntryForm;
