import mongoose from 'mongoose';

let today: Date | string = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

interface UserPost extends mongoose.Document {
  username: string;
  userPost: string;
  likes: number;
  data: Date | string;
}

const postsSchema = new mongoose.Schema({
  username: String,
  userPost: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: today,
  },
});

export default mongoose.model<UserPost>('PSKL-posts', postsSchema);
