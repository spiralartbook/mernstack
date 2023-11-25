// @desc Register new users
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

// @desc Login(Authenticate) a user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({message: 'login User'})
}

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({message: 'User data Display'})
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
    
}