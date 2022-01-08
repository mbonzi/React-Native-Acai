import React from 'react';
import {View, Text, ScrollView} from 'react-native';
/*import SearchBar from '../components/Search';
import SearchResults from '../components/SearchResults';
*/


const SearchScreen = ({navigation}) => {
     
    return(
    <View style={{flex:1}}>

        <Text>Additional Text</Text>
        
        <ScrollView>
            <ResulList title='Acai Bowls' navigation={navigation}/>
            <ResulList title='Fresh Pressed Juices' navigation={navigation}/>
            <ResulList title='Smoothies' navigation={navigation}/>
        </ScrollView>
        
    </View>
    );
}


export default SearchScreen