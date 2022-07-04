import { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState('');

    const unlogged = () => {
        setLogged(false);
    };

    const data = [
        {
            userID: 1,
            username: 'test',
            password: 'test',
            firstname: 'Alain',
        },
        {
            userID: 2,
            username: 'admin',
            password: 'admin',
            firstname: 'Alice',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = data.find(
            (user) => user.username === e.target.username.value
        );

        // Compare user info
        if (userData) {
            if (userData.password !== e.target.password.value) {
                // Invalid password
                console.log('pas bon mdp');
            } else {
                console.log('connecté');
                setLogged(true);
                setUser(userData.firstname);
            }
        } else {
            // Username not found
            console.log('pas bon ID');
        }
    };

    return (
        <LoginContext.Provider
            value={{ logged, setLogged, unlogged, handleSubmit, user }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
