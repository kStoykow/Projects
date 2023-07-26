import { useState } from "react";

export const AddForm = ({ onTodoSubmit }) => {
    const [inputText, setInputText] = useState('');

    function onInputChange(e) {
        setInputText(e);
    }

    return (
        <form className="form-inline" onSubmit={(e) => onTodoSubmit(e, inputText)}>
            <label htmlFor="todo" style={{ fontSize: "2rem", paddingRight: "10px" }}>Todo</label>
            <input type="text" className="form-control mb-2 mr-sm-2" id="todo" value={inputText} onChange={e => onInputChange(e.target.value)} />

            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    );
}