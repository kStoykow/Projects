
export const AddForm = ({ onTodoSubmit }) => {

    return (
        <form className="form-inline" onSubmit={(e) => onTodoSubmit(e)}>
            <label htmlFor="todo" style={{ fontSize: "2rem", paddingRight: "10px" }}>Todo</label>
            <input type="text" className="form-control mb-2 mr-sm-2" id="todo" />

            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    );
}