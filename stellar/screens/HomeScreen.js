import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text>Stellar App</Text>
            </View>
        )
    }
}