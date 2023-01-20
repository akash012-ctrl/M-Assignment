import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  videoTitle: String,
  videoChannelTitle: String,
  videoDesc: String,
  videoPubDate: String,
  videoThumbNail: String,
});

export default model('Video', videoSchema);
