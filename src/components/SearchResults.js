import React from 'react';
import {View, Text, FlatList } from 'react-native';

const SearchResults = ( ) => {

    if(!results.length){
        return null;
    }

    return (
        <View>
            <Text>
                Title 
            </Text>
            <FlatList>
                
            </FlatList>
        </View>
    )
}

export default SearchResults;