import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Icon } from 'react-native-vector-icons/Icon'


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
                <View>
                   <Icon name="facebook"/>
                </View>  
            )
            
            }   
            />
        </View>
    )
}

export default SearchBar
