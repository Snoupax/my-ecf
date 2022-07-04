import { useContext, useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import InputList from '../atoms/InputList';
import List from './List';
import { ButtonTask, StyTable, StyTableName } from '../../styled/styled';
import { ThemeContext } from '../../context/ThemeContext';

const Table = ({ list, deleteTable }) => {
    const { theme } = useContext(ThemeContext);

    const { lists, setLists, value, handleSubmit, handleChange } = useTodo();
    const [counter, setCounter] = useState(0);

    const deleteList = (id) => {
        let filtered = lists.filter((list) => list.id !== id);
        console.log(filtered);
        setLists(filtered);
    };

    return (
        <StyTable theme={theme}>
            <div>
                <ButtonTask onClick={() => deleteTable(list.id)}>
                    <img
                        src="https://img.icons8.com/ios/35/000000/delete--v1.png"
                        alt="delete"
                    />
                </ButtonTask>
                <StyTableName>Tableau : {list.name}</StyTableName>
                <p>
                    Il vous reste {counter} tâches à effectuer dans ce tableau
                </p>
            </div>

            <InputList
                value={value}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            {lists.map((list) => (
                <List
                    key={list.id}
                    list={list}
                    deleteList={deleteList}
                    counter={counter}
                    setCounter={setCounter}
                    setLists={setLists}
                    lists={lists}
                />
            ))}
        </StyTable>
    );
};

export default Table;
