export const Todo = ({
    _id,
    text,
    isComplete
}) => {
    return (
        <tr className="todo is-completed">
            <td>{text}</td>
            <td>{isComplete ? 'Complete' : 'Not Complete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}