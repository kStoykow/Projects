export const Todo = ({
    _id,
    text,
    isCompleted,
    onChangeStatus
}) => {
    return (
        <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => onChangeStatus(_id, isCompleted)}>Change status</button>
            </td>
        </tr >
    );
}