import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Second: {
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
