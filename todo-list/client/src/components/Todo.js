export const Todo = ({
    _id,
    text,
    isComplete,
    onChangeStatus
}) => {
    return (
        <tr className={`todo${isComplete ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isComplete ? 'Complete' : 'Not Complete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => onChangeStatus(_id)}>Change status</button>
            </td>
        </tr >
    );
}