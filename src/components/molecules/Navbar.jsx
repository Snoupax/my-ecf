import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { ThemeContext } from '../../context/ThemeContext';
import { StyNavbar, StyLink } from '../../styled/styled';

const Navbar = () => {
    const { logged, unlogged } = useContext(LoginContext);
    const { theme } = useContext(ThemeContext);

    return (
        <StyNavbar theme={theme}>
            <StyLink to="/" theme={theme}>
                Home
            </StyLink>
            {logged ? (
                <>
                    <StyLink to="/todolist" theme={theme}>
                        Vos Tableaux
                    </StyLink>
                    <StyLink
                        to="/login"
                        theme={theme}
                        onClick={() => unlogged()}
                    >
                        Deconnexion
                    </StyLink>
                </>
            ) : (
                <StyLink to="/login" theme={theme}>
                    Login
                </StyLink>
            )}
        </StyNavbar>
    );
};

export default Navbar;
