import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StyFooter, StyParaFoot } from '../styled/styled';

const Footer = () => {
    let year = new Date().getFullYear();
    const { theme } = useContext(ThemeContext);

    return (
        <StyFooter theme={theme}>
            <StyParaFoot>Copyright © {year}</StyParaFoot>
            <StyParaFoot>Tous droits réservés.</StyParaFoot>
            <StyParaFoot>Développé par Snoupax.</StyParaFoot>
        </StyFooter>
    );
};

export default Footer;
