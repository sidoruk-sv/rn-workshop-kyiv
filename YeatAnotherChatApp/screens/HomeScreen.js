import React from 'react';

import EntryForm from './../components/EntryForm/EntryForm';

class HomeScreen extends React.Component {
  handlePress = ({ name, channel }) => {
    this.props.navigation.navigate('Second', { name, channel });
  };

  render() {
    return (
      <EntryForm onPress={this.handlePress}/>
    );
  }
}

export default HomeScreen;
