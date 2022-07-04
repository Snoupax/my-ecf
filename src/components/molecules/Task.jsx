import AddTaskModal from '../atoms/AddTaskModal';
import { StyTask, ButtonTask } from '../../styled/styled';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext, useState } from 'react';

const Task = ({ task, tasks, setTasks, deleteTask, counter, setCounter }) => {
    const { theme } = useContext(ThemeContext);
    const [done, setDone] = useState(false);

    let toDo = '';

    switch (task.state) {
        case 0:
            toDo = (
                <AddTaskModal task={task} tasks={tasks} setTasks={setTasks} />
            );
            break;
        case 1:
            toDo = <p>{task.name}</p>;
            break;
        case 2:
            toDo = <p>{task.name}</p>;
            break;
        default:
            console.log('Bug');
    }

    const validTask = (id) => {
        switch (task.state) {
            case 1:
                setTasks(
                    tasks.map((task) =>
                        task.id === id ? { ...task, state: 2 } : task
                    )
                );
                setCounter(counter - 1);
                setDone(true);
                break;
            case 2:
                setTasks(
                    tasks.map((task) =>
                        task.id === id ? { ...task, state: 1 } : task
                    )
                );
                setCounter(counter + 1);
                setDone(false);
                break;
            default:
                console.log('Bug');
        }
    };

    const editTask = (id) => {
        switch (task.state) {
            case 0:
                setTasks(
                    tasks.map((task) =>
                        task.id === id ? { ...task, state: 0 } : task
                    )
                );
                break;
            case 1:
                setTasks(
                    tasks.map((task) =>
                        task.id === id ? { ...task, state: 0 } : task
                    )
                );
                break;
            case 2:
                setTasks(
                    tasks.map((task) =>
                        task.id === id ? { ...task, state: 2 } : task
                    )
                );
                break;
            default:
                console.log('Bug');
        }
    };

    return (
        <StyTask theme={theme} done={done}>
            {toDo}

            <div>
                <ButtonTask onClick={(e) => validTask(task.id)}>
                    <img
                        src="https://img.icons8.com/external-basicons-line-edtgraphics/35/000000/external-check-ui-edtim-outline-edtim.png"
                        alt="valid"
                    />
                </ButtonTask>
                <ButtonTask onClick={(e) => editTask(task.id)}>
                    <img
                        src="https://img.icons8.com/ios-glyphs/35/000000/edit--v1.png"
                        alt="edit"
                    />
                </ButtonTask>
                <ButtonTask onClick={(e) => deleteTask(task.id)}>
                    <img
                        src="https://img.icons8.com/ios/35/000000/delete--v1.png"
                        alt="delete"
                    />
                </ButtonTask>
            </div>
        </StyTask>
    );
};

export default Task;
