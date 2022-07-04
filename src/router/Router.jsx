import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/molecules/Navbar';
import ToDoList from '../components/molecules/ToDoList';
import Error403 from '../containers/Content/Error403';
import Home from '../containers/Content/Home';
import Login from '../containers/Content/Login';
import PrivateRoute from './PrivateRoute';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<PrivateRoute />}>
                    <Route path="todolist" element={<ToDoList />} />
                </Route>
                <Route path="/403" element={<Error403 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
