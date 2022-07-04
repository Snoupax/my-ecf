import { useState } from 'react';

export const useTodo = () => {
    const [lists, setLists] = useState([]);
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value !== '') {
            setLists((prevState) => [
                ...prevState,
                {
                    id: Math.floor(Math.random() * 1000),
                    name: value,
                    complete: false,
                },
            ]);
            setValue('');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return { lists, setLists, value, setValue, handleSubmit, handleChange };
};
