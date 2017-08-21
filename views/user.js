const users = [
	{login_ID: 'oscar', password: 'whiskey'}
	{login_ID: 'mike', password: 'tango'}
	{login_ID: 'golf', password: 'foxtrot'}
]

function verifyUser(login_ID) {
	return users.find(function (user){
		return user.username == username
	});
}

module.exports = {
	find: verifyUser,
	all: users
}
