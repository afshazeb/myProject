import React from 'react';
import React, { Component } from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from '../styles/global';
import { Rating, AirbnbRating } from 'react-native-elements';
import { render } from 'react-dom';

class reviewDetails extends Component{

  constructor(props){
    super(props);

    this.state = {
      overall_rating: 0,
      review_body: ""
    }
  }

  ratingCompleted(rating, name) {
    let stateObject = () => {
      let returnObj = {};
      returnObj[name] = rating;
      return returnObj;
    };
    this.setState( stateObject );
  }

const addReview = () => {

  render(){
    return(
      <View>
        <Text>Review</Text>

        <Text>Overall Rating</Text>
        <AirbnbRating
            size = {15}
            defaultRating={0}
            onFinishRating={(rating) => this.ratingCompleted(rating, "overall_rating")}
        />

        <TextInput
             value={this.state.review.body}
             onChangeText={(q) => this.setState({review_body: review_body})}
        />

        <Button title= "Upload" onPress={() => this.addReview()} />
      </View>
    );
  }
}
}

export default reviewDetails; 
