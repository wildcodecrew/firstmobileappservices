import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
export class CategoryItem extends Component {


    render = () => {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
            item: {
                backgroundColor: '#c2e3ff',
                padding: 10,
                height: 5,
                marginVertical: 4,
                marginHorizontal: 6,
            },
            title: {
                fontSize: 6,
            },
            thumbnail: {
                width: 50,
                height: 50,
            }
        })



        const { onPress, category } = this.props;
        let img;
        if (category.img != null) img = category.img;
        else img = require('../assets/images/noimage.png');
        
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.item}>
                    <Text>{category.title}</Text>
                    <Image style={styles.thumbnail} source={img} />
                </View>
            </TouchableOpacity>
        );
    };
}