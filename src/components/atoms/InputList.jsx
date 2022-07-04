import { StyInputList } from '../../styled/styled';

const InputList = ({ value, handleChange, handleSubmit }) => {
    return (
        <StyInputList>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    autoFocus
                    value={value}
                    type="text"
                    name="listName"
                    onChange={(e) => handleChange(e)}
                />
                <button>Créer une liste</button>
            </form>
        </StyInputList>
    );
};

export default InputList;
