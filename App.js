import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render(){

    let name = "Afsha";

    return (
        <View>
          <Text>Hello {name}</Text>
        </View>
    );
  }
}

export default HelloWorldApp

