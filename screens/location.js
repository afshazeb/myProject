import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Location extends Component{

    constructor(props){
        super(props);

        this.state = {
            location_id: 0,
            location: null,
            isLoading: true
    
        }
    }
    componentDidMount(){
        const loc_id = this.props.route.params.location_id;

        return("http://localhost:3333/api/1.0.0/location/" + loc_id);
    }


    render(){
    if(this.state.isLoading){
        return(<Text>Loading</Text>)
    }else{
        return(
            <View>
                 <Text>{this.state.location.location_name} </Text>
            </View>  
        )
    }
}

}

export default Location;

