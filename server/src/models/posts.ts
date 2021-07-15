import mongoose from 'mongoose';

let today: Date | string = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const Schema = mongoose.Schema;
const postsSchema = new Schema({
  username: {
    type: String,
    default: 'anonymous',
  },
  userPost: String,
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: today,
  },
});

export default mongoose.model('PSKL-posts', postsSchema);
