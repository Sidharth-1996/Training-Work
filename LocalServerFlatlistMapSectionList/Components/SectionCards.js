import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionCards = ({sections}) => {
  return (
      <SectionList
      sections={sections}
      keyExtractor={(item)=>item.id}

      renderItem={({item})=>(
        <View style={styles.cardWrap}>
            <Text style={styles.cardHeaderText}>{item.todo}</Text>
            <Text style={{color:item.completed?"green":"red"}}>{item.completed?'Completed':'Pending'}</Text>
            <Text style={styles.cardFooterText}>User :{item.userId}</Text>
        </View>
      )}

      renderSectionHeader={({section: {title}})=>(
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      renderSectionFooter={({section:{title}})=>(
        <Text style={styles.sectionFooter}>This marks the end of all the {title} todo's in our dataset.</Text>
      )}
      contentContainerStyle={{paddingBottom:20}}
      />
  )
}

export default SectionCards

const styles = StyleSheet.create({
    sectionHeader : {
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"#ddd",
        padding:10,
        textAlign:'center',
    },
    cardWrap:{
        borderWidth:1,
        borderColor:'black',
        marginVertical:6,
        marginHorizontal:10,
        backgroundColor:'plum',
    },
    cardHeaderText:{
        fontSize:16,
        fontWeight:'bold',
    },
    cardFooterText:{
        marginTop:5,
        fontSize:12,
    },
    sectionFooter: {
        fontSize:12,
        fontWeight:'600',
        backgroundColor:"#ddd",
        padding:10,
        textAlign:'center',
    },
})