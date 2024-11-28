import { Request, Response } from 'express';
import { User, Thought } from '../models/Index.js';

export const getThoughts = async(_req: Request, res: Response) => {
    try {
      const thoughts = await Thought.find().select('-__v');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  export const getThoughtById = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  };


  export const createThought = async(req: Request, res: Response) => {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const updateThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!thought) return res.status(404).json({ message: 'No thought found with this ID' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  }

  export const deleteThought = async(req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!thought) return res.status(404).json({ message: 'No thought found with this ID' });
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  }

  export const addReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  };
  
  // DELETE to remove a reaction
  export const removeReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  };

