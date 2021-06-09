import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

export class CategoriesScreen extends Component {
    render = () => {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Категории карточек</Text>
                <Button title="Карточки" onPress={() => this.props.navigation.navigate('Cards')}/>
                <Button title="Назад" onPress={() => this.props.navigation.goBack()}/>
                <Button
                    title="В начало приложения"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}