import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
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



        const {onPress, category} = this.props;

        if(category.image != null) img = category.image;
        else img = '../images/noimage.png';

        return (
            <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Text>{category.title}</Text>
                <Image style={styles.thumbnail} source={require(img)} />
            </View>
            </TouchableOpacity>
        );
    };
}