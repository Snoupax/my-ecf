import { useTodo } from '../../hooks/useTodo';
import InputTable from '../atoms/InputTable';
import Table from './Table';
import { StyH4 } from '../../styled/styled';

const ToDoList = () => {
    const { lists, setLists, value, handleSubmit, handleChange } = useTodo();
    const deleteTable = (id) => {
        let filtered = lists.filter((list) => list.id !== id);
        console.log(filtered);
        setLists(filtered);
    };

    return (
        <div>
            <StyH4>ToDoList</StyH4>
            <InputTable
                value={value}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            {lists.map((list) => (
                <Table key={list.id} list={list} deleteTable={deleteTable} />
            ))}
        </div>
    );
};

export default ToDoList;
