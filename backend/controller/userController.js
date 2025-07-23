import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user & get token
// @route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async(req, res)=>{
    res.send("auth user");
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    if (user) {
      generateToken(res, user._id);
  
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });
  

// @desc logout user/ clear cookies
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async(req, res)=>{
    res.send('logout user');
});


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });

// @desc update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async(req, res)=>{
    res.send('update user profile');
});

// @desc get users
// @route GET /api/users
// @access Private/admin
const getUsers = asyncHandler(async(req, res)=>{
    res.send('get users');
});

// @desc get user by id
// @route GET /api/users/:id
// @access Private/admin
const getUserById = asyncHandler(async(req, res)=>{
    res.send('get user by id');
});


// @desc delete user
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser = asyncHandler(async(req, res)=>{
    res.send('delete users');
});

// @desc update user
// @route PUT /api/users/:id
// @access Private/admin
const updateUser = asyncHandler(async(req, res)=>{
    res.send('update user');
});

export {authUser, registerUser, logoutUser, getUserProfile , updateUserProfile , getUsers, getUserById, deleteUser, updateUser}