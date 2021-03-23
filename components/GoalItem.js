import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';



const GoalItem = (props) => {

    const handleDelete = (id) => {
        props.onDelete(id);
    }



    return (
    <TouchableOpacity onPress={()=>handleDelete(props.goal.item.id)}>
        <View style={styles.items}>
            <Text>{props.goal.item.value}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: "#cccccc",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginVertical: 5
    }
})
export default GoalItem;