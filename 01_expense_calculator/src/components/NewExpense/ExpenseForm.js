import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }


    /*
        
         // Using Single useState frunction
         
        const [userInput, setUserInput] = useState({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        });
    
        const titleChangeHandler = (event) => {
            setUserInput({
                ...userInput,
                enteredTitle: event.target.value
            })
            
            //setting value when updated value dependson prev value
            //example titleChangeHandler
            //
    
            // setUserInput((prevState)={
            //     return {...prevState,  enteredTitle: event.target.value}
            // })
        }
        const priceChangeHandler = (event) => {
            setUserInput({
                ...userInput,
                enteredAmount: event.target.value
            })
        }
        const dateChangeHandler = (event) => {
            setUserInput({
                ...userInput,
                enteredDate: event.target.value
            })
        }
        */
    const submitHandler = (event) => {
        event.preventDefault(); // for stop reloading the page

        const expense = {
            title: enteredTitle,
            amount: +enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSubmitExpenseForm(expense);

        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');

    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="Text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.0" step="0.01" value={enteredPrice} onChange={priceChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancle}>Cancle</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm;