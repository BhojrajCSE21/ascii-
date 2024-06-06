import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  city:{
    type:String,
    required:true,
  }
}, { timestamps: true });

const Gallery = mongoose.model('Image', imageSchema);

export default Gallery;
