const UserService = {
    userLookup: function(id, users) {
        let user = users.find( u => u.id === id );
        return user ? user.username : "";
    }
};

export default UserService;