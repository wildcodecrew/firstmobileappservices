import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
export class CardItem extends Component {

    render = () => {
        const {onPress, card} = this.props;

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
            thumbnail: {
                width: 100,
                height: 100,
            }
        })
        
        return (
            <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Text>{card.title}</Text>
                <Image style={styles.thumbnail} source={ card.img } />
            </View>
            </TouchableOpacity>
        );
    };
}