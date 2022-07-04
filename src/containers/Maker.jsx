import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { StyMaker } from '../styled/styled';

const Maker = () => {
    return (
        <StyMaker>
            <Header />
            <Content />
            <Footer />
        </StyMaker>
    );
};

export default Maker;
