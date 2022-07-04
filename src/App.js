import './App.css';
import Maker from './containers/Maker';
import LoginProvider from './context/LoginContext';
import ThemeProvider from './context/ThemeContext';

function App() {
    return (
        <LoginProvider>
            <ThemeProvider>
                <div className="App">
                    <Maker />
                </div>
            </ThemeProvider>
        </LoginProvider>
    );
}

export default App;
