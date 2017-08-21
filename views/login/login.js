const users = [
	{username:'keith', email:'keith@gmail.com'},
	{username:'mom', email:'mom@gmail.com'}
]

function getUser(username) {
	return users.find(function (user) {
		return user.username == username
	});
}

module.exports = {
	find: getUser,
	all:users	
}