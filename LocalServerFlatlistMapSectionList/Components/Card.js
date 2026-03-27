import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ todo }) => {
    return (
    <ScrollView>
        <View  ><Text style={styles.cardText}>Cards</Text></View>
        
        {
            todo.map((item)=>{
                return(
                    <View style={styles.cardWrap} key={item.id}><Text style={styles.textWrap}> 
                        
                        <View ><Text style={styles.cardHeaderText}>{item.todo}</Text></View>
                        <View ><Text style={{color:item.completed?"green":"red",fontWeight:'bold'}}>{item.completed?"Completed":"Pending"}</Text></View>
                        <View Style={styles.cardFooter}><Text>{item.userId}</Text></View>
                    </Text></View>
            )})
        }
     
    </ScrollView >
  )
}

export default Card

const styles = StyleSheet.create({
    cardWrap:{
        border:4,
        borderWidth:4,
        borderColor:'black',
        borderStyle:"solid",
        marginVertical:4,
        marginHorizontal:4,
        backgroundColor:"plum",
        padding:4,
        height:70
    },
    textWrap:{
        textAlign:'center'

    },
    cardText:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        padding:12,
    },
    cardHeaderText:{
        fontWeight:'bold',
        fontSize:15,
    },
    cardBodyText:{
        
    },
    cardFooter:{

    }
})