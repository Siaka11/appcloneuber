import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchBar = () => {
    return (
        <View style={{flexDirection:"row", marginTop:15}}>
            <GooglePlacesAutocomplete
             placeholder="Search" 
            styles={{
                textInput:{
                    backgroundColor:"#eee",
                    borderRadius: 30,
                    marginTop: 7,
                    fontWeight: "800",
                    
                },
                textInputContainer:{
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: 10


                }
            }}

            renderLeftButton = {() => (
                <View style={{
                    marginLeft: 10
                    }}>
                    <Ionicons name="location-sharp" size={24}/>
                </View>  
            )}   

            renderRightButton
            />
        </View>
    )
}

export default SearchBar
