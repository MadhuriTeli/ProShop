import express from 'express';
import {authUser, registerUser, logoutUser, getUserProfile , updateUserProfile , getUsers, getUserById, deleteUser, updateUser} from '../controller/userController.js';
const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post("/auth", authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUserProfile);



export default router;