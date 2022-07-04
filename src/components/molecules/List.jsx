import { useState, useEffect, useContext } from 'react';
import Task from './Task';
import { ButtonTask, StyList, StyTableName } from '../../styled/styled';
import { ThemeContext } from '../../context/ThemeContext';

const List = ({ list, deleteList, counter, setCounter, setLists, lists }) => {
    const { theme } = useContext(ThemeContext);

    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks((prevState) => [
            ...prevState,
            {
                id: Math.floor(Math.random() * 1000),
                name: '',
                state: 0,
            },
        ]);
        setCounter(counter + 1);
    };

    const deleteTask = (id) => {
        let filtered = tasks.filter((task) => task.id !== id);
        setTasks(filtered);
    };

    const analyseTasks = (id) => {
        let translate = tasks.map((task) => task.state === 2);

        if (translate.length === 0) {
            return;
        }
        for (let i = 0; i < translate.length; i++) {
            if (!translate[i]) {
                setLists(
                    lists.map((list) =>
                        list.id === id ? { ...list, complete: false } : list
                    )
                );
                return;
            }
        }

        setLists(
            lists.map((list) =>
                list.id === id ? { ...list, complete: true } : list
            )
        );
    };

    useEffect(() => {
        analyseTasks(list.id);
    }, [tasks]);

    return (
        <StyList theme={theme} style={list.complete ? { opacity: '0.5' } : {}}>
            <div>
                <ButtonTask onClick={(e) => deleteList(list.id)}>X</ButtonTask>
                <StyTableName>Liste : {list.name}</StyTableName>
            </div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    deleteTask={deleteTask}
                    counter={counter}
                    setCounter={setCounter}
                />
            ))}
            <div>
                <button onClick={(e) => addTask()}>Ajouter une tâche</button>
            </div>
        </StyList>
    );
};

export default List;
