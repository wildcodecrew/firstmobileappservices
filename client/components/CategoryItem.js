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
                padding: 20,
                height: 10,
                marginVertical: 8,
                marginHorizontal: 16,
            },
            title: {
                fontSize: 12,
            },
        })



        const {onPress, category} = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Text>{category.title}</Text>
            </View>
            </TouchableOpacity>
        );
    };
}