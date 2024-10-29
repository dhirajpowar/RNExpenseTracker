import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from "../components/UI/Button";

function ManageExpense({route, navigation }) {

    const expenseEditId = route.params?.expenseId;

    const isEditing = !!expenseEditId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing])

    function deleteExpenseHandler(){}
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button mode='flat'>Cancel</Button>
                <Button>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
                
                }
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})