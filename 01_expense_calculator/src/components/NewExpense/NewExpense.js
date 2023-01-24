import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const onSubmitExpenseHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        console.log(newExpense);
        props.onNewExpenseSave(newExpense);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSubmitExpenseForm={onSubmitExpenseHandler} onCancle={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;