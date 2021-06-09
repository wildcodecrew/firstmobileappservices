import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

export class CardsScreen extends Component {
    render = () => {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Карточки</Text>
                <Button title="Назад" onPress={() => this.props.navigation.goBack()}/>
                <Button
                    title="На главный экран"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}