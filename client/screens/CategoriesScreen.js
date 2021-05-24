import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

export class CategoriesScreen extends Component {
    render = () => {
        return (
            <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf9f8', paddingTop: '1%',paddingBottom:'1%'}}>
                <Button title="Карточки" onPress={() => this.props.navigation.navigate('Cards')}/>
                <Button
                    title="На главную"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}
