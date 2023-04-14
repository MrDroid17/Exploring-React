import React, { useEffect, useState } from 'react';

//AuthContext
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLoggedInfo = localStorage.getItem('isLoggedIn');
        if (userLoggedInfo === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', "1");
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={
                {
                    isLoggedIn: isLoggedIn,
                    onLogin: loginHandler,
                    onLogout: logoutHandler
                }
            }>
            {props.children}
        </AuthContext.Provider >
    )

}

export default AuthContext;