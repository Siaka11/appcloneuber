import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs/> 
                <SearchBar/>  
                
            </View>
</SafeAreaView>
        
    )
}

export default Home
