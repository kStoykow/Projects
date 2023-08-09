const baseUrl = 'http://localhost:3005/api/users';

const create = async (data) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const userData = await response.json();
    return userData.user;
}

const edit = async (data) => {

    const response = await fetch(baseUrl + `/${data._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const userData = await response.json();
    return userData.user;
}

export {
    create,
    edit
}