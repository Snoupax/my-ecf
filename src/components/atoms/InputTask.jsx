import { useState } from 'react';

const InputTask = ({ task, tasks, setTasks }) => {
    const [value, setValue] = useState(task.name);

    const handleSubmit = (e, id) => {
        e.preventDefault();
        if (value !== '') {
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, name: value, state: 1 } : task
                )
            );
        }
    };

    const handlePress = (e, id) => {
        if (value !== '') {
            if (e.key === 'Enter') {
                setTasks(
                    tasks.map((task) =>
                        task.id === id
                            ? { ...task, name: value, state: 1 }
                            : task
                    )
                );
            }
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e, task.id);
            }}
        >
            <input
                autoFocus
                value={value}
                type="text"
                name="taskName"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => {
                    handlePress(e, task.id);
                }}
            />
            <button>Ajouter une tâche</button>
        </form>
    );
};

export default InputTask;
