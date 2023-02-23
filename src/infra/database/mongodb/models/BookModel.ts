import mongoose from 'mongoose'
const { Schema } = mongoose

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rent: Boolean,
  renter: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

export const BookModel = mongoose.model('Book', bookSchema)
