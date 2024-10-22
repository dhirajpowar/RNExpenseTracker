import {View, FlatList} from 'react-native';

import ExpenseItem from './ExpenseItem';

function expenseItem(itemData) {
    return (
        <ExpenseItem {...itemData.item}/>
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