import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HeaderTabs = () => {
    const [activate, setactivate] = useState("Delivery")
    console.log(activate)
    return (
        
        <View style={{  flexDirection:"row", alignSelf:"center"}}> 
           
            <HeaderButton text='Delivery' textColor="white" activate={activate} setactivate={setactivate}/>
            <HeaderButton text='Pick up'   textColor="black"  activate={activate} setactivate={setactivate}/> 


        </View>
    )
}

const HeaderButton = (props) => (
    
    <TouchableOpacity style = {{
        backgroundColor: props.activate === props.text ? "black" : "white", 
        paddingHorizontal: 10, 
        paddingVertical:6,
        borderRadius: 30
        
        }}
            onPress = {() => props.setactivate(props.text)}
        >
        <Text style = {{color: props.text === props.activate ? "white" : "black", fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
    </TouchableOpacity>
)

export default HeaderTabs
