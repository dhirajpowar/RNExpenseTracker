import { Text } from "react-native";
import { useLayoutEffect } from "react";

function ManageExpense({route, navigation }) {

    const expenseEditId = route.params?.expenseId;

    const isEditing = !!expenseEditId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing])
    return <Text>Manage expense</Text>;
}

export default ManageExpense;