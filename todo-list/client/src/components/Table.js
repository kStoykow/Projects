import { Todo } from "./Todo";

export const Table = ({
    todos,
    onChangeStatus
}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>

            <tbody>
                {todos.map(e => <Todo key={e._id} {...e} onChangeStatus={onChangeStatus} />)}
            </tbody>
        </table>
    );
}