import { useContext, useEffect } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/molecules/LoginForm';
import { StyH4 } from '../../styled/styled';

const Login = () => {
    const { logged } = useContext(LoginContext);
    let navigate = useNavigate();
    useEffect(() => {
        if (logged) {
            navigate('/todolist');
        }
    }, [logged, navigate]);

    return (
        <div>
            <StyH4>Login</StyH4>
            <LoginForm />
        </div>
    );
};

export default Login;
