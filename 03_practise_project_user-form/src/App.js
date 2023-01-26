import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import Userlist from './Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }


  return (
    // React.Fragment
    <>
      <AddUser onAddUser={addUserHandler} />
      <Userlist users={usersList} />
    </>
  );
}

export default App;
