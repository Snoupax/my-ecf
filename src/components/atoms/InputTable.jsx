import { StyInputTable } from '../../styled/styled';

const InputTable = ({ value, handleChange, handleSubmit }) => {
    return (
        <StyInputTable>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    autoFocus
                    value={value}
                    type="text"
                    name="tableName"
                    onChange={(e) => handleChange(e)}
                />
                <button>Créer un tableau</button>
            </form>
        </StyInputTable>
    );
};

export default InputTable;
