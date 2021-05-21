import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

export class HomeScreen extends Component {
    render = () => {
    return (
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Button
    title="Категории карточек"
    onPress={() => this.props.navigation.push('Categories')} />
</View>)
    }
}