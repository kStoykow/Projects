import { useState, useEffect } from 'react';

import { UserRow } from "./UserRow";
import { DeleteUserModal } from "../DeleteUserModal/DeleteUserModal";
import { UserDetails } from "../UserDetails/UserDetails";
import { NoUsersIcon } from '../FeedbackIcons/NoUsersIcon/NoUsersIcon';
import { UserSaveForm } from '../UserSaveForm/UserSaveForm';

import * as userService from '../../services/userService';
const baseUrl = 'http://localhost:3005/api/users';

export const Table = () => {
    const [users, setUsers] = useState([]);
    const [isCreateModal, setIsCreateModal] = useState(false);
    const [userIdInfoModal, setUserIdInfoModal] = useState(false);
    const [userIdDeleteModal, setUserIdDeleteModal] = useState(false);
    const [userIdEditModal, setUserIdEditModal] = useState(false);
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => data.users)
            .then(users => setUsers(users));
    }, []);

    const addUserHandler = async (e, body) => {
        e.preventDefault();
        const newUser = await userService.create(body);

        setUsers(state => [...state, newUser]);
        setIsCreateModal(false);
    }

    const editUserHandler = async (e, body) => {
        e.preventDefault();

        const updatedUser = await userService.edit(body);
        setUsers(state => state.map(e => e._id === updatedUser._id ? updatedUser : e));
        setUserIdEditModal(false);
    }

    const openSaveUserModalHandler = () => {
        setIsCreateModal(true);
    }

    return (
        <>
            <div className="table-wrapper">
                {users.length === 0 && <div className="loading-shade"><NoUsersIcon /> </div>}

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon active-con svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {
                        users &&
                        <tbody>
                            {users.map(e => <UserRow
                                key={e._id}
                                {...e}
                                setUserIdInfoModal={setUserIdInfoModal}
                                setUserIdDeleteModal={setUserIdDeleteModal}
                                setUserIdEditModal={setUserIdEditModal} />)}
                        </tbody>
                    }

                </table>
            </div>
            <button className="btn-add btn" onClick={() => openSaveUserModalHandler()}>Add new user</button>

            {isCreateModal && <UserSaveForm setIsCreateModal={setIsCreateModal} isCreate={true} addUserHandler={addUserHandler} />}
            {userIdEditModal && <UserSaveForm user={userIdEditModal} setUserIdEditModal={setUserIdEditModal} isCreate={false} editUserHandler={editUserHandler} />}
            {userIdInfoModal && <UserDetails {...userIdInfoModal} setUserIdInfoModal={setUserIdInfoModal} />}
            {userIdDeleteModal && <DeleteUserModal id={userIdDeleteModal} setUsers={setUsers} setUserIdDeleteModal={setUserIdDeleteModal} />}
        </>
    );
}


