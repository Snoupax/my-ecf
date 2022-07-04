import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { ButtonLogin, Login, Label } from '../../styled/styled';

const LoginForm = () => {
    const { handleSubmit } = useContext(LoginContext);
    return (
        <>
            <Login onSubmit={(e) => handleSubmit(e)}>
                <Label>
                    Username
                    <input type="text" name="username" />
                </Label>
                <Label>
                    Password
                    <input type="password" name="password" />
                </Label>
                <ButtonLogin>Connexion</ButtonLogin>
            </Login>
            <div>
                <p>Les identifiants des deux utilisateurs : </p>
                <p>Username : test | Password : test</p>
                <p>Username : admin | Password : admin</p>
            </div>
        </>
    );
};

export default LoginForm;
