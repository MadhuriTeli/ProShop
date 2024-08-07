import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async(req, res)=>{
    res.send('auth user');
});

// @desc User auth
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async(req, res)=>{
    res.send('register user');
});

// @desc logout user/ clear cookies
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async(req, res)=>{
    res.send('logout user');
});


// @desc  get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req, res)=>{
    res.send('get user profile');
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