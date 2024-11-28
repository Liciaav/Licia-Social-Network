import { Schema, model, Document, Types } from 'mongoose';
import reactionschema, { IReaction } from './Reaction.js'

export interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: Types.DocumentArray<IReaction>;
}

const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionschema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual to retrieve reaction count
thoughtSchema.virtual('rgetReaction').get(function () {
  return this.reactions.length;
});

const Thought = model ('Thought', thoughtSchema);

export default Thought; 
