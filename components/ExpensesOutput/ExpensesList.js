import {View, Text, FlatList} from 'react-native';

function expenseItem(itemData) {
    return (
        <Text>{itemData.item.description}</Text>
    );
}

function ExpensesList({expenses}) {
    return (
 
            <FlatList 
                data={expenses}
                renderItem={expenseItem}
                keyExtractor={(item) => item.id}
            />
  
    );
}

export default ExpensesList;