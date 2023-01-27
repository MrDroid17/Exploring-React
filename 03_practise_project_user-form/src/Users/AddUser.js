import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserSubmitHandler = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        /**
         * name and age is evaluate by useing ref.
         * furthmore these name and age can be used to replace state base code.
         * refs based code has less code than state based code
         * for read only purpose probably refs is a better choise over state
         * refs based componnet --- uncontrolled components
         * state based component --- controlled components
         */
        console.log(name, age);
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: "Please name a valid name or age(non-empty values)."
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: "Please enter a valid age(> 0)."
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />
            }
            <Card className={classes.input} >
                <form onSubmit={addUserSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                        ref={nameInputRef} />

                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                        ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    )
}


export default AddUser;