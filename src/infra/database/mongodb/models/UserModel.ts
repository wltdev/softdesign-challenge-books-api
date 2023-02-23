import mongoose from 'mongoose'
import { hash, compare } from 'bcrypt'

const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10)

  next()
})

// userSchema.pre('findOneAndRent', async function (next) {
//   const payload = this.getRent().$set

//   if (payload.password && payload.password.length >= 6) {
//     payload.password = await hash(payload.password, 10)
//   }

//   next()
// })

userSchema.methods.isValidPassword = function (candidatePassword: string) {
  return compare(candidatePassword, this.password)
}

export const UserModel = mongoose.model('User', userSchema)
