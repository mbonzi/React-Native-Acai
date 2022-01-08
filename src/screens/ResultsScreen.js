import React from 'react';
import { View, Text} from 'react-native';

const SearchScreen = () => {

    if(!result){
        return null
    }

    return (
        <View >

            <Text>
                Item Title
            </Text>
            <Text >
                Item Description text
            </Text>

        </View>
    )
}

export default SearchScreen;