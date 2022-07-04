import { useState } from 'react';

import React from 'react';
import Modal from './Modal';

const AddTaskModal = ({ task, tasks, setTasks }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div id="portal">
            <div>
                <Modal
                    task={task}
                    open={isOpen}
                    tasks={tasks}
                    setTasks={setTasks}
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </div>
    );
};

export default AddTaskModal;
