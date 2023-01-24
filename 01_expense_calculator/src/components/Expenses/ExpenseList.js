import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return (
        <ul className="expense-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    price={expense.amount}
                    key={expense.id}
                />
            ))}
        </ul>
    )

};

export default ExpenseList;