import { useState } from "react";


export const AddCategory = ({ onAddCategory }) => {


    const [inputValue, setInputValue] = useState('');


    const onInputChange = ({ target }) => {
        setInputValue(target.value);

    }
    const onSubmit = (event) => {

        onAddCategory(inputValue)

        if (inputValue.trim().length <= 1) return;
        event.preventDefault();
        setInputValue('')

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Escribí acá bolu2"
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}
