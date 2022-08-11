const users = [];

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Unique name
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'This username is already in use!'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);

    // Things went well
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    return users[index];
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}