import { Request, Response } from 'express';
import { User, Thought } from '../models/Index.js';

export const getUsers = async(_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate('thoughts friends');
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
  return;
}

export const createUser = async(req: Request, res: Response) => {
  try {
    const dbUserData = await User.create(req.body);
    res.json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
}

  export const updateUser = async(req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) return res.status(404).json({ message: 'No user found with this ID' });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  }

  export const deleteUser = async(req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) return res.status(404).json({ message: 'No user found with this ID' });

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  }

  export const addFriend = async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  };
  
  export const removeFriend = async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  };
