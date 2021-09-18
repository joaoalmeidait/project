import React from "react";
import {ProgressViewIOSComponent, Text, View } from "react-native";
import { css } from "../assets/css/css";


export default function Page(props){
  
        return(
            <View style= {css.textPage}>
                <Text>o nome da empresa é {props.empresa} e seu fincionario é {props.name}. 
                comprou o produto {props.produto} na seguinte quantidade: {props.quantidade}
                </Text>
                
                
            </View>
        );
}