import React, {Component} from 'react';
import { Button, View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import _ from "lodash";
import {Categories} from "../data/Categories";
import {Cards} from "../data/Cards";
import {CategoryItem} from "../components/CategoryItem";
import {CardItem} from "../components/CardItem";
var Sound = require('react-native-sound');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#c2e3ff',
        padding: 20,
        height: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
    },
})

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {catSelect: 1, shelf:[]};
    }

    onCatPress = (item) => {
        console.log('onCatPress');
        this.setState({ catSelect: item.key });
        console.log(this.state);
    };

    onCardPress = (item) => {
        console.log('onCardPress');
        let shelf = this.state.shelf;
        shelf.push(item);
        this.setState({ shelf: shelf });
        console.log(this.state.shelf);

        if(item.sound != null) music = card.sound;
        else music = '../sounds/nosound.wav';

        var clicker = new Sound(music, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('Sound Error: ', error);
              return;
            }
        
            clicker.play((success) => {
              if (success) {
                console.log('OK');
              } else {
                console.log('Fail');
              }
            });
        });
          
        clicker.setVolume(0.5);
    };

    renderCat = ({item}) => {
        return (
            <CategoryItem
                category={item}
                onPress={this.onCatPress.bind(this, item)}
            />
        );
    };

    renderCard = ({item}) => {
        return (
            <CardItem
                card={item}
                onPress={this.onCardPress.bind(this, item)}
            />
        );
    };

    render = () => {
        var sortedCat = _.filter(Cards, {'categorie': this.state.catSelect})
    return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Text>Главный экран</Text>

    <View style={styles.container}>
        <FlatList
            data={this.state.shelf}
            renderItem={this.renderCard}
            keyExtractor={item => item.id.toString()}
            onPress={this.onCatPress.bind(this)}
            horizontal={true}
        />
    </View>

    <View style={styles.container}>
        <FlatList
            data={sortedCat}
            renderItem={this.renderCard}
            keyExtractor={item => item.id.toString()}
            onPress={this.onCatPress.bind(this)}
            horizontal={true}
        />
    </View>

    <View style={styles.container}>
        <FlatList
            data={Categories}
            renderItem={this.renderCat}
            keyExtractor={item => item.key.toString()}
            onPress={this.onCatPress.bind(this)}

            horizontal={true}
        />
    </View>

    <Button
        title="Категории карточек"
        onPress={() => this.props.navigation.push('Categories')} />
</View>



    )
    }
}